/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Black Ops One", system-ui;
    color: whitesmoke;
    font-weight: 400;
}

.main-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    background-color: #001a33;
    padding: 24px 0 0 0;
}

h1 {
    font-size: 46px;
    letter-spacing: 16px;
}

h2 {
    font-size: 32px;
    letter-spacing: 2px;
}

h3 {
    font-size: 24px;
    letter-spacing: 2px;
    margin-bottom: 8px;
}

button {
    font-size: 20px;
    background-color: whitesmoke;
    color: #001a33;
    border-radius: 12px;
    width: 250px;
    height: 50px;
    cursor: pointer;
}

.ship-placement {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 26px;
    letter-spacing: 2px;
}

.gameboards-container {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 96px;
}

.board-cell {
    width: 50px;
    height: 50px;
    background-color: #004080;
    border: 1px solid #001a33;
    border-radius: 4px;
}

.board {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}

dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 18px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #001a33;
    text-align: center;
    padding: 56px 152px;
    opacity: 0.98;
}

dialog h2 {
    color: #001a33;
    font-size: 58px;
    letter-spacing: 8px;
    margin-bottom: 48px;
}

dialog button {
    width: 400px;
    font-size: 34px;
}
`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,uCAAuC;IACvC,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,4BAA4B;IAC5B,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,mBAAmB;IACnB,4CAA4C;IAC5C,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: \"Black Ops One\", system-ui;\n    color: whitesmoke;\n    font-weight: 400;\n}\n\n.main-container {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n    align-items: center;\n    background-color: #001a33;\n    padding: 24px 0 0 0;\n}\n\nh1 {\n    font-size: 46px;\n    letter-spacing: 16px;\n}\n\nh2 {\n    font-size: 32px;\n    letter-spacing: 2px;\n}\n\nh3 {\n    font-size: 24px;\n    letter-spacing: 2px;\n    margin-bottom: 8px;\n}\n\nbutton {\n    font-size: 20px;\n    background-color: whitesmoke;\n    color: #001a33;\n    border-radius: 12px;\n    width: 250px;\n    height: 50px;\n    cursor: pointer;\n}\n\n.ship-placement {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 26px;\n    letter-spacing: 2px;\n}\n\n.gameboards-container {\n    margin-top: 24px;\n    display: flex;\n    justify-content: center;\n    gap: 96px;\n}\n\n.board-cell {\n    width: 50px;\n    height: 50px;\n    background-color: #004080;\n    border: 1px solid #001a33;\n    border-radius: 4px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\ndialog {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 18px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    color: #001a33;\n    text-align: center;\n    padding: 56px 152px;\n    opacity: 0.98;\n}\n\ndialog h2 {\n    color: #001a33;\n    font-size: 58px;\n    letter-spacing: 8px;\n    margin-bottom: 48px;\n}\n\ndialog button {\n    width: 400px;\n    font-size: 34px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/script/boardUI.js":
/*!*******************************!*\
  !*** ./src/script/boardUI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadBoardUI),
/* harmony export */   updateBoardUI: () => (/* binding */ updateBoardUI)
/* harmony export */ });
/* harmony import */ var _shipUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipUI */ "./src/script/shipUI.js");
/* harmony import */ var _computerAI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computerAI */ "./src/script/computerAI.js");



function loadBoardUI (player, computerAI) {
    const playerBoard = document.querySelector(".player-board")
    createGrid(player.gameboard.board, playerBoard)

    const computerBoard = document.querySelector(".computer-board")
    createGrid(computerAI.gameboard.board, computerBoard)

    ;(0,_shipUI__WEBPACK_IMPORTED_MODULE_0__["default"])(player, computerAI)

    return playerBoard, computerBoard
}

function createGrid (board, div) {
    let rowID = 0
    board.forEach((arr) => { 
        let columnID = 0
        arr.forEach(() => {
            const cell = document.createElement("div")
            cell.classList.add("board-cell")  
            cell.id = `${rowID}${columnID}`
            div.appendChild(cell)
            columnID++
        })
        rowID++
    });
}

function updateBoardUI (message, row, column, defender) {
    let element
    if (defender instanceof _computerAI__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        const parent = document.querySelector(".computer-board")
        element = parent.children[`${row}${column}`]
    } else {
        const parent = document.querySelector(".player-board")
        element = parent.children[`${row}${column}`]
    }    
    if (message === "hit") {
        element.style.backgroundColor = "#d60000"
    }
    else if (message === "miss") {
        element.style.backgroundColor = "#D3D3D3"
    }
}

/***/ }),

/***/ "./src/script/computerAI.js":
/*!**********************************!*\
  !*** ./src/script/computerAI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComputerAI)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/script/gameboard.js");
/* harmony import */ var _boardUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardUI */ "./src/script/boardUI.js");



class ComputerAI{
    constructor () {
        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]()
    }

    placeShipRandomly(ships) {
        this.gameboard.placeShipRandom(ships)
    }

    randomAttack (player, row, column) {
        let message
        message = player.gameboard.receiveAttack(row, column)
        ;(0,_boardUI__WEBPACK_IMPORTED_MODULE_1__.updateBoardUI)(message, row, column, player)
        return message
    }

}

/***/ }),

/***/ "./src/script/game.js":
/*!****************************!*\
  !*** ./src/script/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrIncludesArr: () => (/* binding */ arrIncludesArr),
/* harmony export */   changeColumn: () => (/* binding */ changeColumn),
/* harmony export */   changeRow: () => (/* binding */ changeRow),
/* harmony export */   "default": () => (/* binding */ createGame),
/* harmony export */   playGame: () => (/* binding */ playGame)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/script/player.js");
/* harmony import */ var _computerAI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computerAI */ "./src/script/computerAI.js");
/* harmony import */ var _boardUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boardUI */ "./src/script/boardUI.js");




function createGame () {
    const boardComputer = document.querySelector(".computer")
    boardComputer.style.display = "none"
    const player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]()
    const computerAI = new _computerAI__WEBPACK_IMPORTED_MODULE_1__["default"]()
    ;(0,_boardUI__WEBPACK_IMPORTED_MODULE_2__["default"])(player, computerAI)    
}

function playGame (player, computerAI) {
    setupUI ()
    createClickEvent (player, computerAI)
}

function createClickEvent (player, computerAI) {
    const computerBoard = document.querySelector(".computer-board")
    computerBoard.style.cursor = "pointer"
    computerBoard.addEventListener("click", (event) => {
        computerBoard.style.cursor = "not-allowed"
        gameRound(event, player, computerAI)
    }, {once : true})
}


let hits = []
let alreadyHit = []

async function gameRound (event, player, computerAI) {
    const message = player.sendAttack(event.target.id[0], event.target.id[1], computerAI)
    if (message === "Game Over") {
        showDialog ("player")
        return
    } else if (message === "already hit" || message === "hit") {
        createClickEvent(player, computerAI)
        return
    }

    let row
    let column
    let cell
    let delay = true
    let play = true
    while (play === true) {
        let message2
        if (hits.length > 0) {
            row = hits[hits.length - 1][0]
            column = hits[hits.length - 1][1]

            let call = 0
            if (hits.length > 1) {
                if (row === hits[hits.length - 2][0]) {
                    cell = changeColumn(row, column, call)
                }
                else if (column === hits[hits.length - 2][1]) {
                    cell = changeRow(row, column, call)
                }
                console.log(cell)
                row = cell.row
                column = cell.column
            } 
            else {
                if (arrIncludesArr(alreadyHit, [row + 1, column]) || ((row + 1) > 9)) {
                    if (arrIncludesArr(alreadyHit, [row - 1, column]) || ((row - 1) < 0)) {
                        if (arrIncludesArr(alreadyHit, [row, column + 1]) || ((column + 1) > 9)) {
                            if (arrIncludesArr(alreadyHit, [row, column - 1]) || ((column - 1) < 0)) {
                                row = Math.floor(Math.random() * 10)
                                column = Math.floor(Math.random() * 10)
                            } else {
                                column -= 1
                            }
                        } else {
                            column += 1
                        }
    
                    } else {
                        row -= 1
                    }
    
                } else {
                    row += 1
                }
            }

            
        } else {
            row = Math.floor(Math.random() * 10)
            column = Math.floor(Math.random() * 10)
        }
        message2 = await computerAttack (computerAI, player, row, column, delay)
        if (message2 === "Game Over") {
            play = false
            showDialog ("computer")
            return
        }  
        if (message2 === "hit") {
            hits.push([row, column])
            alreadyHit.push([row, column])
 
        }
        if (message2 === "miss") {
            alreadyHit.push([row, column])
        }
        if (message2 === "already hit") {
            delay = false
        }
        if (message2 === "hit" || message2 === "already hit") {
            play = true
        } else {
            play = false
        }
        
    }
    createClickEvent(player, computerAI)               
}

function changeColumn (row, column, call) {
    call++
    let i = 0
    let addToColumn = 0
    if (arrIncludesArr(alreadyHit, [row, column + 1]) && arrIncludesArr(hits, [row, column + 1]) === false) {
        if (column > 0) {
            while (arrIncludesArr(alreadyHit, [row, column - i]) && arrIncludesArr(hits, [row, column - i]) && (column - addToColumn >= 0)) {
                addToColumn -= 1
                i++
            }
        }
        else {
            if (call < 2) {
                row = changeRow(row, column, call).row
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        }
        
    } else if (arrIncludesArr(alreadyHit, [row, column - 1]) === false && arrIncludesArr(hits, [row, column - 1]) === false) {
        if (column > 0) {
            addToColumn -= 1
        } else {
            if (call < 2) {
                row = changeRow(row, column, call).row
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        } 
    } 
    else if (arrIncludesArr(alreadyHit, [row, column + 1]) === false && arrIncludesArr(hits, [row, column + 1]) === false) {
        if (column < 9) {
            addToColumn += 1
        } else {
            if (call < 2) {
                row = changeRow(row, column, call).row
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        }
    } else if (arrIncludesArr(alreadyHit, [row, column - 1]) && arrIncludesArr(hits, [row, column - 1]) === false) {
        if (column < 9) {
            i = 0
            while (arrIncludesArr(alreadyHit, [row, column + i]) && arrIncludesArr(hits, [row, column + i]) && (column + addToColumn) <= 9) {
                addToColumn += 1
                i++
            } 
        }
        else {
            if (call < 2) {
                row = changeRow(row, column, call).row
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        }
        
    } 
    
    column += addToColumn
    if (arrIncludesArr(alreadyHit, [row, column])) {
        hits = []
        column = Math.floor(Math.random() * 10)
        row = Math.floor(Math.random() * 10)
    }
    console.log("from changeColumn: " + row + ", column : " + column)
    return { row, column }
}

function changeRow (row, column, call) {
    call++
    let i = 0
    let addToRow = 0
    if (arrIncludesArr(alreadyHit, [row + 1, column]) && arrIncludesArr(hits, [row + 1, column]) === false) {
        if (row > 0) {
            while (arrIncludesArr(alreadyHit, [row - i, column]) && arrIncludesArr(hits, [row - i, column]) && (row + addToRow) >= 0) {
                addToRow -= 1
                i++
            }
        }
        else {
            if (call < 2) {
                column = changeColumn(row, column, call).column
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        }
        
    } else if (arrIncludesArr(alreadyHit, [row - 1, column]) === false && arrIncludesArr(hits, [row - 1, column]) === false) {
        if (row > 0) {
            addToRow -= 1
        } else {
            if (call < 2) {
                column = changeColumn(row, column, call).column
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        } 
    }
    else if (arrIncludesArr(alreadyHit, [row + 1, column]) === false && arrIncludesArr(hits, [row + 1, column]) === false) {
        if (row < 9) {
            addToRow += 1
        } else {
            if (call < 2) {
                column = changeColumn(row, column, call).column
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        }
    } else if (arrIncludesArr(alreadyHit, [row - 1, column]) && arrIncludesArr(hits, [row - 1, column]) === false) {
        if (row < 9) {
            i = 0
            while (arrIncludesArr(alreadyHit, [row + i, column]) && arrIncludesArr(hits, [row + i, column]) && (row + addToRow) <= 9) {
                addToRow += 1
                i++
            } 
        }
        else {
            if (call < 2) {
                column = changeColumn(row, column, call).column
            } else {
                column = Math.floor(Math.random() * 10)
                row = Math.floor(Math.random() * 10)
            } 
        }
        
    } 
    
    row += addToRow
    if (arrIncludesArr(alreadyHit, [row, column])) {
        hits = []
        row = Math.floor(Math.random() * 10)
        column = Math.floor(Math.random() * 10)
    }
    console.log("from changeRow: " + row + ", column : " + column)
    return { row, column }
}

async function computerAttack (computerAI, player, row, column, delay) {
    let message2 
    if (delay) {
        setTimeout(() => {
            message2 = computerAI.randomAttack(player, row, column)  
        }, 1000);
        await sleep(1000)
    } else {
        message2 = computerAI.randomAttack(player, row, column)
    }
    return message2
}

function arrIncludesArr (bigArr, arrCheck) {
    return bigArr.some(arr => {
        return (arr[0] === arrCheck[0] && arr[1] === arrCheck[1])
    })
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setupUI () {
    const boardComputer = document.querySelector(".computer")
    boardComputer.style.display = "block"
    document.querySelector(".ship-placement").style.display = "none"
    document.querySelector("h2").textContent = "Ready to fire Captain!"
}

function showDialog (winner) {
    const dialog = document.querySelector("dialog")
    const dialogText = dialog.querySelector("h2")
    if (winner === "player") dialogText.textContent = "You Won"
    if (winner === "computer") dialogText.textContent = "You Lost"
    dialog.showModal()
    const btn = dialog.querySelector("button")
    btn.addEventListener("click", () => {
        dialog.close()
        cleanUpForNewGame()
        createGame()
    })
}

function cleanUpForNewGame() {
    document.querySelector(".ship-placement").style.display = "flex"
    document.querySelector(".ship-placement").innerHTML = `<button id="change-rotation">Change Rotation</button>
                                                            <h4>Carrier</h4>
                                                            <h4>Battleship</h4>
                                                            <h4>Destroyer</h4>
                                                            <h4>Submarine</h4>
                                                            <h4>Cruiser</h4>`
    document.querySelector(".player-board").innerHTML = ""
    document.querySelector(".computer-board").innerHTML = ""
    document.querySelector(".main-container").querySelector("h2").textContent = "Place your ships to begin!"
    hits = []
    alreadyHit = []
}

/***/ }),

/***/ "./src/script/gameboard.js":
/*!*********************************!*\
  !*** ./src/script/gameboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/script/ship.js");


class Gameboard {
    constructor() {
        this.missedHits = []
        this.board = []
        this.numberShipSunk = 0
        this.createBoard()
    }

    createBoard () {
        for (let i = 0; i < 10; i++) {
            this.board.push([])
            for (let j = 0; j < 10; j++) {
                this.board[i].push([true])
            }
        }
    }

    placeShipRandom (ships) {
        ships.forEach(ship => {
            let row = Math.floor(Math.random() * 10)
            let column = Math.floor(Math.random() * 10)
            let axis = Math.floor(Math.random() * 2)
            if (axis === 0) axis = "x" 
            else if (axis === 1) axis = "y"
            let successful = false
            while (successful === false) {
                if (this.placeShip(ship, row, column, axis) === false) {
                    row = Math.floor(Math.random() * 10)
                    column = Math.floor(Math.random() * 10)
                } else {
                    successful = true
                }
            }
        }); 
    }

    placeShip (shipObj, row, column, axis) {
        row = Number(row)
        column = Number(column)
        const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](shipObj.length)
        if (!this.isPlacementPossible(ship, row, column, axis)) return false
        for (let i = 0; i < ship.length; i++) {
            if (axis === "x") {
                this.board[row][column + i] = ship
            } else if (axis === "y") {
                this.board[row + i][column] = ship
            }
        } 
    }

    isPlacementPossible(ship, row, column, axis) {
        if (axis === "x") {
            if (column + ship.length > 10) return false
            for (let i = 0; i < ship.length; i++) {
                if (this.board[row][column + i] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                    return false
                }
            }
        } else if (axis === "y") {
            if (row + ship.length > 10) return false
            for (let i = 0; i < ship.length; i++) {
                if (this.board[row + i][column] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                    return false
                }
            }
        }
        return true
    }

    receiveAttack (row, column) {
        let message
        if (this.board[row][column]) {
            if (this.board[row][column] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                this.board[row][column].hit()
                if (this.board[row][column].isSunk()) this.numberShipSunk++
                message = "hit"
                if (this.numberShipSunk === 5) message = "Game Over"
            } else {
                this.missedHits.push([row, column])
                message = "miss"
            }
            this.board[row][column] = false
        } else {
            message = "already hit"
        }
        return message
    }
}


/***/ }),

/***/ "./src/script/player.js":
/*!******************************!*\
  !*** ./src/script/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/script/gameboard.js");
/* harmony import */ var _boardUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardUI */ "./src/script/boardUI.js");



class Player {
    constructor () {
        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]()
    }

    sendAttack (row, column, defender) {
        const message = defender.gameboard.receiveAttack(row, column)
        if (message === "already hit") return "already hit"
        ;(0,_boardUI__WEBPACK_IMPORTED_MODULE_1__.updateBoardUI)(message, row, column, defender)
        if (message === "hit") return "hit"
        if (message === "Game Over") return "Game Over"
    }
}

/***/ }),

/***/ "./src/script/ship.js":
/*!****************************!*\
  !*** ./src/script/ship.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length) {
        this.length = length 
        this.timesHit = 0
    }

    hit () {
        this.timesHit++
    }

    isSunk () {
        return this.timesHit === this.length
    }
}


    


/***/ }),

/***/ "./src/script/shipUI.js":
/*!******************************!*\
  !*** ./src/script/shipUI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadShipUI)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/script/game.js");


const ships = [{name: "carrier", length: 5},
            {name: "battleship", length: 4},
            {name: "destroyer", length: 3},
            {name: "submarine", length: 3},
            {name: "cruiser", length: 2}]


const BORDER_STYLE = "2px solid #9e7ff0"

function loadShipUI (player, computerAI) {
    computerAI.placeShipRandomly(ships)
    const board = player.gameboard
    const changeRotation = document.querySelector("#change-rotation")

    const boardCells = document.querySelector(".player-board").querySelectorAll(".board-cell")

    let rotation = "x"
    changeRotation.addEventListener("click", () => {rotation === "x" ? rotation = "y" : rotation = "x"})

    let clicks = 0
    boardCells.forEach(cell => {
        cell.addEventListener("mouseover", (e) => {
            cell.style.cursor = "not-allowed"
            if (clicks === 5) {
                (0,_game__WEBPACK_IMPORTED_MODULE_0__.playGame) (player, computerAI)
                clicks++
            } else if (clicks < 5) {
                hoverUI(cell, ships[clicks], rotation, e)
            }
        })
        cell.addEventListener("mouseout", (e) => {
            if (clicks === 5) {
                (0,_game__WEBPACK_IMPORTED_MODULE_0__.playGame) (player, computerAI)
                clicks++
            } else if (clicks < 5) {
                hoverUI(cell, ships[clicks], rotation, e)
            }
        })
        cell.addEventListener("click", () => {
            if (clicks === 5) {
                (0,_game__WEBPACK_IMPORTED_MODULE_0__.playGame) (player, computerAI)
            } else if (clicks < 5) {
                if (addShip(cell, board, ships[clicks], rotation) === false) return  
            }
            clicks++
        })
    })
}

function hoverUI (cell, ship, rotation, event) {
    cell.style.cursor = "pointer"
    for (let i = 0; i < ship.length; i++) {
        
        let newCell;
        if (rotation === "x") {
            if (Number(cell.id[1]) + ship.length > 10) {
                cell.style.cursor = "not-allowed"
            }
            if (Number(cell.id) + i < 10) {
                newCell = document.getElementById(`0${Number(cell.id) + i}`)
            } else if (Number(cell.id) + i > 99) {
                return
            } else {
                newCell = document.getElementById(`${Number(cell.id) + i}`)
            }
            if (newCell.id[0] !== cell.id[0]) return
        } else if (rotation === "y") {
            if (Number(cell.id[0]) + ship.length > 10) {
                cell.style.cursor = "not-allowed"
            }
            if (cell.id[0] === "0" && i === 0) {
                newCell = document.getElementById(cell.id)
            } else if (Number(cell.id) + i * 10 > 99) {
                return
            } else {
                newCell = document.getElementById(`${Number(cell.id) + i * 10}`)
            }
        }
        
        if (newCell.style.backgroundColor == "black") {
            cell.style.cursor = "not-allowed"
            document.querySelectorAll(".green-hover").forEach(cell => cell.style.backgroundColor = "red")
        } else {
            if (event.type == 'mouseout') {
                newCell.style.backgroundColor = "#004080";
                newCell.classList.remove("green-hover")
            }
            if (event.type == 'mouseover') {
                if (cell.style.cursor === "not-allowed") {
                    newCell.style.backgroundColor = "red";
                } else {
                    newCell.style.backgroundColor = "#04e004";
                    newCell.classList.add("green-hover")
                }
                
                
                
            }
        }  
    } 
} 

function addShip(cell, board, ship, rotation) {
    if (board.placeShip(ship, `${cell.id[0]}`, `${cell.id[1]}`, rotation) === false) return false
    for (let i = 0; i < ship.length; i++) {
        let newCell;
        if (rotation === "x") {
            if (Number(cell.id) + i < 10) {
                newCell = document.getElementById(`0${Number(cell.id) + i}`)
            } else {
                newCell = document.getElementById(`${Number(cell.id) + i}`)
            }
            if (newCell.id[0] !== cell.id[0]) return
        } else if (rotation === "y") {
            if (cell.id[0] === "0" && i === 0) {
                newCell = document.getElementById(cell.id)
            } else {
                newCell = document.getElementById(`${Number(cell.id) + i * 10}`)
            }
        }
        newCell.classList.remove("green-hover")
        newCell.style.backgroundColor = "black";
        styleBorders (i, newCell, rotation, ship)
        const shipNames = document.querySelector(".ship-placement").querySelectorAll("h4")
        shipNames.forEach(shipName => {
            if (shipName.textContent.toLowerCase() === ship.name) {
                shipName.innerHTML = `<del>${shipName.textContent}</del>`
                shipName.style.opacity = "0.5"
            }
        })
    }  
}

function styleBorders (i, newCell, rotation, ship) {
    if (rotation === "y") {
        if (i === 0) {
            newCell.style.borderTop = BORDER_STYLE
        }
        else if (i === ship.length - 1) {
            newCell.style.borderBottom = BORDER_STYLE
        }
        newCell.style.borderRight = BORDER_STYLE
        newCell.style.borderLeft = BORDER_STYLE
    } else if (rotation === "x") {
        if (i === 0) {
            newCell.style.borderLeft = BORDER_STYLE
        }
        else if (i === ship.length - 1) {
            newCell.style.borderRight = BORDER_STYLE
        }
        newCell.style.borderTop = BORDER_STYLE
        newCell.style.borderBottom = BORDER_STYLE
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _script_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/game */ "./src/script/game.js");



(0,_script_game__WEBPACK_IMPORTED_MODULE_1__["default"])()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGFBQWE7QUFDYjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hVeUI7O0FBRVY7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNZOztBQUV0Qyx3REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHQvYm9hcmRVSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdC9jb21wdXRlckFJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0L3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0L3NoaXBVSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IFwiQmxhY2sgT3BzIE9uZVwiLCBzeXN0ZW0tdWk7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWEzMztcbiAgICBwYWRkaW5nOiAyNHB4IDAgMCAwO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiA0NnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxNnB4O1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbmgzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgY29sb3I6ICMwMDFhMzM7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNoaXAtcGxhY2VtZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLmdhbWVib2FyZHMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA5NnB4O1xufVxuXG4uYm9hcmQtY2VsbCB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDQwODA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMWEzMztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XG4gICAgY29sb3I6ICMwMDFhMzM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDU2cHggMTUycHg7XG4gICAgb3BhY2l0eTogMC45ODtcbn1cblxuZGlhbG9nIGgyIHtcbiAgICBjb2xvcjogIzAwMWEzMztcbiAgICBmb250LXNpemU6IDU4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xufVxuXG5kaWFsb2cgYnV0dG9uIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgZm9udC1zaXplOiAzNHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJCbGFjayBPcHMgT25lXFxcIiwgc3lzdGVtLXVpO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMycHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDFhMzM7XFxuICAgIHBhZGRpbmc6IDI0cHggMCAwIDA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA0NnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMTZweDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgY29sb3I6ICMwMDFhMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDk2cHg7XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDA4MDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMWEzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICAgIGNvbG9yOiAjMDAxYTMzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDU2cHggMTUycHg7XFxuICAgIG9wYWNpdHk6IDAuOTg7XFxufVxcblxcbmRpYWxvZyBoMiB7XFxuICAgIGNvbG9yOiAjMDAxYTMzO1xcbiAgICBmb250LXNpemU6IDU4cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxufVxcblxcbmRpYWxvZyBidXR0b24ge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsb2FkU2hpcFVJIGZyb20gXCIuL3NoaXBVSVwiXG5pbXBvcnQgQ29tcHV0ZXJBSSBmcm9tIFwiLi9jb21wdXRlckFJXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEJvYXJkVUkgKHBsYXllciwgY29tcHV0ZXJBSSkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYm9hcmRcIilcbiAgICBjcmVhdGVHcmlkKHBsYXllci5nYW1lYm9hcmQuYm9hcmQsIHBsYXllckJvYXJkKVxuXG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIilcbiAgICBjcmVhdGVHcmlkKGNvbXB1dGVyQUkuZ2FtZWJvYXJkLmJvYXJkLCBjb21wdXRlckJvYXJkKVxuXG4gICAgbG9hZFNoaXBVSShwbGF5ZXIsIGNvbXB1dGVyQUkpXG5cbiAgICByZXR1cm4gcGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmRcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JpZCAoYm9hcmQsIGRpdikge1xuICAgIGxldCByb3dJRCA9IDBcbiAgICBib2FyZC5mb3JFYWNoKChhcnIpID0+IHsgXG4gICAgICAgIGxldCBjb2x1bW5JRCA9IDBcbiAgICAgICAgYXJyLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImJvYXJkLWNlbGxcIikgIFxuICAgICAgICAgICAgY2VsbC5pZCA9IGAke3Jvd0lEfSR7Y29sdW1uSUR9YFxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNlbGwpXG4gICAgICAgICAgICBjb2x1bW5JRCsrXG4gICAgICAgIH0pXG4gICAgICAgIHJvd0lEKytcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJvYXJkVUkgKG1lc3NhZ2UsIHJvdywgY29sdW1uLCBkZWZlbmRlcikge1xuICAgIGxldCBlbGVtZW50XG4gICAgaWYgKGRlZmVuZGVyIGluc3RhbmNlb2YgQ29tcHV0ZXJBSSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpXG4gICAgICAgIGVsZW1lbnQgPSBwYXJlbnQuY2hpbGRyZW5bYCR7cm93fSR7Y29sdW1ufWBdXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYm9hcmRcIilcbiAgICAgICAgZWxlbWVudCA9IHBhcmVudC5jaGlsZHJlbltgJHtyb3d9JHtjb2x1bW59YF1cbiAgICB9ICAgIFxuICAgIGlmIChtZXNzYWdlID09PSBcImhpdFwiKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZDYwMDAwXCJcbiAgICB9XG4gICAgZWxzZSBpZiAobWVzc2FnZSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNEM0QzRDNcIlxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgdXBkYXRlQm9hcmRVSSB9IGZyb20gXCIuL2JvYXJkVUlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXJBSXtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpXG4gICAgfVxuXG4gICAgcGxhY2VTaGlwUmFuZG9tbHkoc2hpcHMpIHtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwUmFuZG9tKHNoaXBzKVxuICAgIH1cblxuICAgIHJhbmRvbUF0dGFjayAocGxheWVyLCByb3csIGNvbHVtbikge1xuICAgICAgICBsZXQgbWVzc2FnZVxuICAgICAgICBtZXNzYWdlID0gcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKVxuICAgICAgICB1cGRhdGVCb2FyZFVJKG1lc3NhZ2UsIHJvdywgY29sdW1uLCBwbGF5ZXIpXG4gICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgfVxuXG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBDb21wdXRlckFJIGZyb20gXCIuL2NvbXB1dGVyQUlcIjtcbmltcG9ydCBsb2FkQm9hcmRVSSBmcm9tIFwiLi9ib2FyZFVJXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUdhbWUgKCkge1xuICAgIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyXCIpXG4gICAgYm9hcmRDb21wdXRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKClcbiAgICBjb25zdCBjb21wdXRlckFJID0gbmV3IENvbXB1dGVyQUkoKVxuICAgIGxvYWRCb2FyZFVJKHBsYXllciwgY29tcHV0ZXJBSSkgICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5R2FtZSAocGxheWVyLCBjb21wdXRlckFJKSB7XG4gICAgc2V0dXBVSSAoKVxuICAgIGNyZWF0ZUNsaWNrRXZlbnQgKHBsYXllciwgY29tcHV0ZXJBSSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2xpY2tFdmVudCAocGxheWVyLCBjb21wdXRlckFJKSB7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIilcbiAgICBjb21wdXRlckJvYXJkLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiXG4gICAgY29tcHV0ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiXG4gICAgICAgIGdhbWVSb3VuZChldmVudCwgcGxheWVyLCBjb21wdXRlckFJKVxuICAgIH0sIHtvbmNlIDogdHJ1ZX0pXG59XG5cblxubGV0IGhpdHMgPSBbXVxubGV0IGFscmVhZHlIaXQgPSBbXVxuXG5hc3luYyBmdW5jdGlvbiBnYW1lUm91bmQgKGV2ZW50LCBwbGF5ZXIsIGNvbXB1dGVyQUkpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gcGxheWVyLnNlbmRBdHRhY2soZXZlbnQudGFyZ2V0LmlkWzBdLCBldmVudC50YXJnZXQuaWRbMV0sIGNvbXB1dGVyQUkpXG4gICAgaWYgKG1lc3NhZ2UgPT09IFwiR2FtZSBPdmVyXCIpIHtcbiAgICAgICAgc2hvd0RpYWxvZyAoXCJwbGF5ZXJcIilcbiAgICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSBcImFscmVhZHkgaGl0XCIgfHwgbWVzc2FnZSA9PT0gXCJoaXRcIikge1xuICAgICAgICBjcmVhdGVDbGlja0V2ZW50KHBsYXllciwgY29tcHV0ZXJBSSlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHJvd1xuICAgIGxldCBjb2x1bW5cbiAgICBsZXQgY2VsbFxuICAgIGxldCBkZWxheSA9IHRydWVcbiAgICBsZXQgcGxheSA9IHRydWVcbiAgICB3aGlsZSAocGxheSA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgbWVzc2FnZTJcbiAgICAgICAgaWYgKGhpdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcm93ID0gaGl0c1toaXRzLmxlbmd0aCAtIDFdWzBdXG4gICAgICAgICAgICBjb2x1bW4gPSBoaXRzW2hpdHMubGVuZ3RoIC0gMV1bMV1cblxuICAgICAgICAgICAgbGV0IGNhbGwgPSAwXG4gICAgICAgICAgICBpZiAoaGl0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PT0gaGl0c1toaXRzLmxlbmd0aCAtIDJdWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBjaGFuZ2VDb2x1bW4ocm93LCBjb2x1bW4sIGNhbGwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbHVtbiA9PT0gaGl0c1toaXRzLmxlbmd0aCAtIDJdWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBjaGFuZ2VSb3cocm93LCBjb2x1bW4sIGNhbGwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNlbGwpXG4gICAgICAgICAgICAgICAgcm93ID0gY2VsbC5yb3dcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSBjZWxsLmNvbHVtblxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93ICsgMSwgY29sdW1uXSkgfHwgKChyb3cgKyAxKSA+IDkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93IC0gMSwgY29sdW1uXSkgfHwgKChyb3cgLSAxKSA8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJySW5jbHVkZXNBcnIoYWxyZWFkeUhpdCwgW3JvdywgY29sdW1uICsgMV0pIHx8ICgoY29sdW1uICsgMSkgPiA5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93LCBjb2x1bW4gLSAxXSkgfHwgKChjb2x1bW4gLSAxKSA8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4gLT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uICs9IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyAtPSAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3cgKz0gMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICB9XG4gICAgICAgIG1lc3NhZ2UyID0gYXdhaXQgY29tcHV0ZXJBdHRhY2sgKGNvbXB1dGVyQUksIHBsYXllciwgcm93LCBjb2x1bW4sIGRlbGF5KVxuICAgICAgICBpZiAobWVzc2FnZTIgPT09IFwiR2FtZSBPdmVyXCIpIHtcbiAgICAgICAgICAgIHBsYXkgPSBmYWxzZVxuICAgICAgICAgICAgc2hvd0RpYWxvZyAoXCJjb21wdXRlclwiKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gIFxuICAgICAgICBpZiAobWVzc2FnZTIgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgIGhpdHMucHVzaChbcm93LCBjb2x1bW5dKVxuICAgICAgICAgICAgYWxyZWFkeUhpdC5wdXNoKFtyb3csIGNvbHVtbl0pXG4gXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lc3NhZ2UyID09PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgYWxyZWFkeUhpdC5wdXNoKFtyb3csIGNvbHVtbl0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lc3NhZ2UyID09PSBcImFscmVhZHkgaGl0XCIpIHtcbiAgICAgICAgICAgIGRlbGF5ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVzc2FnZTIgPT09IFwiaGl0XCIgfHwgbWVzc2FnZTIgPT09IFwiYWxyZWFkeSBoaXRcIikge1xuICAgICAgICAgICAgcGxheSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXkgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBjcmVhdGVDbGlja0V2ZW50KHBsYXllciwgY29tcHV0ZXJBSSkgICAgICAgICAgICAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbHVtbiAocm93LCBjb2x1bW4sIGNhbGwpIHtcbiAgICBjYWxsKytcbiAgICBsZXQgaSA9IDBcbiAgICBsZXQgYWRkVG9Db2x1bW4gPSAwXG4gICAgaWYgKGFyckluY2x1ZGVzQXJyKGFscmVhZHlIaXQsIFtyb3csIGNvbHVtbiArIDFdKSAmJiBhcnJJbmNsdWRlc0FycihoaXRzLCBbcm93LCBjb2x1bW4gKyAxXSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChjb2x1bW4gPiAwKSB7XG4gICAgICAgICAgICB3aGlsZSAoYXJySW5jbHVkZXNBcnIoYWxyZWFkeUhpdCwgW3JvdywgY29sdW1uIC0gaV0pICYmIGFyckluY2x1ZGVzQXJyKGhpdHMsIFtyb3csIGNvbHVtbiAtIGldKSAmJiAoY29sdW1uIC0gYWRkVG9Db2x1bW4gPj0gMCkpIHtcbiAgICAgICAgICAgICAgICBhZGRUb0NvbHVtbiAtPSAxXG4gICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2FsbCA8IDIpIHtcbiAgICAgICAgICAgICAgICByb3cgPSBjaGFuZ2VSb3cocm93LCBjb2x1bW4sIGNhbGwpLnJvd1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSBlbHNlIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93LCBjb2x1bW4gLSAxXSkgPT09IGZhbHNlICYmIGFyckluY2x1ZGVzQXJyKGhpdHMsIFtyb3csIGNvbHVtbiAtIDFdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGNvbHVtbiA+IDApIHtcbiAgICAgICAgICAgIGFkZFRvQ29sdW1uIC09IDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjYWxsIDwgMikge1xuICAgICAgICAgICAgICAgIHJvdyA9IGNoYW5nZVJvdyhyb3csIGNvbHVtbiwgY2FsbCkucm93XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSBcbiAgICB9IFxuICAgIGVsc2UgaWYgKGFyckluY2x1ZGVzQXJyKGFscmVhZHlIaXQsIFtyb3csIGNvbHVtbiArIDFdKSA9PT0gZmFsc2UgJiYgYXJySW5jbHVkZXNBcnIoaGl0cywgW3JvdywgY29sdW1uICsgMV0pID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoY29sdW1uIDwgOSkge1xuICAgICAgICAgICAgYWRkVG9Db2x1bW4gKz0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNhbGwgPCAyKSB7XG4gICAgICAgICAgICAgICAgcm93ID0gY2hhbmdlUm93KHJvdywgY29sdW1uLCBjYWxsKS5yb3dcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93LCBjb2x1bW4gLSAxXSkgJiYgYXJySW5jbHVkZXNBcnIoaGl0cywgW3JvdywgY29sdW1uIC0gMV0pID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoY29sdW1uIDwgOSkge1xuICAgICAgICAgICAgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93LCBjb2x1bW4gKyBpXSkgJiYgYXJySW5jbHVkZXNBcnIoaGl0cywgW3JvdywgY29sdW1uICsgaV0pICYmIChjb2x1bW4gKyBhZGRUb0NvbHVtbikgPD0gOSkge1xuICAgICAgICAgICAgICAgIGFkZFRvQ29sdW1uICs9IDFcbiAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2FsbCA8IDIpIHtcbiAgICAgICAgICAgICAgICByb3cgPSBjaGFuZ2VSb3cocm93LCBjb2x1bW4sIGNhbGwpLnJvd1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSBcbiAgICBcbiAgICBjb2x1bW4gKz0gYWRkVG9Db2x1bW5cbiAgICBpZiAoYXJySW5jbHVkZXNBcnIoYWxyZWFkeUhpdCwgW3JvdywgY29sdW1uXSkpIHtcbiAgICAgICAgaGl0cyA9IFtdXG4gICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJmcm9tIGNoYW5nZUNvbHVtbjogXCIgKyByb3cgKyBcIiwgY29sdW1uIDogXCIgKyBjb2x1bW4pXG4gICAgcmV0dXJuIHsgcm93LCBjb2x1bW4gfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUm93IChyb3csIGNvbHVtbiwgY2FsbCkge1xuICAgIGNhbGwrK1xuICAgIGxldCBpID0gMFxuICAgIGxldCBhZGRUb1JvdyA9IDBcbiAgICBpZiAoYXJySW5jbHVkZXNBcnIoYWxyZWFkeUhpdCwgW3JvdyArIDEsIGNvbHVtbl0pICYmIGFyckluY2x1ZGVzQXJyKGhpdHMsIFtyb3cgKyAxLCBjb2x1bW5dKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHJvdyA+IDApIHtcbiAgICAgICAgICAgIHdoaWxlIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93IC0gaSwgY29sdW1uXSkgJiYgYXJySW5jbHVkZXNBcnIoaGl0cywgW3JvdyAtIGksIGNvbHVtbl0pICYmIChyb3cgKyBhZGRUb1JvdykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGFkZFRvUm93IC09IDFcbiAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjYWxsIDwgMikge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IGNoYW5nZUNvbHVtbihyb3csIGNvbHVtbiwgY2FsbCkuY29sdW1uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9IGVsc2UgaWYgKGFyckluY2x1ZGVzQXJyKGFscmVhZHlIaXQsIFtyb3cgLSAxLCBjb2x1bW5dKSA9PT0gZmFsc2UgJiYgYXJySW5jbHVkZXNBcnIoaGl0cywgW3JvdyAtIDEsIGNvbHVtbl0pID09PSBmYWxzZSkge1xuICAgICAgICBpZiAocm93ID4gMCkge1xuICAgICAgICAgICAgYWRkVG9Sb3cgLT0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNhbGwgPCAyKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gY2hhbmdlQ29sdW1uKHJvdywgY29sdW1uLCBjYWxsKS5jb2x1bW5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICB9IFxuICAgICAgICB9IFxuICAgIH1cbiAgICBlbHNlIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93ICsgMSwgY29sdW1uXSkgPT09IGZhbHNlICYmIGFyckluY2x1ZGVzQXJyKGhpdHMsIFtyb3cgKyAxLCBjb2x1bW5dKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHJvdyA8IDkpIHtcbiAgICAgICAgICAgIGFkZFRvUm93ICs9IDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjYWxsIDwgMikge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IGNoYW5nZUNvbHVtbihyb3csIGNvbHVtbiwgY2FsbCkuY29sdW1uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJySW5jbHVkZXNBcnIoYWxyZWFkeUhpdCwgW3JvdyAtIDEsIGNvbHVtbl0pICYmIGFyckluY2x1ZGVzQXJyKGhpdHMsIFtyb3cgLSAxLCBjb2x1bW5dKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHJvdyA8IDkpIHtcbiAgICAgICAgICAgIGkgPSAwXG4gICAgICAgICAgICB3aGlsZSAoYXJySW5jbHVkZXNBcnIoYWxyZWFkeUhpdCwgW3JvdyArIGksIGNvbHVtbl0pICYmIGFyckluY2x1ZGVzQXJyKGhpdHMsIFtyb3cgKyBpLCBjb2x1bW5dKSAmJiAocm93ICsgYWRkVG9Sb3cpIDw9IDkpIHtcbiAgICAgICAgICAgICAgICBhZGRUb1JvdyArPSAxXG4gICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNhbGwgPCAyKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gY2hhbmdlQ29sdW1uKHJvdywgY29sdW1uLCBjYWxsKS5jb2x1bW5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0gXG4gICAgXG4gICAgcm93ICs9IGFkZFRvUm93XG4gICAgaWYgKGFyckluY2x1ZGVzQXJyKGFscmVhZHlIaXQsIFtyb3csIGNvbHVtbl0pKSB7XG4gICAgICAgIGhpdHMgPSBbXVxuICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiZnJvbSBjaGFuZ2VSb3c6IFwiICsgcm93ICsgXCIsIGNvbHVtbiA6IFwiICsgY29sdW1uKVxuICAgIHJldHVybiB7IHJvdywgY29sdW1uIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2sgKGNvbXB1dGVyQUksIHBsYXllciwgcm93LCBjb2x1bW4sIGRlbGF5KSB7XG4gICAgbGV0IG1lc3NhZ2UyIFxuICAgIGlmIChkZWxheSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1lc3NhZ2UyID0gY29tcHV0ZXJBSS5yYW5kb21BdHRhY2socGxheWVyLCByb3csIGNvbHVtbikgIFxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgYXdhaXQgc2xlZXAoMTAwMClcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlMiA9IGNvbXB1dGVyQUkucmFuZG9tQXR0YWNrKHBsYXllciwgcm93LCBjb2x1bW4pXG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlMlxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJySW5jbHVkZXNBcnIgKGJpZ0FyciwgYXJyQ2hlY2spIHtcbiAgICByZXR1cm4gYmlnQXJyLnNvbWUoYXJyID0+IHtcbiAgICAgICAgcmV0dXJuIChhcnJbMF0gPT09IGFyckNoZWNrWzBdICYmIGFyclsxXSA9PT0gYXJyQ2hlY2tbMV0pXG4gICAgfSlcbiAgICBcbn1cblxuZnVuY3Rpb24gc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmZ1bmN0aW9uIHNldHVwVUkgKCkge1xuICAgIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyXCIpXG4gICAgYm9hcmRDb21wdXRlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikudGV4dENvbnRlbnQgPSBcIlJlYWR5IHRvIGZpcmUgQ2FwdGFpbiFcIlxufVxuXG5mdW5jdGlvbiBzaG93RGlhbG9nICh3aW5uZXIpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpXG4gICAgY29uc3QgZGlhbG9nVGV4dCA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiaDJcIilcbiAgICBpZiAod2lubmVyID09PSBcInBsYXllclwiKSBkaWFsb2dUZXh0LnRleHRDb250ZW50ID0gXCJZb3UgV29uXCJcbiAgICBpZiAod2lubmVyID09PSBcImNvbXB1dGVyXCIpIGRpYWxvZ1RleHQudGV4dENvbnRlbnQgPSBcIllvdSBMb3N0XCJcbiAgICBkaWFsb2cuc2hvd01vZGFsKClcbiAgICBjb25zdCBidG4gPSBkaWFsb2cucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkaWFsb2cuY2xvc2UoKVxuICAgICAgICBjbGVhblVwRm9yTmV3R2FtZSgpXG4gICAgICAgIGNyZWF0ZUdhbWUoKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNsZWFuVXBGb3JOZXdHYW1lKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1wbGFjZW1lbnRcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudFwiKS5pbm5lckhUTUwgPSBgPGJ1dHRvbiBpZD1cImNoYW5nZS1yb3RhdGlvblwiPkNoYW5nZSBSb3RhdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNhcnJpZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkJhdHRsZXNoaXA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkRlc3Ryb3llcjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U3VibWFyaW5lPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5DcnVpc2VyPC9oND5gXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYm9hcmRcIikuaW5uZXJIVE1MID0gXCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIikuaW5uZXJIVE1MID0gXCJcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIikucXVlcnlTZWxlY3RvcihcImgyXCIpLnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIHNoaXBzIHRvIGJlZ2luIVwiXG4gICAgaGl0cyA9IFtdXG4gICAgYWxyZWFkeUhpdCA9IFtdXG59IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWlzc2VkSGl0cyA9IFtdXG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXVxuICAgICAgICB0aGlzLm51bWJlclNoaXBTdW5rID0gMFxuICAgICAgICB0aGlzLmNyZWF0ZUJvYXJkKClcbiAgICB9XG5cbiAgICBjcmVhdGVCb2FyZCAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5wdXNoKFtdKVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXS5wdXNoKFt0cnVlXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYWNlU2hpcFJhbmRvbSAoc2hpcHMpIHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIGxldCBheGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICAgICAgICAgIGlmIChheGlzID09PSAwKSBheGlzID0gXCJ4XCIgXG4gICAgICAgICAgICBlbHNlIGlmIChheGlzID09PSAxKSBheGlzID0gXCJ5XCJcbiAgICAgICAgICAgIGxldCBzdWNjZXNzZnVsID0gZmFsc2VcbiAgICAgICAgICAgIHdoaWxlIChzdWNjZXNzZnVsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlU2hpcChzaGlwLCByb3csIGNvbHVtbiwgYXhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzZnVsID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7IFxuICAgIH1cblxuICAgIHBsYWNlU2hpcCAoc2hpcE9iaiwgcm93LCBjb2x1bW4sIGF4aXMpIHtcbiAgICAgICAgcm93ID0gTnVtYmVyKHJvdylcbiAgICAgICAgY29sdW1uID0gTnVtYmVyKGNvbHVtbilcbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNoaXBPYmoubGVuZ3RoKVxuICAgICAgICBpZiAoIXRoaXMuaXNQbGFjZW1lbnRQb3NzaWJsZShzaGlwLCByb3csIGNvbHVtbiwgYXhpcykpIHJldHVybiBmYWxzZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW4gKyBpXSA9IHNoaXBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JvdyArIGldW2NvbHVtbl0gPSBzaGlwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgaXNQbGFjZW1lbnRQb3NzaWJsZShzaGlwLCByb3csIGNvbHVtbiwgYXhpcykge1xuICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4gKyBzaGlwLmxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sdW1uICsgaV0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgaWYgKHJvdyArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93ICsgaV1bY29sdW1uXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayAocm93LCBjb2x1bW4pIHtcbiAgICAgICAgbGV0IG1lc3NhZ2VcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0uaGl0KClcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0uaXNTdW5rKCkpIHRoaXMubnVtYmVyU2hpcFN1bmsrK1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcImhpdFwiXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubnVtYmVyU2hpcFN1bmsgPT09IDUpIG1lc3NhZ2UgPSBcIkdhbWUgT3ZlclwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2VkSGl0cy5wdXNoKFtyb3csIGNvbHVtbl0pXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwibWlzc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJhbHJlYWR5IGhpdFwiXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgdXBkYXRlQm9hcmRVSSB9IGZyb20gXCIuL2JvYXJkVUlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpXG4gICAgfVxuXG4gICAgc2VuZEF0dGFjayAocm93LCBjb2x1bW4sIGRlZmVuZGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkZWZlbmRlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbilcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IFwiYWxyZWFkeSBoaXRcIikgcmV0dXJuIFwiYWxyZWFkeSBoaXRcIlxuICAgICAgICB1cGRhdGVCb2FyZFVJKG1lc3NhZ2UsIHJvdywgY29sdW1uLCBkZWZlbmRlcilcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IFwiaGl0XCIpIHJldHVybiBcImhpdFwiXG4gICAgICAgIGlmIChtZXNzYWdlID09PSBcIkdhbWUgT3ZlclwiKSByZXR1cm4gXCJHYW1lIE92ZXJcIlxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGggXG4gICAgICAgIHRoaXMudGltZXNIaXQgPSAwXG4gICAgfVxuXG4gICAgaGl0ICgpIHtcbiAgICAgICAgdGhpcy50aW1lc0hpdCsrXG4gICAgfVxuXG4gICAgaXNTdW5rICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXNIaXQgPT09IHRoaXMubGVuZ3RoXG4gICAgfVxufVxuXG5cbiAgICBcbiIsImltcG9ydCB7IHBsYXlHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiXG5cbmNvbnN0IHNoaXBzID0gW3tuYW1lOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1fSxcbiAgICAgICAgICAgIHtuYW1lOiBcImJhdHRsZXNoaXBcIiwgbGVuZ3RoOiA0fSxcbiAgICAgICAgICAgIHtuYW1lOiBcImRlc3Ryb3llclwiLCBsZW5ndGg6IDN9LFxuICAgICAgICAgICAge25hbWU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogM30sXG4gICAgICAgICAgICB7bmFtZTogXCJjcnVpc2VyXCIsIGxlbmd0aDogMn1dXG5cblxuY29uc3QgQk9SREVSX1NUWUxFID0gXCIycHggc29saWQgIzllN2ZmMFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTaGlwVUkgKHBsYXllciwgY29tcHV0ZXJBSSkge1xuICAgIGNvbXB1dGVyQUkucGxhY2VTaGlwUmFuZG9tbHkoc2hpcHMpXG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkXG4gICAgY29uc3QgY2hhbmdlUm90YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoYW5nZS1yb3RhdGlvblwiKVxuXG4gICAgY29uc3QgYm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtY2VsbFwiKVxuXG4gICAgbGV0IHJvdGF0aW9uID0gXCJ4XCJcbiAgICBjaGFuZ2VSb3RhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge3JvdGF0aW9uID09PSBcInhcIiA/IHJvdGF0aW9uID0gXCJ5XCIgOiByb3RhdGlvbiA9IFwieFwifSlcblxuICAgIGxldCBjbGlja3MgPSAwXG4gICAgYm9hcmRDZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiXG4gICAgICAgICAgICBpZiAoY2xpY2tzID09PSA1KSB7XG4gICAgICAgICAgICAgICAgcGxheUdhbWUgKHBsYXllciwgY29tcHV0ZXJBSSlcbiAgICAgICAgICAgICAgICBjbGlja3MrK1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjbGlja3MgPCA1KSB7XG4gICAgICAgICAgICAgICAgaG92ZXJVSShjZWxsLCBzaGlwc1tjbGlja3NdLCByb3RhdGlvbiwgZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChjbGlja3MgPT09IDUpIHtcbiAgICAgICAgICAgICAgICBwbGF5R2FtZSAocGxheWVyLCBjb21wdXRlckFJKVxuICAgICAgICAgICAgICAgIGNsaWNrcysrXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsaWNrcyA8IDUpIHtcbiAgICAgICAgICAgICAgICBob3ZlclVJKGNlbGwsIHNoaXBzW2NsaWNrc10sIHJvdGF0aW9uLCBlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2xpY2tzID09PSA1KSB7XG4gICAgICAgICAgICAgICAgcGxheUdhbWUgKHBsYXllciwgY29tcHV0ZXJBSSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xpY2tzIDwgNSkge1xuICAgICAgICAgICAgICAgIGlmIChhZGRTaGlwKGNlbGwsIGJvYXJkLCBzaGlwc1tjbGlja3NdLCByb3RhdGlvbikgPT09IGZhbHNlKSByZXR1cm4gIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xpY2tzKytcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBob3ZlclVJIChjZWxsLCBzaGlwLCByb3RhdGlvbiwgZXZlbnQpIHtcbiAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV3Q2VsbDtcbiAgICAgICAgaWYgKHJvdGF0aW9uID09PSBcInhcIikge1xuICAgICAgICAgICAgaWYgKE51bWJlcihjZWxsLmlkWzFdKSArIHNoaXAubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE51bWJlcihjZWxsLmlkKSArIGkgPCAxMCkge1xuICAgICAgICAgICAgICAgIG5ld0NlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgMCR7TnVtYmVyKGNlbGwuaWQpICsgaX1gKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIoY2VsbC5pZCkgKyBpID4gOTkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke051bWJlcihjZWxsLmlkKSArIGl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdDZWxsLmlkWzBdICE9PSBjZWxsLmlkWzBdKSByZXR1cm5cbiAgICAgICAgfSBlbHNlIGlmIChyb3RhdGlvbiA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgIGlmIChOdW1iZXIoY2VsbC5pZFswXSkgKyBzaGlwLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjZWxsLmlkWzBdID09PSBcIjBcIiAmJiBpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNlbGwuaWQpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE51bWJlcihjZWxsLmlkKSArIGkgKiAxMCA+IDk5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0NlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtOdW1iZXIoY2VsbC5pZCkgKyBpICogMTB9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKG5ld0NlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID09IFwiYmxhY2tcIikge1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JlZW4taG92ZXJcIikuZm9yRWFjaChjZWxsID0+IGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZW91dCcpIHtcbiAgICAgICAgICAgICAgICBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwNDA4MFwiO1xuICAgICAgICAgICAgICAgIG5ld0NlbGwuY2xhc3NMaXN0LnJlbW92ZShcImdyZWVuLWhvdmVyXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2VvdmVyJykge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLnN0eWxlLmN1cnNvciA9PT0gXCJub3QtYWxsb3dlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzA0ZTAwNFwiO1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoXCJncmVlbi1ob3ZlclwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgXG4gICAgfSBcbn0gXG5cbmZ1bmN0aW9uIGFkZFNoaXAoY2VsbCwgYm9hcmQsIHNoaXAsIHJvdGF0aW9uKSB7XG4gICAgaWYgKGJvYXJkLnBsYWNlU2hpcChzaGlwLCBgJHtjZWxsLmlkWzBdfWAsIGAke2NlbGwuaWRbMV19YCwgcm90YXRpb24pID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXdDZWxsO1xuICAgICAgICBpZiAocm90YXRpb24gPT09IFwieFwiKSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKGNlbGwuaWQpICsgaSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAwJHtOdW1iZXIoY2VsbC5pZCkgKyBpfWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0NlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtOdW1iZXIoY2VsbC5pZCkgKyBpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3Q2VsbC5pZFswXSAhPT0gY2VsbC5pZFswXSkgcmV0dXJuXG4gICAgICAgIH0gZWxzZSBpZiAocm90YXRpb24gPT09IFwieVwiKSB7XG4gICAgICAgICAgICBpZiAoY2VsbC5pZFswXSA9PT0gXCIwXCIgJiYgaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5ld0NlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsLmlkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7TnVtYmVyKGNlbGwuaWQpICsgaSAqIDEwfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3Q2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JlZW4taG92ZXJcIilcbiAgICAgICAgbmV3Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIHN0eWxlQm9yZGVycyAoaSwgbmV3Q2VsbCwgcm90YXRpb24sIHNoaXApXG4gICAgICAgIGNvbnN0IHNoaXBOYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1wbGFjZW1lbnRcIikucXVlcnlTZWxlY3RvckFsbChcImg0XCIpXG4gICAgICAgIHNoaXBOYW1lcy5mb3JFYWNoKHNoaXBOYW1lID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwTmFtZS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpID09PSBzaGlwLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBzaGlwTmFtZS5pbm5lckhUTUwgPSBgPGRlbD4ke3NoaXBOYW1lLnRleHRDb250ZW50fTwvZGVsPmBcbiAgICAgICAgICAgICAgICBzaGlwTmFtZS5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gIFxufVxuXG5mdW5jdGlvbiBzdHlsZUJvcmRlcnMgKGksIG5ld0NlbGwsIHJvdGF0aW9uLCBzaGlwKSB7XG4gICAgaWYgKHJvdGF0aW9uID09PSBcInlcIikge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJUb3AgPSBCT1JERVJfU1RZTEVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpID09PSBzaGlwLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIG5ld0NlbGwuc3R5bGUuYm9yZGVyQm90dG9tID0gQk9SREVSX1NUWUxFXG4gICAgICAgIH1cbiAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IEJPUkRFUl9TVFlMRVxuICAgICAgICBuZXdDZWxsLnN0eWxlLmJvcmRlckxlZnQgPSBCT1JERVJfU1RZTEVcbiAgICB9IGVsc2UgaWYgKHJvdGF0aW9uID09PSBcInhcIikge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJMZWZ0ID0gQk9SREVSX1NUWUxFXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gc2hpcC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBuZXdDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gQk9SREVSX1NUWUxFXG4gICAgICAgIH1cbiAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJUb3AgPSBCT1JERVJfU1RZTEVcbiAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJCb3R0b20gPSBCT1JERVJfU1RZTEVcbiAgICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvc3R5bGUuY3NzXCJcbmltcG9ydCBjcmVhdGVHYW1lIGZyb20gXCIuL3NjcmlwdC9nYW1lXCJcblxuY3JlYXRlR2FtZSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=