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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.main-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;
    background-color: aqua;
}

.gameboards-container {
    display: flex;
    justify-content: center;
    gap: 96px;
}

.board-cell {
    width: 50px;
    height: 50px;
    background-color: black;
    border: 1px solid greenyellow
}

.board {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}
`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAEA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,4JAA4J;AAChK;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB;AACJ;;AAEA;IACI,aAAa;IACb,sCAAsC;AAC1C","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Poppins, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.main-container {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    gap: 48px;\n    align-items: center;\n    background-color: aqua;\n}\n\n.gameboards-container {\n    display: flex;\n    justify-content: center;\n    gap: 96px;\n}\n\n.board-cell {\n    width: 50px;\n    height: 50px;\n    background-color: black;\n    border: 1px solid greenyellow\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n"],"sourceRoot":""}]);
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
        element.style.backgroundColor = "red"
    }
    else if (message === "miss") {
        element.style.backgroundColor = "blue"
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

    randomAttack (player) {
        const row = Math.floor(Math.random() * 10)
        const column = Math.floor(Math.random() * 10)
        let message
        player.gameboard.board[row][column] 
                        ? message = player.gameboard.receiveAttack(row, column)
                        : this.randomAttack (player)
        ;(0,_boardUI__WEBPACK_IMPORTED_MODULE_1__.updateBoardUI)(message, row, column, player)
        if (message === "Game Over") return "Game Over"
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
/* harmony export */   "default": () => (/* binding */ createGame),
/* harmony export */   playGame: () => (/* binding */ playGame)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/script/player.js");
/* harmony import */ var _computerAI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computerAI */ "./src/script/computerAI.js");
/* harmony import */ var _boardUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boardUI */ "./src/script/boardUI.js");




function createGame () {
    const player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]()
    const computerAI = new _computerAI__WEBPACK_IMPORTED_MODULE_1__["default"]()
    ;(0,_boardUI__WEBPACK_IMPORTED_MODULE_2__["default"])(player, computerAI)    
}

function playGame (player, computerAI) {
    const computerBoard = document.querySelector(".computer-board")
    const computerBoardCells = computerBoard.querySelectorAll(".board-cell")
    console.table(computerAI.gameboard.board)
    let gameStop = false
    computerBoardCells.forEach(cell => cell.addEventListener("click", () => {
        if (gameStop === true) return
        const message = player.sendAttack(cell.id[0], cell.id[1], computerAI)
        if (message === "Game Over") {
            gameStop = true
            return
        } else if (message === "already hit") {
            return
        }
        const message2 = computerAI.randomAttack(player)        
        if (message2 === "Game Over") {
            gameStop = true
            return
        }        
    }))
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

const BORDER_STYLE = "2px solid blue"

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
    for (let i = 0; i < ship.length; i++) {
        let newCell;
        if (rotation === "x") {
            if (Number(cell.id) + i < 10) {
                newCell = document.getElementById(`0${Number(cell.id) + i}`)
            } else if (Number(cell.id) + i > 99) {
                return
            } else {
                newCell = document.getElementById(`${Number(cell.id) + i}`)
            }
            if (newCell.id[0] !== cell.id[0]) return
        } else if (rotation === "y") {
            if (cell.id[0] === "0" && i === 0) {
                newCell = document.getElementById(cell.id)
            } else if (Number(cell.id) + i * 10 > 99) {
                return
            } else {
                newCell = document.getElementById(`${Number(cell.id) + i * 10}`)
            }
        }
        if (newCell.style.backgroundColor === "orange") {
            continue
        } else {
            if (event.type == 'mouseout') {
                newCell.style.backgroundColor = "black";
            }
            if (event.type == 'mouseover') {
                
                newCell.style.backgroundColor = "red";
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
        newCell.style.backgroundColor = "orange";
        styleBorders (i, newCell, rotation, ship)
        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWM7QUFDZCxxREFBcUQseUJBQXlCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2hJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNZOztBQUV0Qyx3REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHQvYm9hcmRVSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdC9jb21wdXRlckFJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0L3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0L3NoaXBVSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0OHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuLmdhbWVib2FyZHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogOTZweDtcbn1cblxuLmJvYXJkLWNlbGwge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvd1xufVxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0Qiw0SkFBNEo7QUFDaEs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDQ4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDk2cHg7XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvYWRTaGlwVUkgZnJvbSBcIi4vc2hpcFVJXCJcbmltcG9ydCBDb21wdXRlckFJIGZyb20gXCIuL2NvbXB1dGVyQUlcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQm9hcmRVSSAocGxheWVyLCBjb21wdXRlckFJKSB7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKVxuICAgIGNyZWF0ZUdyaWQocGxheWVyLmdhbWVib2FyZC5ib2FyZCwgcGxheWVyQm9hcmQpXG5cbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKVxuICAgIGNyZWF0ZUdyaWQoY29tcHV0ZXJBSS5nYW1lYm9hcmQuYm9hcmQsIGNvbXB1dGVyQm9hcmQpXG5cbiAgICBsb2FkU2hpcFVJKHBsYXllciwgY29tcHV0ZXJBSSlcblxuICAgIHJldHVybiBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZFxufVxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkIChib2FyZCwgZGl2KSB7XG4gICAgbGV0IHJvd0lEID0gMFxuICAgIGJvYXJkLmZvckVhY2goKGFycikgPT4geyBcbiAgICAgICAgbGV0IGNvbHVtbklEID0gMFxuICAgICAgICBhcnIuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtY2VsbFwiKSAgXG4gICAgICAgICAgICBjZWxsLmlkID0gYCR7cm93SUR9JHtjb2x1bW5JRH1gXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY2VsbClcbiAgICAgICAgICAgIGNvbHVtbklEKytcbiAgICAgICAgfSlcbiAgICAgICAgcm93SUQrK1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQm9hcmRVSSAobWVzc2FnZSwgcm93LCBjb2x1bW4sIGRlZmVuZGVyKSB7XG4gICAgbGV0IGVsZW1lbnRcbiAgICBpZiAoZGVmZW5kZXIgaW5zdGFuY2VvZiBDb21wdXRlckFJKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIilcbiAgICAgICAgZWxlbWVudCA9IHBhcmVudC5jaGlsZHJlbltgJHtyb3d9JHtjb2x1bW59YF1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKVxuICAgICAgICBlbGVtZW50ID0gcGFyZW50LmNoaWxkcmVuW2Ake3Jvd30ke2NvbHVtbn1gXVxuICAgIH0gICAgXG4gICAgaWYgKG1lc3NhZ2UgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiXG4gICAgfVxuICAgIGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwibWlzc1wiKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibHVlXCJcbiAgICB9XG59IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHVwZGF0ZUJvYXJkVUkgfSBmcm9tIFwiLi9ib2FyZFVJXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyQUl7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKVxuICAgIH1cblxuICAgIHBsYWNlU2hpcFJhbmRvbWx5KHNoaXBzKSB7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcFJhbmRvbShzaGlwcylcbiAgICB9XG5cbiAgICByYW5kb21BdHRhY2sgKHBsYXllcikge1xuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgY29uc3QgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIGxldCBtZXNzYWdlXG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dIFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBtZXNzYWdlID0gcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnJhbmRvbUF0dGFjayAocGxheWVyKVxuICAgICAgICB1cGRhdGVCb2FyZFVJKG1lc3NhZ2UsIHJvdywgY29sdW1uLCBwbGF5ZXIpXG4gICAgICAgIGlmIChtZXNzYWdlID09PSBcIkdhbWUgT3ZlclwiKSByZXR1cm4gXCJHYW1lIE92ZXJcIlxuICAgIH1cblxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgQ29tcHV0ZXJBSSBmcm9tIFwiLi9jb21wdXRlckFJXCI7XG5pbXBvcnQgbG9hZEJvYXJkVUkgZnJvbSBcIi4vYm9hcmRVSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHYW1lICgpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKClcbiAgICBjb25zdCBjb21wdXRlckFJID0gbmV3IENvbXB1dGVyQUkoKVxuICAgIGxvYWRCb2FyZFVJKHBsYXllciwgY29tcHV0ZXJBSSkgICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5R2FtZSAocGxheWVyLCBjb21wdXRlckFJKSB7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIilcbiAgICBjb25zdCBjb21wdXRlckJvYXJkQ2VsbHMgPSBjb21wdXRlckJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtY2VsbFwiKVxuICAgIGNvbnNvbGUudGFibGUoY29tcHV0ZXJBSS5nYW1lYm9hcmQuYm9hcmQpXG4gICAgbGV0IGdhbWVTdG9wID0gZmFsc2VcbiAgICBjb21wdXRlckJvYXJkQ2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGdhbWVTdG9wID09PSB0cnVlKSByZXR1cm5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHBsYXllci5zZW5kQXR0YWNrKGNlbGwuaWRbMF0sIGNlbGwuaWRbMV0sIGNvbXB1dGVyQUkpXG4gICAgICAgIGlmIChtZXNzYWdlID09PSBcIkdhbWUgT3ZlclwiKSB7XG4gICAgICAgICAgICBnYW1lU3RvcCA9IHRydWVcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiYWxyZWFkeSBoaXRcIikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZTIgPSBjb21wdXRlckFJLnJhbmRvbUF0dGFjayhwbGF5ZXIpICAgICAgICBcbiAgICAgICAgaWYgKG1lc3NhZ2UyID09PSBcIkdhbWUgT3ZlclwiKSB7XG4gICAgICAgICAgICBnYW1lU3RvcCA9IHRydWVcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9ICAgICAgICBcbiAgICB9KSlcbn0iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5taXNzZWRIaXRzID0gW11cbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdXG4gICAgICAgIHRoaXMubnVtYmVyU2hpcFN1bmsgPSAwXG4gICAgICAgIHRoaXMuY3JlYXRlQm9hcmQoKVxuICAgIH1cblxuICAgIGNyZWF0ZUJvYXJkICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnB1c2goW10pXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldLnB1c2goW3RydWVdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwUmFuZG9tIChzaGlwcykge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgbGV0IGF4aXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgICAgICAgICAgaWYgKGF4aXMgPT09IDApIGF4aXMgPSBcInhcIiBcbiAgICAgICAgICAgIGVsc2UgaWYgKGF4aXMgPT09IDEpIGF4aXMgPSBcInlcIlxuICAgICAgICAgICAgbGV0IHN1Y2Nlc3NmdWwgPSBmYWxzZVxuICAgICAgICAgICAgd2hpbGUgKHN1Y2Nlc3NmdWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxhY2VTaGlwKHNoaXAsIHJvdywgY29sdW1uLCBheGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NmdWwgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgXG4gICAgfVxuXG4gICAgcGxhY2VTaGlwIChzaGlwT2JqLCByb3csIGNvbHVtbiwgYXhpcykge1xuICAgICAgICByb3cgPSBOdW1iZXIocm93KVxuICAgICAgICBjb2x1bW4gPSBOdW1iZXIoY29sdW1uKVxuICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2hpcE9iai5sZW5ndGgpXG4gICAgICAgIGlmICghdGhpcy5pc1BsYWNlbWVudFBvc3NpYmxlKHNoaXAsIHJvdywgY29sdW1uLCBheGlzKSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbHVtbiArIGldID0gc2hpcFxuICAgICAgICAgICAgfSBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93ICsgaV1bY29sdW1uXSA9IHNoaXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBpc1BsYWNlbWVudFBvc3NpYmxlKHNoaXAsIHJvdywgY29sdW1uLCBheGlzKSB7XG4gICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgaWYgKGNvbHVtbiArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW4gKyBpXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICBpZiAocm93ICsgc2hpcC5sZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgKyBpXVtjb2x1bW5dIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrIChyb3csIGNvbHVtbikge1xuICAgICAgICBsZXQgbWVzc2FnZVxuICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5oaXQoKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5pc1N1bmsoKSkgdGhpcy5udW1iZXJTaGlwU3VuaysrXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiaGl0XCJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5udW1iZXJTaGlwU3VuayA9PT0gNSkgbWVzc2FnZSA9IFwiR2FtZSBPdmVyXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taXNzZWRIaXRzLnB1c2goW3JvdywgY29sdW1uXSlcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJtaXNzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcImFscmVhZHkgaGl0XCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVzc2FnZVxuICAgIH1cbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyB1cGRhdGVCb2FyZFVJIH0gZnJvbSBcIi4vYm9hcmRVSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKClcbiAgICB9XG5cbiAgICBzZW5kQXR0YWNrIChyb3csIGNvbHVtbiwgZGVmZW5kZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRlZmVuZGVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKVxuICAgICAgICBpZiAobWVzc2FnZSA9PT0gXCJhbHJlYWR5IGhpdFwiKSByZXR1cm4gXCJhbHJlYWR5IGhpdFwiXG4gICAgICAgIHVwZGF0ZUJvYXJkVUkobWVzc2FnZSwgcm93LCBjb2x1bW4sIGRlZmVuZGVyKVxuICAgICAgICBpZiAobWVzc2FnZSA9PT0gXCJHYW1lIE92ZXJcIikgcmV0dXJuIFwiR2FtZSBPdmVyXCJcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoIFxuICAgICAgICB0aGlzLnRpbWVzSGl0ID0gMFxuICAgIH1cblxuICAgIGhpdCAoKSB7XG4gICAgICAgIHRoaXMudGltZXNIaXQrK1xuICAgIH1cblxuICAgIGlzU3VuayAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVzSGl0ID09PSB0aGlzLmxlbmd0aFxuICAgIH1cbn1cblxuXG4gICAgXG4iLCJpbXBvcnQgeyBwbGF5R2FtZSB9IGZyb20gXCIuL2dhbWVcIlxuXG5jb25zdCBzaGlwcyA9IFt7bmFtZTogXCJjYXJyaWVyXCIsIGxlbmd0aDogNX0sXG4gICAgICAgICAgICB7bmFtZTogXCJiYXR0bGVzaGlwXCIsIGxlbmd0aDogNH0sXG4gICAgICAgICAgICB7bmFtZTogXCJkZXN0cm95ZXJcIiwgbGVuZ3RoOiAzfSxcbiAgICAgICAgICAgIHtuYW1lOiBcInN1Ym1hcmluZVwiLCBsZW5ndGg6IDN9LFxuICAgICAgICAgICAge25hbWU6IFwiY3J1aXNlclwiLCBsZW5ndGg6IDJ9XVxuXG5jb25zdCBCT1JERVJfU1RZTEUgPSBcIjJweCBzb2xpZCBibHVlXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFNoaXBVSSAocGxheWVyLCBjb21wdXRlckFJKSB7XG4gICAgY29tcHV0ZXJBSS5wbGFjZVNoaXBSYW5kb21seShzaGlwcylcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nYW1lYm9hcmRcbiAgICBjb25zdCBjaGFuZ2VSb3RhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hhbmdlLXJvdGF0aW9uXCIpXG5cbiAgICBjb25zdCBib2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYm9hcmRcIikucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC1jZWxsXCIpXG5cbiAgICBsZXQgcm90YXRpb24gPSBcInhcIlxuICAgIGNoYW5nZVJvdGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7cm90YXRpb24gPT09IFwieFwiID8gcm90YXRpb24gPSBcInlcIiA6IHJvdGF0aW9uID0gXCJ4XCJ9KVxuXG4gICAgbGV0IGNsaWNrcyA9IDBcbiAgICBib2FyZENlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNsaWNrcyA9PT0gNSkge1xuICAgICAgICAgICAgICAgIHBsYXlHYW1lIChwbGF5ZXIsIGNvbXB1dGVyQUkpXG4gICAgICAgICAgICAgICAgY2xpY2tzKytcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xpY2tzIDwgNSkge1xuICAgICAgICAgICAgICAgIGhvdmVyVUkoY2VsbCwgc2hpcHNbY2xpY2tzXSwgcm90YXRpb24sIGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2xpY2tzID09PSA1KSB7XG4gICAgICAgICAgICAgICAgcGxheUdhbWUgKHBsYXllciwgY29tcHV0ZXJBSSlcbiAgICAgICAgICAgICAgICBjbGlja3MrK1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjbGlja3MgPCA1KSB7XG4gICAgICAgICAgICAgICAgaG92ZXJVSShjZWxsLCBzaGlwc1tjbGlja3NdLCByb3RhdGlvbiwgZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNsaWNrcyA9PT0gNSkge1xuICAgICAgICAgICAgICAgIHBsYXlHYW1lIChwbGF5ZXIsIGNvbXB1dGVyQUkpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsaWNrcyA8IDUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkU2hpcChjZWxsLCBib2FyZCwgc2hpcHNbY2xpY2tzXSwgcm90YXRpb24pID09PSBmYWxzZSkgcmV0dXJuICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsaWNrcysrXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaG92ZXJVSSAoY2VsbCwgc2hpcCwgcm90YXRpb24sIGV2ZW50KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXdDZWxsO1xuICAgICAgICBpZiAocm90YXRpb24gPT09IFwieFwiKSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKGNlbGwuaWQpICsgaSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAwJHtOdW1iZXIoY2VsbC5pZCkgKyBpfWApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE51bWJlcihjZWxsLmlkKSArIGkgPiA5OSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7TnVtYmVyKGNlbGwuaWQpICsgaX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld0NlbGwuaWRbMF0gIT09IGNlbGwuaWRbMF0pIHJldHVyblxuICAgICAgICB9IGVsc2UgaWYgKHJvdGF0aW9uID09PSBcInlcIikge1xuICAgICAgICAgICAgaWYgKGNlbGwuaWRbMF0gPT09IFwiMFwiICYmIGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXdDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbC5pZClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTnVtYmVyKGNlbGwuaWQpICsgaSAqIDEwID4gOTkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke051bWJlcihjZWxsLmlkKSArIGkgKiAxMH1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gXCJvcmFuZ2VcIikge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZW91dCcpIHtcbiAgICAgICAgICAgICAgICBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZW92ZXInKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV3Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICBcbiAgICB9IFxufSBcblxuZnVuY3Rpb24gYWRkU2hpcChjZWxsLCBib2FyZCwgc2hpcCwgcm90YXRpb24pIHtcbiAgICBpZiAoYm9hcmQucGxhY2VTaGlwKHNoaXAsIGAke2NlbGwuaWRbMF19YCwgYCR7Y2VsbC5pZFsxXX1gLCByb3RhdGlvbikgPT09IGZhbHNlKSByZXR1cm4gZmFsc2VcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG5ld0NlbGw7XG4gICAgICAgIGlmIChyb3RhdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIGlmIChOdW1iZXIoY2VsbC5pZCkgKyBpIDwgMTApIHtcbiAgICAgICAgICAgICAgICBuZXdDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYDAke051bWJlcihjZWxsLmlkKSArIGl9YClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke051bWJlcihjZWxsLmlkKSArIGl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdDZWxsLmlkWzBdICE9PSBjZWxsLmlkWzBdKSByZXR1cm5cbiAgICAgICAgfSBlbHNlIGlmIChyb3RhdGlvbiA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgIGlmIChjZWxsLmlkWzBdID09PSBcIjBcIiAmJiBpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNlbGwuaWQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0NlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtOdW1iZXIoY2VsbC5pZCkgKyBpICogMTB9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgIHN0eWxlQm9yZGVycyAoaSwgbmV3Q2VsbCwgcm90YXRpb24sIHNoaXApXG4gICAgICAgIFxuICAgIH0gIFxufVxuXG5mdW5jdGlvbiBzdHlsZUJvcmRlcnMgKGksIG5ld0NlbGwsIHJvdGF0aW9uLCBzaGlwKSB7XG4gICAgaWYgKHJvdGF0aW9uID09PSBcInlcIikge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJUb3AgPSBCT1JERVJfU1RZTEVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpID09PSBzaGlwLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIG5ld0NlbGwuc3R5bGUuYm9yZGVyQm90dG9tID0gQk9SREVSX1NUWUxFXG4gICAgICAgIH1cbiAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IEJPUkRFUl9TVFlMRVxuICAgICAgICBuZXdDZWxsLnN0eWxlLmJvcmRlckxlZnQgPSBCT1JERVJfU1RZTEVcbiAgICB9IGVsc2UgaWYgKHJvdGF0aW9uID09PSBcInhcIikge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJMZWZ0ID0gQk9SREVSX1NUWUxFXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gc2hpcC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBuZXdDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gQk9SREVSX1NUWUxFXG4gICAgICAgIH1cbiAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJUb3AgPSBCT1JERVJfU1RZTEVcbiAgICAgICAgbmV3Q2VsbC5zdHlsZS5ib3JkZXJCb3R0b20gPSBCT1JERVJfU1RZTEVcbiAgICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvc3R5bGUuY3NzXCJcbmltcG9ydCBjcmVhdGVHYW1lIGZyb20gXCIuL3NjcmlwdC9nYW1lXCJcblxuY3JlYXRlR2FtZSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=