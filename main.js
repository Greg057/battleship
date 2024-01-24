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
    let message
    try {
        message = player.sendAttack(event.target.id[0], event.target.id[1], computerAI)
    } catch {
        createClickEvent(player, computerAI)
        return
    }
    
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
        else if (message2 === "miss") {
            alreadyHit.push([row, column])
        }
        if (message2 === "already hit") {
            delay = false
        } else {
            delay = true
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
            while (arrIncludesArr(alreadyHit, [row, column - i]) && arrIncludesArr(hits, [row, column - i]) && (column - addToColumn > 0)) {
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
            while (arrIncludesArr(alreadyHit, [row, column + i]) && arrIncludesArr(hits, [row, column + i]) && (column + addToColumn) < 9) {
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
    if (arrIncludesArr(alreadyHit, [row, column]) || column < 0) {
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
            while (arrIncludesArr(alreadyHit, [row - i, column]) && arrIncludesArr(hits, [row - i, column]) && (row + addToRow) > 0) {
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
            while (arrIncludesArr(alreadyHit, [row + i, column]) && arrIncludesArr(hits, [row + i, column]) && (row + addToRow) < 9) {
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
    if (arrIncludesArr(alreadyHit, [row, column]) || row < 0) {
        hits = []
        column = Math.floor(Math.random() * 10)
        row = Math.floor(Math.random() * 10)
    }

    console.log("from changeRow: " + row + ", column : " + column)
    return { row, column }
}

async function computerAttack (computerAI, player, row, column, delay) {
    let message2 
    if (delay) {
        setTimeout(() => {
            message2 = computerAI.randomAttack(player, row, column)  
        }, 800);
        await sleep(800)
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
        ;(0,_boardUI__WEBPACK_IMPORTED_MODULE_1__.updateBoardUI)(message, row, column, defender)
        return message
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7VUMzSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDWTs7QUFFdEMsd0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0L2JvYXJkVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHQvY29tcHV0ZXJBSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdC9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0L2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHQvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdC9zaGlwVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJsYWNrIE9wcyBPbmVcIiwgc3lzdGVtLXVpO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMzJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDFhMzM7XG4gICAgcGFkZGluZzogMjRweCAwIDAgMDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMTZweDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGNvbG9yOiAjMDAxYTMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaGlwLXBsYWNlbWVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogOTZweDtcbn1cblxuLmJvYXJkLWNlbGwge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0MDgwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDFhMzM7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbmRpYWxvZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xuICAgIGNvbG9yOiAjMDAxYTMzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1NnB4IDE1MnB4O1xuICAgIG9wYWNpdHk6IDAuOTg7XG59XG5cbmRpYWxvZyBoMiB7XG4gICAgY29sb3I6ICMwMDFhMzM7XG4gICAgZm9udC1zaXplOiA1OHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn1cblxuZGlhbG9nIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmxhY2sgT3BzIE9uZVxcXCIsIHN5c3RlbS11aTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxYTMzO1xcbiAgICBwYWRkaW5nOiAyNHB4IDAgMCAwO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNDZweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGNvbG9yOiAjMDAxYTMzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcy1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA5NnB4O1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDQwODA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDFhMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbmRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgICBjb2xvcjogIzAwMWEzMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1NnB4IDE1MnB4O1xcbiAgICBvcGFjaXR5OiAwLjk4O1xcbn1cXG5cXG5kaWFsb2cgaDIge1xcbiAgICBjb2xvcjogIzAwMWEzMztcXG4gICAgZm9udC1zaXplOiA1OHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcbn1cXG5cXG5kaWFsb2cgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBmb250LXNpemU6IDM0cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbG9hZFNoaXBVSSBmcm9tIFwiLi9zaGlwVUlcIlxuaW1wb3J0IENvbXB1dGVyQUkgZnJvbSBcIi4vY29tcHV0ZXJBSVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRCb2FyZFVJIChwbGF5ZXIsIGNvbXB1dGVyQUkpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpXG4gICAgY3JlYXRlR3JpZChwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkLCBwbGF5ZXJCb2FyZClcblxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpXG4gICAgY3JlYXRlR3JpZChjb21wdXRlckFJLmdhbWVib2FyZC5ib2FyZCwgY29tcHV0ZXJCb2FyZClcblxuICAgIGxvYWRTaGlwVUkocGxheWVyLCBjb21wdXRlckFJKVxuXG4gICAgcmV0dXJuIHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWQgKGJvYXJkLCBkaXYpIHtcbiAgICBsZXQgcm93SUQgPSAwXG4gICAgYm9hcmQuZm9yRWFjaCgoYXJyKSA9PiB7IFxuICAgICAgICBsZXQgY29sdW1uSUQgPSAwXG4gICAgICAgIGFyci5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jZWxsXCIpICBcbiAgICAgICAgICAgIGNlbGwuaWQgPSBgJHtyb3dJRH0ke2NvbHVtbklEfWBcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChjZWxsKVxuICAgICAgICAgICAgY29sdW1uSUQrK1xuICAgICAgICB9KVxuICAgICAgICByb3dJRCsrXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCb2FyZFVJIChtZXNzYWdlLCByb3csIGNvbHVtbiwgZGVmZW5kZXIpIHtcbiAgICBsZXQgZWxlbWVudFxuICAgIGlmIChkZWZlbmRlciBpbnN0YW5jZW9mIENvbXB1dGVyQUkpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKVxuICAgICAgICBlbGVtZW50ID0gcGFyZW50LmNoaWxkcmVuW2Ake3Jvd30ke2NvbHVtbn1gXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpXG4gICAgICAgIGVsZW1lbnQgPSBwYXJlbnQuY2hpbGRyZW5bYCR7cm93fSR7Y29sdW1ufWBdXG4gICAgfSAgICBcbiAgICBpZiAobWVzc2FnZSA9PT0gXCJoaXRcIikge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2Q2MDAwMFwiXG4gICAgfVxuICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwibWlzc1wiKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjRDNEM0QzXCJcbiAgICB9XG59IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHVwZGF0ZUJvYXJkVUkgfSBmcm9tIFwiLi9ib2FyZFVJXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyQUl7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKVxuICAgIH1cblxuICAgIHBsYWNlU2hpcFJhbmRvbWx5KHNoaXBzKSB7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcFJhbmRvbShzaGlwcylcbiAgICB9XG5cbiAgICByYW5kb21BdHRhY2sgKHBsYXllciwgcm93LCBjb2x1bW4pIHtcbiAgICAgICAgbGV0IG1lc3NhZ2VcbiAgICAgICAgbWVzc2FnZSA9IHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbilcbiAgICAgICAgdXBkYXRlQm9hcmRVSShtZXNzYWdlLCByb3csIGNvbHVtbiwgcGxheWVyKVxuICAgICAgICByZXR1cm4gbWVzc2FnZVxuICAgIH1cblxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgQ29tcHV0ZXJBSSBmcm9tIFwiLi9jb21wdXRlckFJXCI7XG5pbXBvcnQgbG9hZEJvYXJkVUkgZnJvbSBcIi4vYm9hcmRVSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHYW1lICgpIHtcbiAgICBjb25zdCBib2FyZENvbXB1dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlclwiKVxuICAgIGJvYXJkQ29tcHV0ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpXG4gICAgY29uc3QgY29tcHV0ZXJBSSA9IG5ldyBDb21wdXRlckFJKClcbiAgICBsb2FkQm9hcmRVSShwbGF5ZXIsIGNvbXB1dGVyQUkpICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheUdhbWUgKHBsYXllciwgY29tcHV0ZXJBSSkge1xuICAgIHNldHVwVUkgKClcbiAgICBjcmVhdGVDbGlja0V2ZW50IChwbGF5ZXIsIGNvbXB1dGVyQUkpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsaWNrRXZlbnQgKHBsYXllciwgY29tcHV0ZXJBSSkge1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpXG4gICAgY29tcHV0ZXJCb2FyZC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIlxuICAgIGNvbXB1dGVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBjb21wdXRlckJvYXJkLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIlxuICAgICAgICBnYW1lUm91bmQoZXZlbnQsIHBsYXllciwgY29tcHV0ZXJBSSlcbiAgICB9LCB7b25jZSA6IHRydWV9KVxufVxuXG5cbmxldCBoaXRzID0gW11cbmxldCBhbHJlYWR5SGl0ID0gW11cblxuYXN5bmMgZnVuY3Rpb24gZ2FtZVJvdW5kIChldmVudCwgcGxheWVyLCBjb21wdXRlckFJKSB7XG4gICAgbGV0IG1lc3NhZ2VcbiAgICB0cnkge1xuICAgICAgICBtZXNzYWdlID0gcGxheWVyLnNlbmRBdHRhY2soZXZlbnQudGFyZ2V0LmlkWzBdLCBldmVudC50YXJnZXQuaWRbMV0sIGNvbXB1dGVyQUkpXG4gICAgfSBjYXRjaCB7XG4gICAgICAgIGNyZWF0ZUNsaWNrRXZlbnQocGxheWVyLCBjb21wdXRlckFJKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgaWYgKG1lc3NhZ2UgPT09IFwiR2FtZSBPdmVyXCIpIHtcbiAgICAgICAgc2hvd0RpYWxvZyAoXCJwbGF5ZXJcIilcbiAgICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSBcImFscmVhZHkgaGl0XCIgfHwgbWVzc2FnZSA9PT0gXCJoaXRcIikge1xuICAgICAgICBjcmVhdGVDbGlja0V2ZW50KHBsYXllciwgY29tcHV0ZXJBSSlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHJvd1xuICAgIGxldCBjb2x1bW5cbiAgICBsZXQgY2VsbFxuICAgIGxldCBkZWxheSA9IHRydWVcbiAgICBsZXQgcGxheSA9IHRydWVcbiAgICB3aGlsZSAocGxheSA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgbWVzc2FnZTJcbiAgICAgICAgaWYgKGhpdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcm93ID0gaGl0c1toaXRzLmxlbmd0aCAtIDFdWzBdXG4gICAgICAgICAgICBjb2x1bW4gPSBoaXRzW2hpdHMubGVuZ3RoIC0gMV1bMV1cblxuICAgICAgICAgICAgbGV0IGNhbGwgPSAwXG4gICAgICAgICAgICBpZiAoaGl0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PT0gaGl0c1toaXRzLmxlbmd0aCAtIDJdWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBjaGFuZ2VDb2x1bW4ocm93LCBjb2x1bW4sIGNhbGwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbHVtbiA9PT0gaGl0c1toaXRzLmxlbmd0aCAtIDJdWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwgPSBjaGFuZ2VSb3cocm93LCBjb2x1bW4sIGNhbGwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNlbGwpXG4gICAgICAgICAgICAgICAgcm93ID0gY2VsbC5yb3dcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSBjZWxsLmNvbHVtblxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93ICsgMSwgY29sdW1uXSkgfHwgKChyb3cgKyAxKSA+IDkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93IC0gMSwgY29sdW1uXSkgfHwgKChyb3cgLSAxKSA8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJySW5jbHVkZXNBcnIoYWxyZWFkeUhpdCwgW3JvdywgY29sdW1uICsgMV0pIHx8ICgoY29sdW1uICsgMSkgPiA5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93LCBjb2x1bW4gLSAxXSkgfHwgKChjb2x1bW4gLSAxKSA8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4gLT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uICs9IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyAtPSAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3cgKz0gMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICB9XG4gICAgICAgIG1lc3NhZ2UyID0gYXdhaXQgY29tcHV0ZXJBdHRhY2sgKGNvbXB1dGVyQUksIHBsYXllciwgcm93LCBjb2x1bW4sIGRlbGF5KVxuICAgICAgICBpZiAobWVzc2FnZTIgPT09IFwiR2FtZSBPdmVyXCIpIHtcbiAgICAgICAgICAgIHBsYXkgPSBmYWxzZVxuICAgICAgICAgICAgc2hvd0RpYWxvZyAoXCJjb21wdXRlclwiKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gIFxuICAgICAgICBpZiAobWVzc2FnZTIgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgIGhpdHMucHVzaChbcm93LCBjb2x1bW5dKVxuICAgICAgICAgICAgYWxyZWFkeUhpdC5wdXNoKFtyb3csIGNvbHVtbl0pXG4gXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZTIgPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICBhbHJlYWR5SGl0LnB1c2goW3JvdywgY29sdW1uXSlcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVzc2FnZTIgPT09IFwiYWxyZWFkeSBoaXRcIikge1xuICAgICAgICAgICAgZGVsYXkgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsYXkgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lc3NhZ2UyID09PSBcImhpdFwiIHx8IG1lc3NhZ2UyID09PSBcImFscmVhZHkgaGl0XCIpIHtcbiAgICAgICAgICAgIHBsYXkgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbGF5ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgY3JlYXRlQ2xpY2tFdmVudChwbGF5ZXIsIGNvbXB1dGVyQUkpICAgICAgICAgICAgICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb2x1bW4gKHJvdywgY29sdW1uLCBjYWxsKSB7XG4gICAgY2FsbCsrXG4gICAgbGV0IGkgPSAwXG4gICAgbGV0IGFkZFRvQ29sdW1uID0gMFxuICAgIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93LCBjb2x1bW4gKyAxXSkgJiYgYXJySW5jbHVkZXNBcnIoaGl0cywgW3JvdywgY29sdW1uICsgMV0pID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoY29sdW1uID4gMCkge1xuICAgICAgICAgICAgd2hpbGUgKGFyckluY2x1ZGVzQXJyKGFscmVhZHlIaXQsIFtyb3csIGNvbHVtbiAtIGldKSAmJiBhcnJJbmNsdWRlc0FycihoaXRzLCBbcm93LCBjb2x1bW4gLSBpXSkgJiYgKGNvbHVtbiAtIGFkZFRvQ29sdW1uID4gMCkpIHtcbiAgICAgICAgICAgICAgICBhZGRUb0NvbHVtbiAtPSAxXG4gICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2FsbCA8IDIpIHtcbiAgICAgICAgICAgICAgICByb3cgPSBjaGFuZ2VSb3cocm93LCBjb2x1bW4sIGNhbGwpLnJvd1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSBlbHNlIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93LCBjb2x1bW4gLSAxXSkgPT09IGZhbHNlICYmIGFyckluY2x1ZGVzQXJyKGhpdHMsIFtyb3csIGNvbHVtbiAtIDFdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGNvbHVtbiA+IDApIHtcbiAgICAgICAgICAgIGFkZFRvQ29sdW1uIC09IDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjYWxsIDwgMikge1xuICAgICAgICAgICAgICAgIHJvdyA9IGNoYW5nZVJvdyhyb3csIGNvbHVtbiwgY2FsbCkucm93XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSBcbiAgICB9IFxuICAgIGVsc2UgaWYgKGFyckluY2x1ZGVzQXJyKGFscmVhZHlIaXQsIFtyb3csIGNvbHVtbiArIDFdKSA9PT0gZmFsc2UgJiYgYXJySW5jbHVkZXNBcnIoaGl0cywgW3JvdywgY29sdW1uICsgMV0pID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoY29sdW1uIDwgOSkge1xuICAgICAgICAgICAgYWRkVG9Db2x1bW4gKz0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNhbGwgPCAyKSB7XG4gICAgICAgICAgICAgICAgcm93ID0gY2hhbmdlUm93KHJvdywgY29sdW1uLCBjYWxsKS5yb3dcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93LCBjb2x1bW4gLSAxXSkgJiYgYXJySW5jbHVkZXNBcnIoaGl0cywgW3JvdywgY29sdW1uIC0gMV0pID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoY29sdW1uIDwgOSkge1xuICAgICAgICAgICAgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93LCBjb2x1bW4gKyBpXSkgJiYgYXJySW5jbHVkZXNBcnIoaGl0cywgW3JvdywgY29sdW1uICsgaV0pICYmIChjb2x1bW4gKyBhZGRUb0NvbHVtbikgPCA5KSB7XG4gICAgICAgICAgICAgICAgYWRkVG9Db2x1bW4gKz0gMVxuICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjYWxsIDwgMikge1xuICAgICAgICAgICAgICAgIHJvdyA9IGNoYW5nZVJvdyhyb3csIGNvbHVtbiwgY2FsbCkucm93XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9IFxuICAgIFxuICAgIGNvbHVtbiArPSBhZGRUb0NvbHVtblxuICAgIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93LCBjb2x1bW5dKSB8fCBjb2x1bW4gPCAwKSB7XG4gICAgICAgIGhpdHMgPSBbXVxuICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiZnJvbSBjaGFuZ2VDb2x1bW46IFwiICsgcm93ICsgXCIsIGNvbHVtbiA6IFwiICsgY29sdW1uKVxuICAgIHJldHVybiB7IHJvdywgY29sdW1uIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJvdyAocm93LCBjb2x1bW4sIGNhbGwpIHtcbiAgICBjYWxsKytcbiAgICBsZXQgaSA9IDBcbiAgICBsZXQgYWRkVG9Sb3cgPSAwXG4gICAgaWYgKGFyckluY2x1ZGVzQXJyKGFscmVhZHlIaXQsIFtyb3cgKyAxLCBjb2x1bW5dKSAmJiBhcnJJbmNsdWRlc0FycihoaXRzLCBbcm93ICsgMSwgY29sdW1uXSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChyb3cgPiAwKSB7XG4gICAgICAgICAgICB3aGlsZSAoYXJySW5jbHVkZXNBcnIoYWxyZWFkeUhpdCwgW3JvdyAtIGksIGNvbHVtbl0pICYmIGFyckluY2x1ZGVzQXJyKGhpdHMsIFtyb3cgLSBpLCBjb2x1bW5dKSAmJiAocm93ICsgYWRkVG9Sb3cpID4gMCkge1xuICAgICAgICAgICAgICAgIGFkZFRvUm93IC09IDFcbiAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjYWxsIDwgMikge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IGNoYW5nZUNvbHVtbihyb3csIGNvbHVtbiwgY2FsbCkuY29sdW1uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9IGVsc2UgaWYgKGFyckluY2x1ZGVzQXJyKGFscmVhZHlIaXQsIFtyb3cgLSAxLCBjb2x1bW5dKSA9PT0gZmFsc2UgJiYgYXJySW5jbHVkZXNBcnIoaGl0cywgW3JvdyAtIDEsIGNvbHVtbl0pID09PSBmYWxzZSkge1xuICAgICAgICBpZiAocm93ID4gMCkge1xuICAgICAgICAgICAgYWRkVG9Sb3cgLT0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNhbGwgPCAyKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gY2hhbmdlQ29sdW1uKHJvdywgY29sdW1uLCBjYWxsKS5jb2x1bW5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICB9IFxuICAgICAgICB9IFxuICAgIH1cbiAgICBlbHNlIGlmIChhcnJJbmNsdWRlc0FycihhbHJlYWR5SGl0LCBbcm93ICsgMSwgY29sdW1uXSkgPT09IGZhbHNlICYmIGFyckluY2x1ZGVzQXJyKGhpdHMsIFtyb3cgKyAxLCBjb2x1bW5dKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHJvdyA8IDkpIHtcbiAgICAgICAgICAgIGFkZFRvUm93ICs9IDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjYWxsIDwgMikge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IGNoYW5nZUNvbHVtbihyb3csIGNvbHVtbiwgY2FsbCkuY29sdW1uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJySW5jbHVkZXNBcnIoYWxyZWFkeUhpdCwgW3JvdyAtIDEsIGNvbHVtbl0pICYmIGFyckluY2x1ZGVzQXJyKGhpdHMsIFtyb3cgLSAxLCBjb2x1bW5dKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHJvdyA8IDkpIHtcbiAgICAgICAgICAgIGkgPSAwXG4gICAgICAgICAgICB3aGlsZSAoYXJySW5jbHVkZXNBcnIoYWxyZWFkeUhpdCwgW3JvdyArIGksIGNvbHVtbl0pICYmIGFyckluY2x1ZGVzQXJyKGhpdHMsIFtyb3cgKyBpLCBjb2x1bW5dKSAmJiAocm93ICsgYWRkVG9Sb3cpIDwgOSkge1xuICAgICAgICAgICAgICAgIGFkZFRvUm93ICs9IDFcbiAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2FsbCA8IDIpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSBjaGFuZ2VDb2x1bW4ocm93LCBjb2x1bW4sIGNhbGwpLmNvbHVtblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSBcbiAgICBcbiAgICByb3cgKz0gYWRkVG9Sb3dcbiAgICBpZiAoYXJySW5jbHVkZXNBcnIoYWxyZWFkeUhpdCwgW3JvdywgY29sdW1uXSkgfHwgcm93IDwgMCkge1xuICAgICAgICBoaXRzID0gW11cbiAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiZnJvbSBjaGFuZ2VSb3c6IFwiICsgcm93ICsgXCIsIGNvbHVtbiA6IFwiICsgY29sdW1uKVxuICAgIHJldHVybiB7IHJvdywgY29sdW1uIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2sgKGNvbXB1dGVyQUksIHBsYXllciwgcm93LCBjb2x1bW4sIGRlbGF5KSB7XG4gICAgbGV0IG1lc3NhZ2UyIFxuICAgIGlmIChkZWxheSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1lc3NhZ2UyID0gY29tcHV0ZXJBSS5yYW5kb21BdHRhY2socGxheWVyLCByb3csIGNvbHVtbikgIFxuICAgICAgICB9LCA4MDApO1xuICAgICAgICBhd2FpdCBzbGVlcCg4MDApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZTIgPSBjb21wdXRlckFJLnJhbmRvbUF0dGFjayhwbGF5ZXIsIHJvdywgY29sdW1uKVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyckluY2x1ZGVzQXJyIChiaWdBcnIsIGFyckNoZWNrKSB7XG4gICAgcmV0dXJuIGJpZ0Fyci5zb21lKGFyciA9PiB7XG4gICAgICAgIHJldHVybiAoYXJyWzBdID09PSBhcnJDaGVja1swXSAmJiBhcnJbMV0gPT09IGFyckNoZWNrWzFdKVxuICAgIH0pXG4gICAgXG59XG5cbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5mdW5jdGlvbiBzZXR1cFVJICgpIHtcbiAgICBjb25zdCBib2FyZENvbXB1dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlclwiKVxuICAgIGJvYXJkQ29tcHV0ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1wbGFjZW1lbnRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpLnRleHRDb250ZW50ID0gXCJSZWFkeSB0byBmaXJlIENhcHRhaW4hXCJcbn1cblxuZnVuY3Rpb24gc2hvd0RpYWxvZyAod2lubmVyKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKVxuICAgIGNvbnN0IGRpYWxvZ1RleHQgPSBkaWFsb2cucXVlcnlTZWxlY3RvcihcImgyXCIpXG4gICAgaWYgKHdpbm5lciA9PT0gXCJwbGF5ZXJcIikgZGlhbG9nVGV4dC50ZXh0Q29udGVudCA9IFwiWW91IFdvblwiXG4gICAgaWYgKHdpbm5lciA9PT0gXCJjb21wdXRlclwiKSBkaWFsb2dUZXh0LnRleHRDb250ZW50ID0gXCJZb3UgTG9zdFwiXG4gICAgZGlhbG9nLnNob3dNb2RhbCgpXG4gICAgY29uc3QgYnRuID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIilcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGlhbG9nLmNsb3NlKClcbiAgICAgICAgY2xlYW5VcEZvck5ld0dhbWUoKVxuICAgICAgICBjcmVhdGVHYW1lKClcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjbGVhblVwRm9yTmV3R2FtZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtcGxhY2VtZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1wbGFjZW1lbnRcIikuaW5uZXJIVE1MID0gYDxidXR0b24gaWQ9XCJjaGFuZ2Utcm90YXRpb25cIj5DaGFuZ2UgUm90YXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5DYXJyaWVyPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5CYXR0bGVzaGlwPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5EZXN0cm95ZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlN1Ym1hcmluZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Q3J1aXNlcjwvaDQ+YFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpLmlubmVySFRNTCA9IFwiXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpLmlubmVySFRNTCA9IFwiXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpLnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKS50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBzaGlwcyB0byBiZWdpbiFcIlxuICAgIGhpdHMgPSBbXVxuICAgIGFscmVhZHlIaXQgPSBbXVxufSIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1pc3NlZEhpdHMgPSBbXVxuICAgICAgICB0aGlzLmJvYXJkID0gW11cbiAgICAgICAgdGhpcy5udW1iZXJTaGlwU3VuayA9IDBcbiAgICAgICAgdGhpcy5jcmVhdGVCb2FyZCgpXG4gICAgfVxuXG4gICAgY3JlYXRlQm9hcmQgKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucHVzaChbXSlcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0ucHVzaChbdHJ1ZV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGFjZVNoaXBSYW5kb20gKHNoaXBzKSB7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICBsZXQgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICBsZXQgYXhpcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gMCkgYXhpcyA9IFwieFwiIFxuICAgICAgICAgICAgZWxzZSBpZiAoYXhpcyA9PT0gMSkgYXhpcyA9IFwieVwiXG4gICAgICAgICAgICBsZXQgc3VjY2Vzc2Z1bCA9IGZhbHNlXG4gICAgICAgICAgICB3aGlsZSAoc3VjY2Vzc2Z1bCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGFjZVNoaXAoc2hpcCwgcm93LCBjb2x1bW4sIGF4aXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc2Z1bCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyBcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAgKHNoaXBPYmosIHJvdywgY29sdW1uLCBheGlzKSB7XG4gICAgICAgIHJvdyA9IE51bWJlcihyb3cpXG4gICAgICAgIGNvbHVtbiA9IE51bWJlcihjb2x1bW4pXG4gICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChzaGlwT2JqLmxlbmd0aClcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxhY2VtZW50UG9zc2libGUoc2hpcCwgcm93LCBjb2x1bW4sIGF4aXMpKSByZXR1cm4gZmFsc2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uICsgaV0gPSBzaGlwXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3cgKyBpXVtjb2x1bW5dID0gc2hpcFxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGlzUGxhY2VtZW50UG9zc2libGUoc2hpcCwgcm93LCBjb2x1bW4sIGF4aXMpIHtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uICsgc2hpcC5sZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbHVtbiArIGldIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgIGlmIChyb3cgKyBzaGlwLmxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JvdyArIGldW2NvbHVtbl0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2sgKHJvdywgY29sdW1uKSB7XG4gICAgICAgIGxldCBtZXNzYWdlXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLmhpdCgpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLmlzU3VuaygpKSB0aGlzLm51bWJlclNoaXBTdW5rKytcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJoaXRcIlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm51bWJlclNoaXBTdW5rID09PSA1KSBtZXNzYWdlID0gXCJHYW1lIE92ZXJcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3NlZEhpdHMucHVzaChbcm93LCBjb2x1bW5dKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIm1pc3NcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiYWxyZWFkeSBoaXRcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHVwZGF0ZUJvYXJkVUkgfSBmcm9tIFwiLi9ib2FyZFVJXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKVxuICAgIH1cblxuICAgIHNlbmRBdHRhY2sgKHJvdywgY29sdW1uLCBkZWZlbmRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZGVmZW5kZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pXG4gICAgICAgIHVwZGF0ZUJvYXJkVUkobWVzc2FnZSwgcm93LCBjb2x1bW4sIGRlZmVuZGVyKVxuICAgICAgICByZXR1cm4gbWVzc2FnZVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGggXG4gICAgICAgIHRoaXMudGltZXNIaXQgPSAwXG4gICAgfVxuXG4gICAgaGl0ICgpIHtcbiAgICAgICAgdGhpcy50aW1lc0hpdCsrXG4gICAgfVxuXG4gICAgaXNTdW5rICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXNIaXQgPT09IHRoaXMubGVuZ3RoXG4gICAgfVxufVxuXG5cbiAgICBcbiIsImltcG9ydCB7IHBsYXlHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiXG5cbmNvbnN0IHNoaXBzID0gW3tuYW1lOiBcImNhcnJpZXJcIiwgbGVuZ3RoOiA1fSxcbiAgICAgICAgICAgIHtuYW1lOiBcImJhdHRsZXNoaXBcIiwgbGVuZ3RoOiA0fSxcbiAgICAgICAgICAgIHtuYW1lOiBcImRlc3Ryb3llclwiLCBsZW5ndGg6IDN9LFxuICAgICAgICAgICAge25hbWU6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogM30sXG4gICAgICAgICAgICB7bmFtZTogXCJjcnVpc2VyXCIsIGxlbmd0aDogMn1dXG5cblxuY29uc3QgQk9SREVSX1NUWUxFID0gXCIycHggc29saWQgIzllN2ZmMFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTaGlwVUkgKHBsYXllciwgY29tcHV0ZXJBSSkge1xuICAgIGNvbXB1dGVyQUkucGxhY2VTaGlwUmFuZG9tbHkoc2hpcHMpXG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkXG4gICAgY29uc3QgY2hhbmdlUm90YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoYW5nZS1yb3RhdGlvblwiKVxuXG4gICAgY29uc3QgYm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtY2VsbFwiKVxuXG4gICAgbGV0IHJvdGF0aW9uID0gXCJ4XCJcbiAgICBjaGFuZ2VSb3RhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge3JvdGF0aW9uID09PSBcInhcIiA/IHJvdGF0aW9uID0gXCJ5XCIgOiByb3RhdGlvbiA9IFwieFwifSlcblxuICAgIGxldCBjbGlja3MgPSAwXG4gICAgYm9hcmRDZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiXG4gICAgICAgICAgICBpZiAoY2xpY2tzID09PSA1KSB7XG4gICAgICAgICAgICAgICAgcGxheUdhbWUgKHBsYXllciwgY29tcHV0ZXJBSSlcbiAgICAgICAgICAgICAgICBjbGlja3MrK1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjbGlja3MgPCA1KSB7XG4gICAgICAgICAgICAgICAgaG92ZXJVSShjZWxsLCBzaGlwc1tjbGlja3NdLCByb3RhdGlvbiwgZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChjbGlja3MgPT09IDUpIHtcbiAgICAgICAgICAgICAgICBwbGF5R2FtZSAocGxheWVyLCBjb21wdXRlckFJKVxuICAgICAgICAgICAgICAgIGNsaWNrcysrXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsaWNrcyA8IDUpIHtcbiAgICAgICAgICAgICAgICBob3ZlclVJKGNlbGwsIHNoaXBzW2NsaWNrc10sIHJvdGF0aW9uLCBlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2xpY2tzID09PSA1KSB7XG4gICAgICAgICAgICAgICAgcGxheUdhbWUgKHBsYXllciwgY29tcHV0ZXJBSSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xpY2tzIDwgNSkge1xuICAgICAgICAgICAgICAgIGlmIChhZGRTaGlwKGNlbGwsIGJvYXJkLCBzaGlwc1tjbGlja3NdLCByb3RhdGlvbikgPT09IGZhbHNlKSByZXR1cm4gIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xpY2tzKytcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBob3ZlclVJIChjZWxsLCBzaGlwLCByb3RhdGlvbiwgZXZlbnQpIHtcbiAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV3Q2VsbDtcbiAgICAgICAgaWYgKHJvdGF0aW9uID09PSBcInhcIikge1xuICAgICAgICAgICAgaWYgKE51bWJlcihjZWxsLmlkWzFdKSArIHNoaXAubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE51bWJlcihjZWxsLmlkKSArIGkgPCAxMCkge1xuICAgICAgICAgICAgICAgIG5ld0NlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgMCR7TnVtYmVyKGNlbGwuaWQpICsgaX1gKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIoY2VsbC5pZCkgKyBpID4gOTkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke051bWJlcihjZWxsLmlkKSArIGl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdDZWxsLmlkWzBdICE9PSBjZWxsLmlkWzBdKSByZXR1cm5cbiAgICAgICAgfSBlbHNlIGlmIChyb3RhdGlvbiA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgIGlmIChOdW1iZXIoY2VsbC5pZFswXSkgKyBzaGlwLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjZWxsLmlkWzBdID09PSBcIjBcIiAmJiBpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNlbGwuaWQpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE51bWJlcihjZWxsLmlkKSArIGkgKiAxMCA+IDk5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0NlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtOdW1iZXIoY2VsbC5pZCkgKyBpICogMTB9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKG5ld0NlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID09IFwiYmxhY2tcIikge1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JlZW4taG92ZXJcIikuZm9yRWFjaChjZWxsID0+IGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZW91dCcpIHtcbiAgICAgICAgICAgICAgICBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwNDA4MFwiO1xuICAgICAgICAgICAgICAgIG5ld0NlbGwuY2xhc3NMaXN0LnJlbW92ZShcImdyZWVuLWhvdmVyXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2VvdmVyJykge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLnN0eWxlLmN1cnNvciA9PT0gXCJub3QtYWxsb3dlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzA0ZTAwNFwiO1xuICAgICAgICAgICAgICAgICAgICBuZXdDZWxsLmNsYXNzTGlzdC5hZGQoXCJncmVlbi1ob3ZlclwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgXG4gICAgfSBcbn0gXG5cbmZ1bmN0aW9uIGFkZFNoaXAoY2VsbCwgYm9hcmQsIHNoaXAsIHJvdGF0aW9uKSB7XG4gICAgaWYgKGJvYXJkLnBsYWNlU2hpcChzaGlwLCBgJHtjZWxsLmlkWzBdfWAsIGAke2NlbGwuaWRbMV19YCwgcm90YXRpb24pID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXdDZWxsO1xuICAgICAgICBpZiAocm90YXRpb24gPT09IFwieFwiKSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKGNlbGwuaWQpICsgaSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAwJHtOdW1iZXIoY2VsbC5pZCkgKyBpfWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0NlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtOdW1iZXIoY2VsbC5pZCkgKyBpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3Q2VsbC5pZFswXSAhPT0gY2VsbC5pZFswXSkgcmV0dXJuXG4gICAgICAgIH0gZWxzZSBpZiAocm90YXRpb24gPT09IFwieVwiKSB7XG4gICAgICAgICAgICBpZiAoY2VsbC5pZFswXSA9PT0gXCIwXCIgJiYgaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5ld0NlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsLmlkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7TnVtYmVyKGNlbGwuaWQpICsgaSAqIDEwfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3Q2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JlZW4taG92ZXJcIilcbiAgICAgICAgbmV3Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIHN0eWxlQm9yZGVycyAoaSwgbmV3Q2VsbCwgcm90YXRpb24sIHNoaXApXG4gICAgICAgIGNvbnN0IHNoaXBOYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1wbGFjZW1lbnRcIikucXVlcnlTZWxlY3RvckFsbChcImg0XCIpXG4gICAgICAgIHNoaXBOYW1lcy5mb3JFYWNoKHNoaXBOYW1lID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwTmFtZS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpID09PSBzaGlwLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBzaGlwTmFtZS5pbm5lckhUTUwgPSBgPGRlbD4ke3NoaXBOYW1lLnRleHRDb250ZW50fTwvZGVsPmBcbiAgICAgICAgICAgICAgICBzaGlwTmFtZS5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gIFxufVxuXG5mdW5jdGlvbiBzdHlsZUJvcmRlcnMgKGksIG5ld0NlbGwsIHJvdGF0aW9uLCBzaGlwKSB7XG4gICAgaWYgKHJvdGF0aW9uID09PSBcInlcIikge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJUb3AgPSBCT1JERVJfU1RZTEVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpID09PSBzaGlwLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIG5ld0NlbGwuc3R5bGUuYm9yZGVyQm90dG9tID0gQk9SREVSX1NUWUxFXG4gICAgICAgIH1cbiAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IEJPUkRFUl9TVFlMRVxuICAgICAgICBuZXdDZWxsLnN0eWxlLmJvcmRlckxlZnQgPSBCT1JERVJfU1RZTEVcbiAgICB9IGVsc2UgaWYgKHJvdGF0aW9uID09PSBcInhcIikge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJMZWZ0ID0gQk9SREVSX1NUWUxFXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gc2hpcC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBuZXdDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gQk9SREVSX1NUWUxFXG4gICAgICAgIH1cbiAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJUb3AgPSBCT1JERVJfU1RZTEVcbiAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJCb3R0b20gPSBCT1JERVJfU1RZTEVcbiAgICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvc3R5bGUuY3NzXCJcbmltcG9ydCBjcmVhdGVHYW1lIGZyb20gXCIuL3NjcmlwdC9nYW1lXCJcblxuY3JlYXRlR2FtZSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=