(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["bogu"] = factory(require("react"));
	else
		root["bogu"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconBase = function IconBase(_ref, _ref2) {
  var children = _ref.children;
  var color = _ref.color;
  var size = _ref.size;
  var style = _ref.style;
  var width = _ref.width;
  var height = _ref.height;

  var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

  var _ref2$reactIconBase = _ref2.reactIconBase;
  var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;

  var computedSize = size || reactIconBase.size || '1em';
  return _react2.default.createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, reactIconBase, props, {
    style: _extends({
      verticalAlign: 'middle',
      color: color || reactIconBase.color
    }, reactIconBase.style || {}, style)
  }));
};

IconBase.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
};

IconBase.contextTypes = {
  reactIconBase: _propTypes2.default.shape(IconBase.propTypes)
};

exports.default = IconBase;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var colorDef = {
  black: '#000',
  white: '#FFF',
  red: '#F00',
  green: '#0F0',
  blue: '#00F',
  bigblue: '#1169A7',
  darkBlue: '#083453',
  darkGrey: '#2F2F2F',
  grey: '#DDDDDD',
  lightGrey: '#F2F2F2',
  entur: {
    primary: '#273A46', // 39,58,70
    secondary: '#6BBDC2' //107,189,194,
  }
};

var color = exports.color = {
  font: {
    inverse: colorDef.white,
    title: colorDef.black,
    info1: colorDef.entur.secondary,
    info2: colorDef.darkBlue,
    info3: colorDef.black,
    warn: colorDef.red,
    disabled: colorDef.grey,

    tooltip: colorDef.white
  },
  background: colorDef.entur.primary,
  border: colorDef.black,
  effective: colorDef.black,
  fail: colorDef.red,
  modal: colorDef.white,
  backdrop: 'rgba(0, 0, 0, 0.3)',
  tooltip: '#191919',
  tabActive: colorDef.entur.secondary,

  timeLineBackground: '#DED8D8',
  timeLineBlockBackground: '#6D92B6',
  timeLineBorder: '#eee',
  timeLineSuccess: '#5DAE5D',
  timeLineFail: '#B91919',
  tableHeader: colorDef.lightGrey,
  tableRow: '#ebf2f1',
  tableInfo: '#ffffdb',

  valid: '#33c146',
  invalid: '#b20000',
  expiring: '#FFAA00',
  highlight: {
    valid: '#4caf50',
    expiring: '#FFB60A',
    invalid: '#cc0000'
  }
};

var dimension = exports.dimension = {
  timeLineWidth: 85
};

var styles = exports.styles = {
  color: color,
  dimension: dimension
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(23)();
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Licensed under the EUPL, Version 1.2 or – as soon they will be approved by
 * the European Commission - subsequent versions of the EUPL (the "Licence");
 * You may not use this work except in compliance with the Licence.
 * You may obtain a copy of the Licence at:
 *
 *   https://joinup.ec.europa.eu/software/page/eupl
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the Licence is distributed on an "AS IS" basis,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the Licence for the specific language governing permissions and
 * limitations under the Licence.
 *
 */

exports.default = {
  nb: {
    text: {
      FILE_TRANSFER: 'Filoverføring',
      FILE_CLASSIFICATION: 'Filklassifisering',
      FILE_DELIVERY: 'Filleveranse',
      IMPORT: 'Import',
      EXPORT: 'GTFS-eksport',
      EXPORT_NETEX: 'NeTEx-eksport',
      VALIDATION_LEVEL_1: 'Validering nivå 1',
      DATASPACE_TRANSFER: 'Overføring sentral database',
      VALIDATION_LEVEL_2: 'Validering nivå 2',
      BUILD_GRAPH: 'Bygg av reisesøkforslag (otp1)',
      OTP2_BUILD_GRAPH: 'Bygg av reisesøkforslag (otp2)',
      UNKNOWN: 'Ukjent steg'
    },
    title: {
      FILE_TRANSFER: 'Overføring av fil fra lokal maskin til sentral server',
      IMPORT: 'Filvalidering og import i lokalt databaseområde nivå 1',
      EXPORT: 'Eksport av rutedata ',
      VALIDATION_LEVEL_1: 'Validering av komplett dataområde nivå 1',
      VALIDATION_LEVEL_2: 'Validering av komplett dataområde nivå 2',
      DATASPACE_TRANSFER: 'Overføring til sentralt databaseområde nivå 2',
      BUILD_GRAPH: 'Bygg av reisesøkforslag (otp1)',
      OTP2_BUILD_GRAPH: 'Bygg av reisesøkforslag (otp2)',
      UNKNOWN: 'Dette steget er ukjent'
    },
    filename: {
      undefined: 'Validering'
    },
    states: {
      OK: 'Fullført',
      PENDING: 'Venter',
      STARTED: 'Påbegynt',
      FAILED: 'Feil',
      DUPLICATE: 'Feil - duplikat datasett',
      IGNORED: 'Ikke gjennomført',
      CANCELLED: 'Kansellert',
      TIMEOUT: 'Tidsavbrudd'
    },
    errorMessage: {
      FILE_TRANSFER: 'Filoverføring feilet',
      FILE_CLASSIFICATION: 'Filklassifisering feilet'
    },
    errorCode: {
      ERROR_FILE_UNKNOWN_FILE_EXTENSION: 'Filendelsen er hverken .zip eller .ZIP',
      ERROR_FILE_NOT_A_ZIP_FILE: 'Filen er ikke et zip arkiv',
      ERROR_FILE_UNKNOWN_FILE_TYPE: 'Filen er hverken NeTEx eller GTFS',
      ERROR_FILE_ZIP_CONTAINS_SUB_DIRECTORIES: 'Arkivet inneholder underkataloger',
      ERROR_FILE_INVALID_ZIP_ENTRY_ENCODING: 'Arkivet inneholder filnavn som ikke er gyldig UTF8',
      ERROR_FILE_INVALID_XML_ENCODING_ERROR: 'Arkivet inneholder XML-filer med ugyldig tegnsett',
      ERROR_FILE_INVALID_XML_CONTENT: 'Arkivet inneholder ugyldige XML-filer',
      ERROR_NETEX_EXPORT_EMPTY_EXPORT: 'Det eksporterte datasettet er tomt (fant ingen aktive tidtabelldata)',
      ERROR_VALIDATION_NO_DATA: 'Det finnes ingen data å validere. Statusen for siste import bør kontrolleres'
    },
    filterButton: {
      ALL_TIME: 'Ubegrenset',
      LAST_12_HOURS: 'Siste 12 timene',
      LAST_24_HOURS: 'Siste døgn',
      LAST_WEEK: 'Siste uke',
      LAST_MONTH: 'Siste måned'
    }
  },
  en: {
    text: {
      FILE_TRANSFER: 'File transfer',
      FILE_CLASSIFICATION: 'File classification',
      FILE_DELIVERY: 'File delivery',
      IMPORT: 'Import',
      EXPORT: 'GTFS export',
      EXPORT_NETEX: 'NeTEx export',
      VALIDATION_LEVEL_1: 'Validation level 1',
      DATASPACE_TRANSFER: 'Transfer to central space',
      VALIDATION_LEVEL_2: 'Validation level 2',
      BUILD_GRAPH: 'Build graph (otp1)',
      OTP2_BUILD_GRAPH: 'Build graph (otp2)',
      UNKNOWN: 'Uknown step'
    },
    title: {
      FILE_TRANSFER: 'Upload local file to remote server',
      IMPORT: 'File validation and import in local data space - level 1',
      EXPORT: 'Export of route data ',
      VALIDATION_LEVEL_1: 'Validation of complete data space - level 1',
      VALIDATION_LEVEL_2: 'Validation of complete data space - level 2',
      DATASPACE_TRANSFER: 'Transfer to central dataspace - level 2',
      BUILD_GRAPH: 'Build graph (otp1)',
      OTP2_BUILD_GRAPH: 'Build graph (otp2)',
      UNKNOWN: 'This step is uknown'
    },
    filename: {
      undefined: 'Validation'
    },
    states: {
      OK: 'Completed',
      PENDING: 'Pending',
      STARTED: 'Started',
      FAILED: 'Failed',
      DUPLICATE: 'Failed - duplicate data set',
      IGNORED: 'Skipped',
      CANCELLED: 'Cancelled',
      TIMEOUT: 'Timeout'
    },
    errorMessage: {
      FILE_TRANSFER: 'Failed to transfer file',
      FILE_CLASSIFICATION: 'Failed on file classification'
    },
    errorCode: {
      ERROR_FILE_UNKNOWN_FILE_EXTENSION: 'The file extension is neither .zip nor .ZIP',
      ERROR_FILE_NOT_A_ZIP_FILE: 'The file is not a zip archive',
      ERROR_FILE_UNKNOWN_FILE_TYPE: 'The file is neither a NeTEx archive nor a GTFS archive',
      ERROR_FILE_ZIP_CONTAINS_SUB_DIRECTORIES: 'The archive contains sub-directories',
      ERROR_FILE_INVALID_ZIP_ENTRY_ENCODING: 'The archive contains file names that are not UTF8-encoded',
      ERROR_FILE_INVALID_XML_ENCODING_ERROR: 'The archive contains XML files with an invalid encoding',
      ERROR_FILE_INVALID_XML_CONTENT: 'The archive contains invalid XML files',
      ERROR_NETEX_EXPORT_EMPTY_EXPORT: 'The exported dataset is empty (no active timetable data found)',
      ERROR_VALIDATION_NO_DATA: 'There is no data to validate. Check the status of the latest data import'

    },
    filterButton: {
      ALL_TIME: 'Unlimited',
      LAST_12_HOURS: 'Last 12 hours',
      LAST_24_HOURS: 'Last 24 hours',
      LAST_WEEK: 'Last week',
      LAST_MONTH: 'Last month'
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var buttonConfig = {
  fields: [{
    id: 'LAST_12_HOURS'
  }, {
    id: 'LAST_24_HOURS'
  }, {
    id: 'LAST_WEEK'
  }, {
    id: 'LAST_MONTH'
  }, {
    id: 'ALL_TIME'
  }]
};

var getLastValidDate = exports.getLastValidDate = function getLastValidDate(id) {
  switch (id) {
    case 'ALL_TIME':
      return null;
    case 'LAST_MONTH':
      {
        var now = new Date();
        return new Date(now.setMonth(now.getMonth() - 1));
      }
    case 'LAST_WEEK':
      {
        var _now = new Date();
        return new Date(_now.setDate(_now.getDate() - 7));
      }
    case 'LAST_12_HOURS':
      {
        var _now2 = new Date();
        return new Date(_now2.setHours(_now2.getHours() - 12));
      }
    case 'LAST_24_HOURS':
      {
        var _now3 = new Date();
        return new Date(_now3.setDate(_now3.getDate() - 1));
      }
  }
};

exports.default = buttonConfig;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  "en": {
    page: 'Page: ',
    no_status: 'No result with applied filter',
    started: 'Started',
    ended: 'Ended',
    duration: 'Duration: ',
    username: 'Username: ',
    show_all: 'Show all',
    show_only_failed: 'Show only failed',
    show_only_success: 'Show only successful',
    show_only_cancelled: "Show only cancelled",
    filter_direct_delivery: "Only started with file delivery"
  },
  "nb": {
    page: 'Side: ',
    no_status: 'Ingen resultater med valgt filter',
    started: 'Begynte',
    ended: 'Avsluttet',
    duration: 'Varighet',
    username: 'Brukernavn: ',
    show_all: 'Vis alle',
    show_only_failed: 'Vis kun feilet',
    show_only_success: 'Vis kun vellykket',
    show_only_cancelled: "Vis kun kansellerte",
    filter_direct_delivery: "Kun startet ved filleveranse"
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(34);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventDetails = exports.HeaderTimeline = exports.Timeline = undefined;

var _Timeline2 = __webpack_require__(19);

var _Timeline3 = _interopRequireDefault(_Timeline2);

var _HeaderTimeline2 = __webpack_require__(18);

var _HeaderTimeline3 = _interopRequireDefault(_HeaderTimeline2);

var _EventDetails2 = __webpack_require__(13);

var _EventDetails3 = _interopRequireDefault(_EventDetails2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Timeline = _Timeline3.default;
exports.HeaderTimeline = _HeaderTimeline3.default;
exports.EventDetails = _EventDetails3.default;

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChouetteLink = function ChouetteLink(_ref) {
  var action = _ref.action,
      id = _ref.id,
      referential = _ref.referential,
      children = _ref.children;

  var baseURL = window.config.chouetteBaseUrl + "referentials/";

  var actionMap = {
    importer: "imports/" + id + "/compliance_check",
    exporter: "exports/" + id + "/compliance_check",
    validator: "compliance_checks/" + id + "/report"
  };
  var URL = "" + baseURL + referential + "/" + actionMap[action];

  return _react2.default.createElement(
    "a",
    { title: URL, target: "_blank", href: URL },
    children
  );
};

exports.default = ChouetteLink;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ChouetteLink = __webpack_require__(11);

var _ChouetteLink2 = _interopRequireDefault(_ChouetteLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlledChouetteLink = function ControlledChouetteLink(_ref) {
  var events = _ref.events,
      includeLevel2 = _ref.includeLevel2,
      children = _ref.children;

  var supportedActions = ['IMPORT', 'VALIDATION_LEVEL_1'];

  var chouetteMap = {
    IMPORT: 'importer',
    VALIDATION_LEVEL_1: 'validator'
  };

  if (includeLevel2) {
    supportedActions.push('VALIDATION_LEVEL_2');
    supportedActions.push('EXPORT');
    supportedActions.push('EXPORT_NETEX');
    chouetteMap['VALIDATION_LEVEL_2'] = 'validator';
    chouetteMap['EXPORT'] = 'exporter';
    chouetteMap['EXPORT_NETEX'] = 'exporter';
  }

  if (events.states && events.states.length) {
    var endState = events.states[events.states.length - 1];
    if (supportedActions.indexOf(endState.action) > -1 && endState.chouetteJobId) {
      return _react2.default.createElement(
        _ChouetteLink2.default,
        {
          action: chouetteMap[endState.action],
          id: endState.chouetteJobId,
          referential: endState.referential
        },
        children
      );
    }
  }

  return _react2.default.createElement(
    'div',
    null,
    ' ',
    children,
    ' '
  );
};

exports.default = ControlledChouetteLink;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EventStepper = __webpack_require__(15);

var _EventStepper2 = _interopRequireDefault(_EventStepper);

__webpack_require__(35);

var _refresh = __webpack_require__(28);

var _refresh2 = _interopRequireDefault(_refresh);

var _translations = __webpack_require__(6);

var _translations2 = _interopRequireDefault(_translations);

var _FilterButtonTray = __webpack_require__(17);

var _FilterButtonTray2 = _interopRequireDefault(_FilterButtonTray);

var _buttonConfig = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventDetails = function (_React$Component) {
  _inherits(EventDetails, _React$Component);

  function EventDetails(props) {
    _classCallCheck(this, EventDetails);

    var _this = _possibleConstructorReturn(this, (EventDetails.__proto__ || Object.getPrototypeOf(EventDetails)).call(this, props));

    _this.state = {
      activePageIndex: 0,
      endStateFilter: 'ALL',
      dateFilter: props.showDateFilter ? 'LAST_12_HOURS' : 'ALL_TIME',
      onlyNewDeliveryFilter: false
    };
    return _this;
  }

  _createClass(EventDetails, [{
    key: 'handlePageClick',
    value: function handlePageClick(e, pageIndex) {
      e.preventDefault();
      this.setState({
        activePageIndex: pageIndex
      });
    }
  }, {
    key: 'handleFilterChange',
    value: function handleFilterChange(dateFilter) {
      this.setState({
        dateFilter: dateFilter,
        activePageIndex: 0
      });
    }
  }, {
    key: 'getFilteredSource',
    value: function getFilteredSource(dataSource, dateFilter, endStateFilter, onlyNewDeliveryFilter) {
      var lastDate = (0, _buttonConfig.getLastValidDate)(dateFilter);

      return (dataSource || []).filter(function (event) {
        var appliedFilter = [];

        /* Filter by date from pre-defined periods */
        if (lastDate) {
          var filterByPeriod = new Date(event.firstEvent) > lastDate;
          appliedFilter.push(filterByPeriod);
        }

        /* Filter by end state from dropdown */
        var endStateFilterApplied = endStateFilter === 'FAILED' || endStateFilter === 'OK' || endStateFilter === 'CANCELLED';

        if (endStateFilterApplied) {
          var filterByEndState = event.endState === endStateFilter;
          appliedFilter.push(filterByEndState);
        }

        /* Filter by only new deliveries */
        var containsEvents = Array.isArray(event.events) && event.events.length;

        if (containsEvents && onlyNewDeliveryFilter) {
          var filterByNewDelivery = event.events[0].action === 'FILE_TRANSFER';
          appliedFilter.push(filterByNewDelivery);
        }

        return appliedFilter.every(function (filter) {
          return filter;
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          dataSource = _props.dataSource,
          locale = _props.locale,
          includeLevel2 = _props.includeLevel2,
          showDateFilter = _props.showDateFilter,
          showNewDeliveriesFilter = _props.showNewDeliveriesFilter;
      var _state = this.state,
          activePageIndex = _state.activePageIndex,
          endStateFilter = _state.endStateFilter,
          dateFilter = _state.dateFilter,
          onlyNewDeliveryFilter = _state.onlyNewDeliveryFilter;


      var filteredSource = this.getFilteredSource(dataSource, dateFilter, endStateFilter, onlyNewDeliveryFilter);
      var paginationMap = getPaginationMap(filteredSource);

      var filters = _react2.default.createElement(
        'div',
        { style: { display: 'flex', alignItems: 'center' } },
        _react2.default.createElement(
          'select',
          {
            style: { fontSize: '0.9em' },
            value: endStateFilter,
            onChange: function onChange(e) {
              e.preventDefault();
              _this2.setState({
                endStateFilter: e.target.value,
                activePageIndex: 0
              });
            }
          },
          _react2.default.createElement(
            'option',
            { value: 'ALL' },
            _translations2.default[locale].show_all
          ),
          _react2.default.createElement(
            'option',
            { value: 'OK' },
            _translations2.default[locale].show_only_success
          ),
          _react2.default.createElement(
            'option',
            { value: 'CANCELLED' },
            _translations2.default[locale].show_only_cancelled
          ),
          _react2.default.createElement(
            'option',
            { value: 'FAILED' },
            _translations2.default[locale].show_only_failed
          )
        ),
        showDateFilter && _react2.default.createElement(_FilterButtonTray2.default, {
          locale: locale,
          style: { marginLeft: 20 },
          activeButtonId: this.state.dateFilter,
          onChange: this.handleFilterChange.bind(this)
        }),
        showNewDeliveriesFilter && _react2.default.createElement(
          'div',
          { style: { marginLeft: 10, paddingTop: 2 } },
          _react2.default.createElement('input', {
            type: 'checkbox',
            id: 'direct_delivery',
            name: 'direct_delivery',
            checked: onlyNewDeliveryFilter,
            style: { margin: '0 10px' },
            onChange: function onChange(e) {
              _this2.setState({
                onlyNewDeliveryFilter: e.target.checked,
                activePageIndex: 0
              });
            }
          }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'direct_delivery' },
            _translations2.default[locale].filter_direct_delivery
          )
        )
      );

      var page = paginationMap[activePageIndex];

      var refreshButton = this.props.handleRefresh && _react2.default.createElement(
        'div',
        { style: { marginRight: 15, float: 'right', cursor: 'pointer' } },
        _react2.default.createElement(_refresh2.default, {
          style: { transform: 'scale(1.5)' },
          onClick: this.props.handleRefresh
        })
      );

      if (page && page.length && paginationMap) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { style: { width: '100%', textAlign: 'left', marginBottom: 5 } },
            filters
          ),
          refreshButton,
          _react2.default.createElement(
            'div',
            { className: 'page-link-parent' },
            _react2.default.createElement(
              'span',
              null,
              _translations2.default[locale].page
            ),
            paginationMap.map(function (page, index) {
              var isActive = index == activePageIndex ? 'page-link active-link' : 'page-link inactive-link';
              return _react2.default.createElement(
                'span',
                {
                  className: isActive,
                  onClick: function onClick(e) {
                    return _this2.handlePageClick(e, index);
                  },
                  key: 'link-' + index
                },
                index + 1
              );
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            page.map(function (listItem, index) {
              var eventGroup = {};

              listItem.events.forEach(function (event) {
                if (!eventGroup[event.action]) {
                  eventGroup[event.action] = {};
                  eventGroup[event.action].states = [];
                }
                eventGroup[event.action].states.push(event);
                eventGroup[event.action].endState = event.state;
              });

              return _react2.default.createElement(
                'div',
                {
                  key: 'jobstatus-' + listItem.chouetteJobId + '-' + index,
                  style: {
                    marginBottom: 20,
                    border: '1px solid #eee',
                    padding: 10
                  }
                },
                _react2.default.createElement(_EventStepper2.default, {
                  includeLevel2: includeLevel2,
                  locale: locale,
                  key: 'event-group-' + listItem.chouetteJobId + '-' + index,
                  groups: eventGroup,
                  listItem: listItem
                })
              );
            })
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { style: { width: '100%', textAlign: 'left', marginBottom: 5 } },
          filters,
          _react2.default.createElement(
            'div',
            {
              style: {
                marginBottom: 20,
                marginTop: 20,
                border: '1px solid #eee',
                padding: 40
              }
            },
            _react2.default.createElement(
              'div',
              { style: { fontWeight: 600 } },
              _translations2.default[locale].no_status
            ),
            _react2.default.createElement(
              'div',
              { style: { marginLeft: 10 } },
              refreshButton
            )
          )
        );
      }
    }
  }]);

  return EventDetails;
}(_react2.default.Component);

var getPaginationMap = function getPaginationMap() {
  var statusList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var paginationMap = [];

  if (statusList && statusList.length) {
    for (var i = 0, j = statusList.length; i < j; i += 10) {
      paginationMap.push(statusList.slice(i, i + 10));
    }
  }
  return paginationMap;
};

exports.default = EventDetails;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _error = __webpack_require__(30);

var _error2 = _interopRequireDefault(_error);

var _checkCircle = __webpack_require__(29);

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _schedule = __webpack_require__(33);

var _schedule2 = _interopRequireDefault(_schedule);

var _cog = __webpack_require__(27);

var _cog2 = _interopRequireDefault(_cog);

var _helpOutline = __webpack_require__(31);

var _helpOutline2 = _interopRequireDefault(_helpOutline);

var _hourglassEmpty = __webpack_require__(32);

var _hourglassEmpty2 = _interopRequireDefault(_hourglassEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventStatusIcon = function (_Component) {
  _inherits(EventStatusIcon, _Component);

  function EventStatusIcon() {
    _classCallCheck(this, EventStatusIcon);

    return _possibleConstructorReturn(this, (EventStatusIcon.__proto__ || Object.getPrototypeOf(EventStatusIcon)).apply(this, arguments));
  }

  _createClass(EventStatusIcon, [{
    key: 'render',
    value: function render() {
      switch (this.props.state) {
        case 'OK':
          return _react2.default.createElement(_checkCircle2.default, {
            style: { color: 'green', width: 24, height: 22, marginTop: -2 }
          });
        case 'PENDING':
          return _react2.default.createElement(_hourglassEmpty2.default, {
            style: { color: 'orange', width: 24, height: 22, marginTop: -2 }
          });
        case 'STARTED':
          return _react2.default.createElement(_cog2.default, {
            style: { color: '#2274b5', width: 24, height: 22, marginTop: -2 }
          });
        case 'FAILED':
          return _react2.default.createElement(_error2.default, {
            style: { color: 'red', width: 24, height: 22, marginTop: -2 }
          });
        case 'CANCELLED':
          return _react2.default.createElement(_error2.default, {
            style: { color: 'orange', width: 24, height: 22, marginTop: -2 }
          });
        case 'DUPLICATE':
          return _react2.default.createElement(_error2.default, {
            style: { color: 'red', width: 24, height: 22, marginTop: -2 }
          });
        case 'IGNORED':
          return _react2.default.createElement(_schedule2.default, {
            style: { color: 'black', width: 24, height: 22, marginTop: -2 }
          });

        case 'TIMEOUT':
          return _react2.default.createElement(_schedule2.default, {
            style: { color: 'red', width: 24, height: 22, marginTop: -2 }
          });
      }
      return _react2.default.createElement(_helpOutline2.default, { style: { color: 'grey', width: 24, height: 22 } });
    }
  }]);

  return EventStatusIcon;
}(_react.Component);

exports.default = EventStatusIcon;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actionTranslations = __webpack_require__(4);

var _actionTranslations2 = _interopRequireDefault(_actionTranslations);

var _chevronDown = __webpack_require__(25);

var _chevronDown2 = _interopRequireDefault(_chevronDown);

var _chevronUp = __webpack_require__(26);

var _chevronUp2 = _interopRequireDefault(_chevronUp);

var _ControlledChouetteLink = __webpack_require__(12);

var _ControlledChouetteLink2 = _interopRequireDefault(_ControlledChouetteLink);

var _translations = __webpack_require__(6);

var _translations2 = _interopRequireDefault(_translations);

var _EventStatusIcon = __webpack_require__(14);

var _EventStatusIcon2 = _interopRequireDefault(_EventStatusIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventStepper = function (_React$Component) {
  _inherits(EventStepper, _React$Component);

  function EventStepper(props) {
    _classCallCheck(this, EventStepper);

    var _this = _possibleConstructorReturn(this, (EventStepper.__proto__ || Object.getPrototypeOf(EventStepper)).call(this, props));

    _this.state = {
      expanded: false
    };
    return _this;
  }

  _createClass(EventStepper, [{
    key: 'eventStates',
    value: function eventStates() {
      return ['FILE_TRANSFER', 'FILE_CLASSIFICATION', 'FILE_DELIVERY', 'IMPORT', 'VALIDATION_LEVEL_1', 'DATASPACE_TRANSFER', 'VALIDATION_LEVEL_2', 'EXPORT', 'BUILD_GRAPH', 'OTP2_BUILD_GRAPH', 'EXPORT_NETEX'];
    }
  }, {
    key: 'addUnlistedStates',
    value: function addUnlistedStates(groups) {
      var states = this.eventStates();

      var groupsWithUnlisted = Object.assign({}, groups);

      var firstStateFound = false;

      states.forEach(function (state) {
        if (!groupsWithUnlisted[state]) {
          groupsWithUnlisted[state] = {
            endState: 'IGNORED',
            missingBeforeStartStart: !firstStateFound
          };
        } else {
          firstStateFound = true;
        }
      });

      var finalGroups = {};

      Object.keys(groupsWithUnlisted).sort(function (key1, key2) {
        return states.indexOf(key1) - states.indexOf(key2);
      }).forEach(function (key) {
        finalGroups[key] = groupsWithUnlisted[key];
      });
      return finalGroups;
    }
  }, {
    key: 'handleToggleVisibility',
    value: function handleToggleVisibility() {
      this.setState({
        expanded: !this.state.expanded
      });
    }
  }, {
    key: 'createCombinedSplit',
    value: function createCombinedSplit(formattedGroups, groups, name) {
      var combined = [];
      for (var i in groups) {
        var group = groups[i];
        combined[group] = formattedGroups[group];

        if (name !== group) {
          delete formattedGroups[group];
        }
      }
      formattedGroups[name] = combined;
    }
  }, {
    key: 'aggreggateFileEvents',
    value: function aggreggateFileEvents(data) {
      var groups = _extends({}, data);
      var endState = null;
      var errorOn = null;
      Object.keys(groups).forEach(function (group) {
        if (group === 'FILE_CLASSIFICATION' || group === 'FILE_TRANSFER') {
          endState = groups[group].endState;

          if (endState === 'FAILED' || endState === 'DUPLICATE') {
            errorOn = group;
          }
          delete groups[group];
        }
      });

      if (endState !== null) {
        groups.FILE_DELIVERY = {
          endState: errorOn ? 'FAILED' : endState,
          errorOn: errorOn,
          missingBeforeStartStart: endState == 'IGNORED' && !errorOn
        };
      }
      return groups;
    }
  }, {
    key: 'bullet',
    value: function bullet(formattedGroups, groups, locale, includeLevel2) {
      var _this2 = this;

      var columnStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 45
      };

      return Object.keys(formattedGroups).map(function (group, index) {
        var column = void 0;
        var event = formattedGroups[group];

        if (Array.isArray(event)) {
          column = Object.keys(event).map(function (key, i) {
            return _this2.renderEvent(event[key], event, key, i, false, i, locale, includeLevel2);
          });
        } else {
          column = _this2.renderEvent(event, groups, group, index, index === 0, 0, locale, includeLevel2);
        }
        return _react2.default.createElement(
          'div',
          { key: 'bullet-' + index, style: columnStyle },
          column
        );
      });
    }
  }, {
    key: 'renderEvent',
    value: function renderEvent(event, groups, group, index, isFirst) {
      var columnIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var locale = arguments[6];
      var includeLevel2 = arguments[7];

      var groupStyle = {
        display: 'flex',
        flexDirection: 'row'
      };

      var groupText = {
        fontSize: '0.9em',
        marginLeft: 5
      };

      var linkStyle = {
        display: 'block',
        borderColor: 'rgb(189, 189, 189)',
        marginLeft: -6,
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        width: 30,
        borderRadius: 30,
        margin: 8,
        transform: columnIndex > 0 && 'translateY(-0.5em) rotate(25deg) '
      };

      if (!_actionTranslations2.default[locale].states[event.endState]) return null;

      var toolTipText = _actionTranslations2.default[locale].states[event.endState];

      if (event.states && event.states[groups[group].states.length - 1]) {
        toolTipText += ' ' + event.states[event.states.length - 1].date;
      }

      if (event.errorOn) {
        toolTipText = _actionTranslations2.default[locale].errorMessage[event.errorOn];
      }

      return _react2.default.createElement(
        'div',
        { style: groupStyle, key: 'group-' + group + index },
        !isFirst && _react2.default.createElement('div', { style: linkStyle }),
        _react2.default.createElement(
          'div',
          {
            title: toolTipText,
            style: { opacity: event.missingBeforeStartStart ? 0.2 : 1 }
          },
          _react2.default.createElement(_EventStatusIcon2.default, { state: event.endState })
        ),
        _react2.default.createElement(
          'div',
          {
            style: _extends({}, groupText, {
              opacity: event.missingBeforeStartStart ? 0.2 : 1
            })
          },
          _react2.default.createElement(
            _ControlledChouetteLink2.default,
            { includeLevel2: includeLevel2, events: event },
            _actionTranslations2.default[locale].text[group]
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var stepperstyle = {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
      };

      var _props = this.props,
          groups = _props.groups,
          listItem = _props.listItem,
          locale = _props.locale,
          includeLevel2 = _props.includeLevel2;
      var expanded = this.state.expanded;


      var formattedGroups = this.addUnlistedStates(groups);
      formattedGroups = this.aggreggateFileEvents(formattedGroups);
      this.createCombinedSplit(formattedGroups, ['EXPORT_NETEX', 'EXPORT'], 'EXPORT');

      this.createCombinedSplit(formattedGroups, ['BUILD_GRAPH', 'OTP2_BUILD_GRAPH'], 'BUILD_GRAPH');

      var bullets = this.bullet(formattedGroups, groups, locale, includeLevel2);

      return _react2.default.createElement(
        'div',
        {
          key: 'event' + listItem.chouetteJobId,
          style: { margin: 'auto', width: '98%', cursor: 'pointer' },
          onClick: function onClick() {
            return _this3.handleToggleVisibility();
          }
        },
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', marginLeft: -15 } },
          _react2.default.createElement(
            'div',
            {
              title: _translations2.default[locale].duration + listItem.duration,
              style: {
                fontSize: '0.9em',
                fontWeight: 600,
                color: '#e59400',
                marginTop: -8,
                marginRight: 20
              }
            },
            listItem.started
          ),
          listItem.provider && listItem.provider.name && _react2.default.createElement(
            'div',
            { style: { fontSize: '0.8em', fontWeight: 600, flex: 1 } },
            listItem.provider.name
          ),
          _react2.default.createElement(
            'div',
            { style: { fontSize: '0.9em', fontWeight: 600, flex: 2 } },
            listItem.fileName || _actionTranslations2.default[locale].filename.undefined
          )
        ),
        _react2.default.createElement(
          'div',
          { style: stepperstyle },
          bullets,
          _react2.default.createElement(
            'div',
            {
              style: { marginLeft: 'auto', marginRight: 20, marginTop: -50 },
              onClick: function onClick() {
                return _this3.handleToggleVisibility();
              }
            },
            !expanded ? _react2.default.createElement(_chevronDown2.default, null) : _react2.default.createElement(_chevronUp2.default, null)
          )
        ),
        expanded && _react2.default.createElement(
          'div',
          {
            style: {
              display: 'flex',
              padding: 8,
              flexDirection: 'column',
              marginTop: 10,
              cursor: 'default'
            },
            onClick: function onClick(event) {
              return event.stopPropagation();
            }
          },
          listItem.errorCode && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { style: { fontWeight: 600, marginRight: 10, color: 'red' } },
              _actionTranslations2.default[locale].errorCode[listItem.errorCode]
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { style: { fontWeight: 600, marginRight: 10 } },
              _translations2.default[locale].started
            ),
            listItem.firstEvent
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { style: { fontWeight: 600, marginRight: 10 } },
              _translations2.default[locale].ended
            ),
            listItem.lastEvent
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { style: { fontWeight: 600, marginRight: 10 } },
              _translations2.default[locale].duration
            ),
            listItem.duration
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { style: { fontWeight: 600, marginRight: 10 } },
              _translations2.default[locale].username
            ),
            listItem.username
          )
        )
      );
    }
  }]);

  return EventStepper;
}(_react2.default.Component);

EventStepper.propTypes = {
  groups: _propTypes2.default.object.isRequired,
  listItem: _propTypes2.default.object.isRequired
};
exports.default = EventStepper;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterButton = function (_Component) {
  _inherits(FilterButton, _Component);

  function FilterButton() {
    _classCallCheck(this, FilterButton);

    return _possibleConstructorReturn(this, (FilterButton.__proto__ || Object.getPrototypeOf(FilterButton)).apply(this, arguments));
  }

  _createClass(FilterButton, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          handleClick = _props.handleClick,
          id = _props.id;

      if (handleClick && typeof handleClick === 'function') {
        handleClick(id);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          label = _props2.label,
          active = _props2.active;

      var activeStyle = {
        background: '#2196F3',
        color: '#fff',
        border: '1px solid #15599d'
      };
      var inactiveStyle = {
        background: '#fff',
        color: '#000',
        border: '1px solid #d8d8d8'
      };
      var defaultStyle = {
        padding: '0.2em 0.4em',
        fontSize: '0.9em',
        cursor: 'pointer',
        borderRadius: '5%',
        minWidth: 40,
        marginLeft: 10
      };

      var buttonStyle = Object.assign(defaultStyle, active ? activeStyle : inactiveStyle);

      return _react2.default.createElement(
        'button',
        { style: buttonStyle, onClick: function onClick() {
            return _this2.handleClick();
          } },
        _react2.default.createElement(
          'div',
          { style: { pointerEvents: 'none', textAlign: 'center' } },
          label
        )
      );
    }
  }]);

  return FilterButton;
}(_react.Component);

exports.default = FilterButton;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FilterButton = __webpack_require__(16);

var _FilterButton2 = _interopRequireDefault(_FilterButton);

var _buttonConfig = __webpack_require__(5);

var _buttonConfig2 = _interopRequireDefault(_buttonConfig);

var _actionTranslations = __webpack_require__(4);

var _actionTranslations2 = _interopRequireDefault(_actionTranslations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterButtonTray = function (_Component) {
  _inherits(FilterButtonTray, _Component);

  function FilterButtonTray() {
    _classCallCheck(this, FilterButtonTray);

    return _possibleConstructorReturn(this, (FilterButtonTray.__proto__ || Object.getPrototypeOf(FilterButtonTray)).apply(this, arguments));
  }

  _createClass(FilterButtonTray, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          locale = _props.locale,
          activeButtonId = _props.activeButtonId,
          onChange = _props.onChange;


      return _react2.default.createElement(
        'div',
        { style: this.props.style },
        _buttonConfig2.default.fields.map(function (field) {
          return _react2.default.createElement(_FilterButton2.default, {
            active: activeButtonId === field.id,
            id: field.id,
            handleClick: function handleClick() {
              onChange(field.id);
            },
            key: 'filter-button-' + field.id,
            label: _actionTranslations2.default[locale].filterButton[field.id]
          });
        })
      );
    }
  }]);

  return FilterButtonTray;
}(_react.Component);

exports.default = FilterButtonTray;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(2);

var _HeaderTimeline = __webpack_require__(36);

var _HeaderTimeline2 = _interopRequireDefault(_HeaderTimeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderTimeline = function (_React$Component) {
  _inherits(HeaderTimeline, _React$Component);

  function HeaderTimeline(props) {
    _classCallCheck(this, HeaderTimeline);

    var _this = _possibleConstructorReturn(this, (HeaderTimeline.__proto__ || Object.getPrototypeOf(HeaderTimeline)).call(this, props));

    _this.state = {
      showTooltip: false
    };
    return _this;
  }

  _createClass(HeaderTimeline, [{
    key: 'handleToggleToolTip',
    value: function handleToggleToolTip() {
      this.setState({
        showTooltip: !this.state.showTooltip
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          effectivePeriods = _props.effectivePeriods,
          validDaysOffset = _props.validDaysOffset;


      var timelineStyle = {
        border: '1px solid black',
        borderRadius: 5,
        height: '18px',
        lineHeight: '18px',
        width: _styles.dimension.timeLineWidth + '%',
        margin: '10px auto',
        display: 'block',
        overflow: 'hidden',
        fontSize: '0%',
        position: 'relative'
      };

      var timelineWrapper = {
        width: '100%',
        marginBottom: 2
      };

      var timeBlock = {
        background: _styles.color.timeLineSuccess,
        height: 'auto',
        cursor: 'pointer',
        fontWeight: 500,
        fontSize: '0.8rem',
        textAlign: 'center',
        display: 'inline-block'
      };

      var titleText = {
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        transform: 'translate(10px, 20px)',
        fontSize: '1.2em',
        color: effectivePeriods.length ? _styles.color.effective : _styles.color.fail,
        zIndex: 99
      };

      var toolTipStyle = {
        position: 'relative',
        transition: 'opacity 1s',
        display: 'inline',
        fontSize: '0.8em',
        color: _styles.color.font.tooltip,
        background: _styles.color.tooltip,
        padding: 10,
        width: 'auto',
        zIndex: 99
      };

      var textStyle = {
        color: _styles.color.font.inverse,
        textShadow: '0px 0px 5px black',
        fontSize: '12px',
        height: 18,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      };

      var hrStyle = {
        background: 'black',
        width: '1px',
        height: '18px',
        position: 'absolute',
        marginLeft: 33 + validDaysOffset + '%'
      };

      var hoverText = effectivePeriods.length ? this.props.hoverText : 'Ugyldig linje. Mangler data';

      return _react2.default.createElement(
        'div',
        { style: timelineWrapper },
        _react2.default.createElement(
          'div',
          {
            style: titleText,
            onMouseOver: this.handleToggleToolTip.bind(this),
            onMouseLeave: this.handleToggleToolTip.bind(this)
          },
          this.props.line,
          this.state.showTooltip && _react2.default.createElement(
            'div',
            { style: toolTipStyle },
            ' ',
            hoverText,
            ' '
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _HeaderTimeline2.default.timeline, style: timelineStyle },
          _react2.default.createElement(
            'div',
            { key: 'timeline-header-wrapper' + this.props.index },
            _react2.default.createElement('div', { style: hrStyle }),
            effectivePeriods.map(function (effectivePeriod, index) {
              var periodBlock = _extends({}, timeBlock);
              periodBlock.width = effectivePeriod.timelineEndPosition - effectivePeriod.timelineStartPosition + '%';

              if (index === 0) {
                periodBlock.marginLeft = effectivePeriod.timelineStartPosition + '%';
              } else {
                periodBlock.marginLeft = effectivePeriod.timelineStartPosition - effectivePeriods[index - 1].timelineEndPosition + '%';
              }

              var itemText = effectivePeriod.to;

              if (effectivePeriod.timelineStartPosition > 0 && effectivePeriod.from.localeCompare(effectivePeriod.to) !== 0) {
                itemText = effectivePeriod.from + ' - ' + effectivePeriod.to;
              }

              return _react2.default.createElement(
                'div',
                { key: 'timeline-header-block' + index, style: periodBlock },
                _react2.default.createElement(
                  'div',
                  { style: textStyle },
                  _react2.default.createElement(
                    'div',
                    {
                      className: 'period-block',
                      style: {
                        height: '100%',
                        color: _styles.color.font.inverse,
                        verticalAlign: 'middle'
                      },
                      title: itemText
                    },
                    itemText
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return HeaderTimeline;
}(_react2.default.Component);

HeaderTimeline.propTypes = {
  hoverText: _propTypes2.default.string.isRequired,
  index: _propTypes2.default.number.isRequired,
  validDaysOffset: _propTypes2.default.number.isRequired,
  validFromDate: _propTypes2.default.string.isRequired,
  effectivePeriods: _propTypes2.default.array.isRequired
};
exports.default = HeaderTimeline;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var period = _propTypes2.default.shape({
  from: _propTypes2.default.string.isRequired,
  to: _propTypes2.default.string.isRequired,
  timelineStartPosition: _propTypes2.default.number.isRequired,
  timelineEndPosition: _propTypes2.default.number.isRequired
});

var timetable = _propTypes2.default.shape({
  objectId: _propTypes2.default.string.isRequired,
  periods: _propTypes2.default.arrayOf(period).isRequired
}).isRequired;

var Timeline = function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline() {
    _classCallCheck(this, Timeline);

    return _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).apply(this, arguments));
  }

  _createClass(Timeline, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          timetables = _props.timetables,
          validDaysOffset = _props.validDaysOffset,
          isLast = _props.isLast;


      var timelineStyle = {
        border: '1px solid black',
        borderRadius: 5,
        background: _styles.color.timeLineBackground,
        width: _styles.dimension.timeLineWidth + '%',
        margin: 'auto',
        display: 'block',
        overflowY: 'auto',
        position: 'relative'
      };

      var timelineWrapper = {
        width: '100%',
        paddingBottom: isLast ? 0 : 10
      };

      var timeBlock = {
        background: _styles.color.timeLineBlockBackground,
        width: '100%',
        height: '100%',
        color: _styles.color.font.inverse,
        fontWeight: 500
      };

      var textStyle = {
        whiteSpace: 'nowrap',
        overflow: 'visble',
        textShadow: '0px 0px 5px black',
        textOverflow: 'ellipsis',
        display: 'block',
        margin: 'auto 10px',
        lineHeight: '18px',
        color: _styles.color.font.inverse,
        fontSize: '0.7em',
        fontWeight: 500
      };

      var hrStyle = {
        background: 'black',
        width: '1px',
        height: '100%',
        position: 'absolute'
      };

      hrStyle.marginLeft = 33 + validDaysOffset + '%';

      return _react2.default.createElement(
        'div',
        { style: timelineWrapper },
        _react2.default.createElement(
          'div',
          { style: timelineStyle },
          _react2.default.createElement('div', { style: hrStyle }),
          timetables.map(function (timetable) {
            return timetable.periods.map(function (period, index) {
              var title = timetable.objectId;
              var hover = title + ' \n(period: ' + period.from + ' -> ' + period.to + ')';
              var periodBlock = _extends({}, timeBlock);
              periodBlock.width = period.timelineEndPosition - period.timelineStartPosition + '%';
              periodBlock.marginLeft = period.timelineStartPosition + '%';
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  {
                    key: 'timetable-period-' + index,
                    style: periodBlock,
                    title: hover
                  },
                  _react2.default.createElement(
                    'div',
                    { style: textStyle },
                    title
                  )
                )
              );
            });
          })
        )
      );
    }
  }]);

  return Timeline;
}(_react2.default.Component);

Timeline.propTypes = {
  timetables: _propTypes2.default.arrayOf(timetable).isRequired,
  isLast: _propTypes2.default.bool.isRequired,
  validDaysOffset: _propTypes2.default.number.isRequired
};
exports.default = Timeline;

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports
exports.push([module.i, "@import url(//fonts.googleapis.com/earlyaccess/notosanskannada.css);", ""]);

// module
exports.push([module.i, "body {\n    font-family: 'Noto Sans Kannada', sans-serif;\n    color: #191919;\n}\n\np,h1,h2,h3,h4,h5, span {\n    color: #191919;\n}\n\n._2pOZT6OEwR2v_ci72W4koB:after {\n    content: \"\";\n    height: 18px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.mSGKVlmcWESbxEHr7Baz2 {\n    display: block;\n    margin-bottom: 20px;\n}\n\n._1h9AG-VWx_U40TxVE0155K {\n    display: inline-block;\n    cursor: pointer;\n    margin-left: 5px;\n    margin-top: 3px;\n    font-size: 0.9em;\n}\n\n._1jN-N7yfSKYh1KUzras4lZ {\n    color: #0D3C61;\n    text-decoration: underline;\n}\n\n._21p55VM_e75_2iBirW1Mkf {\n    color: #2196F3;\n}\n\n\na {\n    color: #2196F3;\n    text-decoration: none;\n}\n\na:hover, a:focus {\n    color: #1976D2;\n}", ""]);

// exports
exports.locals = {
	"period-block": "_2pOZT6OEwR2v_ci72W4koB",
	"page-link-parent": "mSGKVlmcWESbxEHr7Baz2",
	"page-link": "_1h9AG-VWx_U40TxVE0155K",
	"active-link": "_1jN-N7yfSKYh1KUzras4lZ",
	"inactive-link": "_21p55VM_e75_2iBirW1Mkf"
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n._2tU-f86f_42g1pVVQZXFXC {\n  background: #B91919;\n  background: -moz-linear-gradient(left, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #B91919), color-stop(66%, #B91919), color-stop(66%, #f6f6f6), color-stop(100%, #f6f6f6));\n  background: -webkit-linear-gradient(left, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: -o-linear-gradient(left, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: -ms-linear-gradient(left, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: linear-gradient(to right, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #B91919), color-stop(66%, #B91919), color-stop(66%, #f6f6f6), color-stop(100%, #f6f6f6));\n}\n", ""]);

// exports
exports.locals = {
	"timeline": "_2tU-f86f_42g1pVVQZXFXC"
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(24);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaChevronDown = function FaChevronDown(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm37.6 18l-16.6 16.6q-0.4 0.4-1 0.4t-1-0.4l-16.6-16.6q-0.4-0.4-0.4-1t0.4-1l3.7-3.7q0.5-0.4 1-0.4t1 0.4l11.9 11.9 11.9-11.9q0.4-0.4 1-0.4t1 0.4l3.7 3.7q0.4 0.4 0.4 1t-0.4 1z' })
        )
    );
};

exports.default = FaChevronDown;
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaChevronUp = function FaChevronUp(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm37.6 29.7l-3.7 3.7q-0.5 0.4-1 0.4t-1-0.4l-11.9-11.9-11.8 11.9q-0.5 0.4-1.1 0.4t-1-0.4l-3.7-3.7q-0.4-0.4-0.4-1t0.4-1l16.6-16.6q0.4-0.4 1-0.4t1 0.4l16.6 16.6q0.4 0.4 0.4 1t-0.4 1z' })
        )
    );
};

exports.default = FaChevronUp;
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaCog = function FaCog(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm25.9 20q0-2.4-1.7-4t-4.1-1.7-4 1.7-1.7 4 1.7 4 4 1.7 4.1-1.7 1.7-4z m11.4-2.4v4.9q0 0.3-0.2 0.5t-0.4 0.3l-4.2 0.6q-0.4 1.3-0.8 2.1 0.7 1.1 2.3 3.1 0.3 0.2 0.3 0.5t-0.2 0.5q-0.6 0.9-2.2 2.4t-2.1 1.6q-0.3 0-0.6-0.2l-3.1-2.4q-1 0.5-2 0.9-0.4 3-0.7 4.1-0.1 0.6-0.8 0.6h-4.9q-0.3 0-0.6-0.1t-0.2-0.5l-0.7-4.1q-1.1-0.4-2-0.9l-3.1 2.4q-0.2 0.2-0.6 0.2-0.3 0-0.5-0.2-2.8-2.6-3.7-3.8-0.2-0.2-0.2-0.5 0-0.2 0.2-0.5 0.3-0.5 1.1-1.5t1.2-1.5q-0.6-1.2-0.9-2.3l-4.1-0.6q-0.2 0-0.4-0.2t-0.2-0.6v-4.9q0-0.3 0.2-0.5t0.4-0.3l4.2-0.7q0.3-1 0.8-2-0.9-1.3-2.4-3.1-0.2-0.3-0.2-0.5 0-0.2 0.2-0.5 0.6-0.8 2.2-2.4t2.1-1.6q0.3 0 0.6 0.2l3.1 2.4q1-0.5 2-0.9 0.4-3 0.7-4.1 0.1-0.6 0.8-0.6h4.9q0.3 0 0.6 0.1t0.2 0.5l0.7 4.1q1 0.4 2 0.9l3.1-2.4q0.2-0.2 0.6-0.2 0.3 0 0.5 0.2 2.9 2.6 3.7 3.8 0.2 0.2 0.2 0.5 0 0.2-0.2 0.5-0.4 0.5-1.2 1.5t-1.2 1.5q0.6 1.2 1 2.2l4 0.7q0.3 0 0.5 0.2t0.2 0.6z' })
        )
    );
};

exports.default = FaCog;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaRefresh = function FaRefresh(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm36.7 23.6q0 0.1 0 0.1-1.4 6-6 9.7t-10.6 3.7q-3.3 0-6.4-1.2t-5.4-3.5l-2.9 2.9q-0.4 0.4-1 0.4t-1-0.4-0.4-1v-10q0-0.6 0.4-1t1-0.4h10q0.6 0 1 0.4t0.5 1-0.5 1l-3 3q1.6 1.5 3.6 2.3t4.1 0.8q3 0 5.6-1.4t4.2-4q0.2-0.4 1.2-2.6 0.1-0.5 0.6-0.5h4.3q0.3 0 0.5 0.2t0.2 0.5z m0.6-17.9v10q0 0.6-0.4 1t-1 0.4h-10q-0.6 0-1-0.4t-0.5-1 0.5-1l3-3.1q-3.3-3-7.8-3-2.9 0-5.5 1.4t-4.2 4q-0.2 0.4-1.2 2.6-0.2 0.5-0.6 0.5h-4.5q-0.3 0-0.5-0.2t-0.2-0.5v-0.1q1.5-6 6-9.7t10.7-3.7q3.3 0 6.4 1.2t5.4 3.5l3-2.9q0.4-0.4 1-0.4t1 0.4 0.4 1z' })
        )
    );
};

exports.default = FaRefresh;
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdCheckCircle = function MdCheckCircle(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm16.6 28.4l15-15-2.3-2.5-12.7 12.7-5.9-5.9-2.3 2.3z m3.4-25c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
        )
    );
};

exports.default = MdCheckCircle;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdError = function MdError(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm21.6 21.6v-10h-3.2v10h3.2z m0 6.8v-3.4h-3.2v3.4h3.2z m-1.6-25c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
        )
    );
};

exports.default = MdError;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdHelpOutline = function MdHelpOutline(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 10c3.7 0 6.6 3 6.6 6.6 0 4.2-5 4.7-5 8.4h-3.2c0-5.4 5-5 5-8.4 0-1.8-1.6-3.2-3.4-3.2s-3.4 1.4-3.4 3.2h-3.2c0-3.6 2.9-6.6 6.6-6.6z m0 23.4c7.3 0 13.4-6.1 13.4-13.4s-6.1-13.4-13.4-13.4-13.4 6.1-13.4 13.4 6.1 13.4 13.4 13.4z m0-30c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z m-1.6 26.6v-3.4h3.2v3.4h-3.2z' })
        )
    );
};

exports.default = MdHelpOutline;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdHourglassEmpty = function MdHourglassEmpty(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 19.1l6.6-6.6v-5.9h-13.2v5.9z m6.6 8.4l-6.6-6.6-6.6 6.6v5.9h13.2v-5.9z m-16.6-24.1h20v10l-6.6 6.6 6.6 6.6v10h-20v-10l6.6-6.6-6.6-6.6v-10z' })
        )
    );
};

exports.default = MdHourglassEmpty;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdSchedule = function MdSchedule(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20.9 11.6v8.8l7.5 4.4-1.3 2.2-8.7-5.4v-10h2.5z m-0.9 21.8c7.3 0 13.4-6.1 13.4-13.4s-6.1-13.4-13.4-13.4-13.4 6.1-13.4 13.4 6.1 13.4 13.4 13.4z m0-30c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
        )
    );
};

exports.default = MdSchedule;
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?modules=true!./EventDetails.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?modules=true!./EventDetails.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?modules=true!./HeaderTimeline.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?modules=true!./HeaderTimeline.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhN2RmYmU0YzFjMzJiNDgwOTNjNyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY3Rpb25UcmFuc2xhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DaG91ZXR0ZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlZENob3VldHRlTGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGF0dXNJY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50U3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uVHJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1kb3duLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tdXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvZmEvY29nLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL3JlZnJlc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQvY2hlY2stY2lyY2xlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2Vycm9yLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2hlbHAtb3V0bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9ob3VyZ2xhc3MtZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQvc2NoZWR1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvZml4VXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuY3NzPzVjYzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzPzI3N2EiXSwibmFtZXMiOlsiY29sb3JEZWYiLCJibGFjayIsIndoaXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYmlnYmx1ZSIsImRhcmtCbHVlIiwiZGFya0dyZXkiLCJncmV5IiwibGlnaHRHcmV5IiwiZW50dXIiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29sb3IiLCJmb250IiwiaW52ZXJzZSIsInRpdGxlIiwiaW5mbzEiLCJpbmZvMiIsImluZm8zIiwid2FybiIsImRpc2FibGVkIiwidG9vbHRpcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJlZmZlY3RpdmUiLCJmYWlsIiwibW9kYWwiLCJiYWNrZHJvcCIsInRhYkFjdGl2ZSIsInRpbWVMaW5lQmFja2dyb3VuZCIsInRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kIiwidGltZUxpbmVCb3JkZXIiLCJ0aW1lTGluZVN1Y2Nlc3MiLCJ0aW1lTGluZUZhaWwiLCJ0YWJsZUhlYWRlciIsInRhYmxlUm93IiwidGFibGVJbmZvIiwidmFsaWQiLCJpbnZhbGlkIiwiZXhwaXJpbmciLCJoaWdobGlnaHQiLCJkaW1lbnNpb24iLCJ0aW1lTGluZVdpZHRoIiwic3R5bGVzIiwibmIiLCJ0ZXh0IiwiRklMRV9UUkFOU0ZFUiIsIkZJTEVfQ0xBU1NJRklDQVRJT04iLCJGSUxFX0RFTElWRVJZIiwiSU1QT1JUIiwiRVhQT1JUIiwiRVhQT1JUX05FVEVYIiwiVkFMSURBVElPTl9MRVZFTF8xIiwiREFUQVNQQUNFX1RSQU5TRkVSIiwiVkFMSURBVElPTl9MRVZFTF8yIiwiQlVJTERfR1JBUEgiLCJPVFAyX0JVSUxEX0dSQVBIIiwiVU5LTk9XTiIsImZpbGVuYW1lIiwidW5kZWZpbmVkIiwic3RhdGVzIiwiT0siLCJQRU5ESU5HIiwiU1RBUlRFRCIsIkZBSUxFRCIsIkRVUExJQ0FURSIsIklHTk9SRUQiLCJDQU5DRUxMRUQiLCJUSU1FT1VUIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JDb2RlIiwiRVJST1JfRklMRV9VTktOT1dOX0ZJTEVfRVhURU5TSU9OIiwiRVJST1JfRklMRV9OT1RfQV9aSVBfRklMRSIsIkVSUk9SX0ZJTEVfVU5LTk9XTl9GSUxFX1RZUEUiLCJFUlJPUl9GSUxFX1pJUF9DT05UQUlOU19TVUJfRElSRUNUT1JJRVMiLCJFUlJPUl9GSUxFX0lOVkFMSURfWklQX0VOVFJZX0VOQ09ESU5HIiwiRVJST1JfRklMRV9JTlZBTElEX1hNTF9FTkNPRElOR19FUlJPUiIsIkVSUk9SX0ZJTEVfSU5WQUxJRF9YTUxfQ09OVEVOVCIsIkVSUk9SX05FVEVYX0VYUE9SVF9FTVBUWV9FWFBPUlQiLCJFUlJPUl9WQUxJREFUSU9OX05PX0RBVEEiLCJmaWx0ZXJCdXR0b24iLCJBTExfVElNRSIsIkxBU1RfMTJfSE9VUlMiLCJMQVNUXzI0X0hPVVJTIiwiTEFTVF9XRUVLIiwiTEFTVF9NT05USCIsImVuIiwiYnV0dG9uQ29uZmlnIiwiZmllbGRzIiwiaWQiLCJnZXRMYXN0VmFsaWREYXRlIiwibm93IiwiRGF0ZSIsInNldE1vbnRoIiwiZ2V0TW9udGgiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJwYWdlIiwibm9fc3RhdHVzIiwic3RhcnRlZCIsImVuZGVkIiwiZHVyYXRpb24iLCJ1c2VybmFtZSIsInNob3dfYWxsIiwic2hvd19vbmx5X2ZhaWxlZCIsInNob3dfb25seV9zdWNjZXNzIiwic2hvd19vbmx5X2NhbmNlbGxlZCIsImZpbHRlcl9kaXJlY3RfZGVsaXZlcnkiLCJUaW1lbGluZSIsIkhlYWRlclRpbWVsaW5lIiwiRXZlbnREZXRhaWxzIiwiQ2hvdWV0dGVMaW5rIiwiYWN0aW9uIiwicmVmZXJlbnRpYWwiLCJjaGlsZHJlbiIsImJhc2VVUkwiLCJ3aW5kb3ciLCJjb25maWciLCJjaG91ZXR0ZUJhc2VVcmwiLCJhY3Rpb25NYXAiLCJpbXBvcnRlciIsImV4cG9ydGVyIiwidmFsaWRhdG9yIiwiVVJMIiwiQ29udHJvbGxlZENob3VldHRlTGluayIsImV2ZW50cyIsImluY2x1ZGVMZXZlbDIiLCJzdXBwb3J0ZWRBY3Rpb25zIiwiY2hvdWV0dGVNYXAiLCJwdXNoIiwibGVuZ3RoIiwiZW5kU3RhdGUiLCJpbmRleE9mIiwiY2hvdWV0dGVKb2JJZCIsInByb3BzIiwic3RhdGUiLCJhY3RpdmVQYWdlSW5kZXgiLCJlbmRTdGF0ZUZpbHRlciIsImRhdGVGaWx0ZXIiLCJzaG93RGF0ZUZpbHRlciIsIm9ubHlOZXdEZWxpdmVyeUZpbHRlciIsImUiLCJwYWdlSW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZGF0YVNvdXJjZSIsImxhc3REYXRlIiwiZmlsdGVyIiwiYXBwbGllZEZpbHRlciIsImZpbHRlckJ5UGVyaW9kIiwiZXZlbnQiLCJmaXJzdEV2ZW50IiwiZW5kU3RhdGVGaWx0ZXJBcHBsaWVkIiwiZmlsdGVyQnlFbmRTdGF0ZSIsImNvbnRhaW5zRXZlbnRzIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyQnlOZXdEZWxpdmVyeSIsImV2ZXJ5IiwibG9jYWxlIiwic2hvd05ld0RlbGl2ZXJpZXNGaWx0ZXIiLCJmaWx0ZXJlZFNvdXJjZSIsImdldEZpbHRlcmVkU291cmNlIiwicGFnaW5hdGlvbk1hcCIsImdldFBhZ2luYXRpb25NYXAiLCJmaWx0ZXJzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsInRhcmdldCIsInZhbHVlIiwidHJhbnNsYXRpb25zIiwibWFyZ2luTGVmdCIsImhhbmRsZUZpbHRlckNoYW5nZSIsImJpbmQiLCJwYWRkaW5nVG9wIiwibWFyZ2luIiwiY2hlY2tlZCIsInJlZnJlc2hCdXR0b24iLCJoYW5kbGVSZWZyZXNoIiwibWFyZ2luUmlnaHQiLCJmbG9hdCIsImN1cnNvciIsInRyYW5zZm9ybSIsIndpZHRoIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwibWFwIiwiaW5kZXgiLCJpc0FjdGl2ZSIsImhhbmRsZVBhZ2VDbGljayIsImxpc3RJdGVtIiwiZXZlbnRHcm91cCIsImZvckVhY2giLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiZm9udFdlaWdodCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwic3RhdHVzTGlzdCIsImkiLCJqIiwic2xpY2UiLCJFdmVudFN0YXR1c0ljb24iLCJoZWlnaHQiLCJFdmVudFN0ZXBwZXIiLCJleHBhbmRlZCIsImdyb3VwcyIsImV2ZW50U3RhdGVzIiwiZ3JvdXBzV2l0aFVubGlzdGVkIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlyc3RTdGF0ZUZvdW5kIiwibWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQiLCJmaW5hbEdyb3VwcyIsImtleXMiLCJzb3J0Iiwia2V5MSIsImtleTIiLCJrZXkiLCJmb3JtYXR0ZWRHcm91cHMiLCJuYW1lIiwiY29tYmluZWQiLCJncm91cCIsImRhdGEiLCJlcnJvck9uIiwiY29sdW1uU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJjb2x1bW4iLCJyZW5kZXJFdmVudCIsImlzRmlyc3QiLCJjb2x1bW5JbmRleCIsImdyb3VwU3R5bGUiLCJncm91cFRleHQiLCJsaW5rU3R5bGUiLCJib3JkZXJDb2xvciIsImJvcmRlclRvcFN0eWxlIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJBY3Rpb25UcmFuc2xhdGlvbnMiLCJ0b29sVGlwVGV4dCIsImRhdGUiLCJvcGFjaXR5Iiwic3RlcHBlcnN0eWxlIiwiYWxpZ25Db250ZW50IiwiYWRkVW5saXN0ZWRTdGF0ZXMiLCJhZ2dyZWdnYXRlRmlsZUV2ZW50cyIsImNyZWF0ZUNvbWJpbmVkU3BsaXQiLCJidWxsZXRzIiwiYnVsbGV0IiwiaGFuZGxlVG9nZ2xlVmlzaWJpbGl0eSIsInByb3ZpZGVyIiwiZmxleCIsImZpbGVOYW1lIiwic3RvcFByb3BhZ2F0aW9uIiwibGFzdEV2ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIkZpbHRlckJ1dHRvbiIsImhhbmRsZUNsaWNrIiwibGFiZWwiLCJhY3RpdmUiLCJhY3RpdmVTdHlsZSIsImluYWN0aXZlU3R5bGUiLCJkZWZhdWx0U3R5bGUiLCJtaW5XaWR0aCIsImJ1dHRvblN0eWxlIiwicG9pbnRlckV2ZW50cyIsIkZpbHRlckJ1dHRvblRyYXkiLCJhY3RpdmVCdXR0b25JZCIsIm9uQ2hhbmdlIiwic3R5bGUiLCJmaWVsZCIsInNob3dUb29sdGlwIiwiZWZmZWN0aXZlUGVyaW9kcyIsInZhbGlkRGF5c09mZnNldCIsInRpbWVsaW5lU3R5bGUiLCJsaW5lSGVpZ2h0Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsInRpbWVsaW5lV3JhcHBlciIsInRpbWVCbG9jayIsInRpdGxlVGV4dCIsInpJbmRleCIsInRvb2xUaXBTdHlsZSIsInRyYW5zaXRpb24iLCJ0ZXh0U3R5bGUiLCJ0ZXh0U2hhZG93Iiwid2hpdGVTcGFjZSIsInRleHRPdmVyZmxvdyIsImhyU3R5bGUiLCJob3ZlclRleHQiLCJoYW5kbGVUb2dnbGVUb29sVGlwIiwibGluZSIsInRpbWVsaW5lIiwiZWZmZWN0aXZlUGVyaW9kIiwicGVyaW9kQmxvY2siLCJ0aW1lbGluZUVuZFBvc2l0aW9uIiwidGltZWxpbmVTdGFydFBvc2l0aW9uIiwiaXRlbVRleHQiLCJ0byIsImZyb20iLCJsb2NhbGVDb21wYXJlIiwidmVydGljYWxBbGlnbiIsInN0cmluZyIsIm51bWJlciIsInZhbGlkRnJvbURhdGUiLCJhcnJheSIsInBlcmlvZCIsInNoYXBlIiwidGltZXRhYmxlIiwib2JqZWN0SWQiLCJwZXJpb2RzIiwiYXJyYXlPZiIsInRpbWV0YWJsZXMiLCJpc0xhc3QiLCJvdmVyZmxvd1kiLCJwYWRkaW5nQm90dG9tIiwiaG92ZXIiLCJib29sIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQ2pTT0MsUTtRQUNBQyxjO1FBQ0FDLFk7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7OztBQUVBLElBQU1DLGVB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7O0FDeEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhN2RmYmU0YzFjMzJiNDgwOTNjNyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBJY29uQmFzZSA9IGZ1bmN0aW9uIEljb25CYXNlKF9yZWYsIF9yZWYyKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBjb2xvciA9IF9yZWYuY29sb3I7XG4gIHZhciBzaXplID0gX3JlZi5zaXplO1xuICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlO1xuICB2YXIgd2lkdGggPSBfcmVmLndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG5cbiAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2hpbGRyZW4nLCAnY29sb3InLCAnc2l6ZScsICdzdHlsZScsICd3aWR0aCcsICdoZWlnaHQnXSk7XG5cbiAgdmFyIF9yZWYyJHJlYWN0SWNvbkJhc2UgPSBfcmVmMi5yZWFjdEljb25CYXNlO1xuICB2YXIgcmVhY3RJY29uQmFzZSA9IF9yZWYyJHJlYWN0SWNvbkJhc2UgPT09IHVuZGVmaW5lZCA/IHt9IDogX3JlZjIkcmVhY3RJY29uQmFzZTtcblxuICB2YXIgY29tcHV0ZWRTaXplID0gc2l6ZSB8fCByZWFjdEljb25CYXNlLnNpemUgfHwgJzFlbSc7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3ZnJywgX2V4dGVuZHMoe1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgbWVldCcsXG4gICAgaGVpZ2h0OiBoZWlnaHQgfHwgY29tcHV0ZWRTaXplLFxuICAgIHdpZHRoOiB3aWR0aCB8fCBjb21wdXRlZFNpemVcbiAgfSwgcmVhY3RJY29uQmFzZSwgcHJvcHMsIHtcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBjb2xvcjogY29sb3IgfHwgcmVhY3RJY29uQmFzZS5jb2xvclxuICAgIH0sIHJlYWN0SWNvbkJhc2Uuc3R5bGUgfHwge30sIHN0eWxlKVxuICB9KSk7XG59O1xuXG5JY29uQmFzZS5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgc2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59O1xuXG5JY29uQmFzZS5jb250ZXh0VHlwZXMgPSB7XG4gIHJlYWN0SWNvbkJhc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoSWNvbkJhc2UucHJvcFR5cGVzKVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSWNvbkJhc2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmNvbnN0IGNvbG9yRGVmID0ge1xuICBibGFjazogJyMwMDAnLFxuICB3aGl0ZTogJyNGRkYnLFxuICByZWQ6ICcjRjAwJyxcbiAgZ3JlZW46ICcjMEYwJyxcbiAgYmx1ZTogJyMwMEYnLFxuICBiaWdibHVlOiAnIzExNjlBNycsXG4gIGRhcmtCbHVlOiAnIzA4MzQ1MycsXG4gIGRhcmtHcmV5OiAnIzJGMkYyRicsXG4gIGdyZXk6ICcjREREREREJyxcbiAgbGlnaHRHcmV5OiAnI0YyRjJGMicsXG4gIGVudHVyOiB7XG4gICAgcHJpbWFyeTogJyMyNzNBNDYnLCAgIC8vIDM5LDU4LDcwXG4gICAgc2Vjb25kYXJ5OiAnIzZCQkRDMicsIC8vMTA3LDE4OSwxOTQsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICBmb250OiB7XG4gICAgaW52ZXJzZTogY29sb3JEZWYud2hpdGUsXG4gICAgdGl0bGU6IGNvbG9yRGVmLmJsYWNrLFxuICAgIGluZm8xOiBjb2xvckRlZi5lbnR1ci5zZWNvbmRhcnksXG4gICAgaW5mbzI6IGNvbG9yRGVmLmRhcmtCbHVlLFxuICAgIGluZm8zOiBjb2xvckRlZi5ibGFjayxcbiAgICB3YXJuOiBjb2xvckRlZi5yZWQsXG4gICAgZGlzYWJsZWQ6IGNvbG9yRGVmLmdyZXksXG5cbiAgICB0b29sdGlwOiBjb2xvckRlZi53aGl0ZSxcbiAgfSxcbiAgYmFja2dyb3VuZDogY29sb3JEZWYuZW50dXIucHJpbWFyeSxcbiAgYm9yZGVyOiBjb2xvckRlZi5ibGFjayxcbiAgZWZmZWN0aXZlOiBjb2xvckRlZi5ibGFjayxcbiAgZmFpbDogY29sb3JEZWYucmVkLFxuICBtb2RhbDogY29sb3JEZWYud2hpdGUsXG4gIGJhY2tkcm9wOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgdG9vbHRpcDogJyMxOTE5MTknLFxuICB0YWJBY3RpdmU6IGNvbG9yRGVmLmVudHVyLnNlY29uZGFyeSxcblxuICB0aW1lTGluZUJhY2tncm91bmQ6ICcjREVEOEQ4JyxcbiAgdGltZUxpbmVCbG9ja0JhY2tncm91bmQ6ICcjNkQ5MkI2JyxcbiAgdGltZUxpbmVCb3JkZXI6ICcjZWVlJyxcbiAgdGltZUxpbmVTdWNjZXNzOiAnIzVEQUU1RCcsXG4gIHRpbWVMaW5lRmFpbDogJyNCOTE5MTknLFxuICB0YWJsZUhlYWRlcjogY29sb3JEZWYubGlnaHRHcmV5LFxuICB0YWJsZVJvdzogJyNlYmYyZjEnLFxuICB0YWJsZUluZm86ICcjZmZmZmRiJyxcblxuICB2YWxpZDogJyMzM2MxNDYnLFxuICBpbnZhbGlkOiAnI2IyMDAwMCcsXG4gIGV4cGlyaW5nOiAnI0ZGQUEwMCcsXG4gIGhpZ2hsaWdodCA6IHtcbiAgICB2YWxpZDogJyM0Y2FmNTAnLFxuICAgIGV4cGlyaW5nOiAnI0ZGQjYwQScsXG4gICAgaW52YWxpZDogJyNjYzAwMDAnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkaW1lbnNpb24gPSB7XG4gIHRpbWVMaW5lV2lkdGg6IDg1LFxufVxuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICBjb2xvcjogY29sb3IsXG4gIGRpbWVuc2lvbjogZGltZW5zaW9uLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlcy9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgRVVQTCwgVmVyc2lvbiAxLjIgb3Ig4oCTIGFzIHNvb24gdGhleSB3aWxsIGJlIGFwcHJvdmVkIGJ5XG4gKiB0aGUgRXVyb3BlYW4gQ29tbWlzc2lvbiAtIHN1YnNlcXVlbnQgdmVyc2lvbnMgb2YgdGhlIEVVUEwgKHRoZSBcIkxpY2VuY2VcIik7XG4gKiBZb3UgbWF5IG5vdCB1c2UgdGhpcyB3b3JrIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2VuY2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2VuY2UgYXQ6XG4gKlxuICogICBodHRwczovL2pvaW51cC5lYy5ldXJvcGEuZXUvc29mdHdhcmUvcGFnZS9ldXBsXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2VuY2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2VuY2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5jZS5cbiAqXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYjoge1xuICAgIHRleHQ6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6ICdGaWxvdmVyZsO4cmluZycsXG4gICAgICBGSUxFX0NMQVNTSUZJQ0FUSU9OOiAnRmlsa2xhc3NpZmlzZXJpbmcnLFxuICAgICAgRklMRV9ERUxJVkVSWTogJ0ZpbGxldmVyYW5zZScsXG4gICAgICBJTVBPUlQ6ICdJbXBvcnQnLFxuICAgICAgRVhQT1JUOiAnR1RGUy1la3Nwb3J0JyxcbiAgICAgIEVYUE9SVF9ORVRFWDogJ05lVEV4LWVrc3BvcnQnLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8xOiAnVmFsaWRlcmluZyBuaXbDpSAxJyxcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogJ092ZXJmw7hyaW5nIHNlbnRyYWwgZGF0YWJhc2UnLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiAnVmFsaWRlcmluZyBuaXbDpSAyJyxcbiAgICAgIEJVSUxEX0dSQVBIOiAnQnlnZyBhdiByZWlzZXPDuGtmb3JzbGFnIChvdHAxKScsXG4gICAgICBPVFAyX0JVSUxEX0dSQVBIOiAnQnlnZyBhdiByZWlzZXPDuGtmb3JzbGFnIChvdHAyKScsXG4gICAgICBVTktOT1dOOiAnVWtqZW50IHN0ZWcnXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ092ZXJmw7hyaW5nIGF2IGZpbCBmcmEgbG9rYWwgbWFza2luIHRpbCBzZW50cmFsIHNlcnZlcicsXG4gICAgICBJTVBPUlQ6ICdGaWx2YWxpZGVyaW5nIG9nIGltcG9ydCBpIGxva2FsdCBkYXRhYmFzZW9tcsOlZGUgbml2w6UgMScsXG4gICAgICBFWFBPUlQ6ICdFa3Nwb3J0IGF2IHJ1dGVkYXRhICcsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6ICdWYWxpZGVyaW5nIGF2IGtvbXBsZXR0IGRhdGFvbXLDpWRlIG5pdsOlIDEnLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiAnVmFsaWRlcmluZyBhdiBrb21wbGV0dCBkYXRhb21yw6VkZSBuaXbDpSAyJyxcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogJ092ZXJmw7hyaW5nIHRpbCBzZW50cmFsdCBkYXRhYmFzZW9tcsOlZGUgbml2w6UgMicsXG4gICAgICBCVUlMRF9HUkFQSDogJ0J5Z2cgYXYgcmVpc2Vzw7hrZm9yc2xhZyAob3RwMSknLFxuICAgICAgT1RQMl9CVUlMRF9HUkFQSDogJ0J5Z2cgYXYgcmVpc2Vzw7hrZm9yc2xhZyAob3RwMiknLFxuICAgICAgVU5LTk9XTjogJ0RldHRlIHN0ZWdldCBlciB1a2plbnQnXG4gICAgfSxcbiAgICBmaWxlbmFtZToge1xuICAgICAgdW5kZWZpbmVkOiAnVmFsaWRlcmluZydcbiAgICB9LFxuICAgIHN0YXRlczoge1xuICAgICAgT0s6ICdGdWxsZsO4cnQnLFxuICAgICAgUEVORElORzogJ1ZlbnRlcicsXG4gICAgICBTVEFSVEVEOiAnUMOlYmVneW50JyxcbiAgICAgIEZBSUxFRDogJ0ZlaWwnLFxuICAgICAgRFVQTElDQVRFOiAnRmVpbCAtIGR1cGxpa2F0IGRhdGFzZXR0JyxcbiAgICAgIElHTk9SRUQ6ICdJa2tlIGdqZW5ub21mw7hydCcsXG4gICAgICBDQU5DRUxMRUQ6ICdLYW5zZWxsZXJ0JyxcbiAgICAgIFRJTUVPVVQ6ICdUaWRzYXZicnVkZCdcbiAgICB9LFxuICAgIGVycm9yTWVzc2FnZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ0ZpbG92ZXJmw7hyaW5nIGZlaWxldCcsXG4gICAgICBGSUxFX0NMQVNTSUZJQ0FUSU9OOiAnRmlsa2xhc3NpZmlzZXJpbmcgZmVpbGV0J1xuICAgIH0sXG4gICAgZXJyb3JDb2RlOiB7XG4gICAgICBFUlJPUl9GSUxFX1VOS05PV05fRklMRV9FWFRFTlNJT046ICdGaWxlbmRlbHNlbiBlciBodmVya2VuIC56aXAgZWxsZXIgLlpJUCcsXG4gICAgICBFUlJPUl9GSUxFX05PVF9BX1pJUF9GSUxFOiAnRmlsZW4gZXIgaWtrZSBldCB6aXAgYXJraXYnLFxuICAgICAgRVJST1JfRklMRV9VTktOT1dOX0ZJTEVfVFlQRTogJ0ZpbGVuIGVyIGh2ZXJrZW4gTmVURXggZWxsZXIgR1RGUycsXG4gICAgICBFUlJPUl9GSUxFX1pJUF9DT05UQUlOU19TVUJfRElSRUNUT1JJRVM6ICdBcmtpdmV0IGlubmVob2xkZXIgdW5kZXJrYXRhbG9nZXInLFxuICAgICAgRVJST1JfRklMRV9JTlZBTElEX1pJUF9FTlRSWV9FTkNPRElORzogJ0Fya2l2ZXQgaW5uZWhvbGRlciBmaWxuYXZuIHNvbSBpa2tlIGVyIGd5bGRpZyBVVEY4JyxcbiAgICAgIEVSUk9SX0ZJTEVfSU5WQUxJRF9YTUxfRU5DT0RJTkdfRVJST1I6ICdBcmtpdmV0IGlubmVob2xkZXIgWE1MLWZpbGVyIG1lZCB1Z3lsZGlnIHRlZ25zZXR0JyxcbiAgICAgIEVSUk9SX0ZJTEVfSU5WQUxJRF9YTUxfQ09OVEVOVDogJ0Fya2l2ZXQgaW5uZWhvbGRlciB1Z3lsZGlnZSBYTUwtZmlsZXInLFxuICAgICAgRVJST1JfTkVURVhfRVhQT1JUX0VNUFRZX0VYUE9SVDogJ0RldCBla3Nwb3J0ZXJ0ZSBkYXRhc2V0dGV0IGVyIHRvbXQgKGZhbnQgaW5nZW4gYWt0aXZlIHRpZHRhYmVsbGRhdGEpJyxcbiAgICAgIEVSUk9SX1ZBTElEQVRJT05fTk9fREFUQTogJ0RldCBmaW5uZXMgaW5nZW4gZGF0YSDDpSB2YWxpZGVyZS4gU3RhdHVzZW4gZm9yIHNpc3RlIGltcG9ydCBiw7hyIGtvbnRyb2xsZXJlcydcbiAgICB9LFxuICAgIGZpbHRlckJ1dHRvbjoge1xuICAgICAgQUxMX1RJTUU6ICdVYmVncmVuc2V0JyxcbiAgICAgIExBU1RfMTJfSE9VUlM6ICdTaXN0ZSAxMiB0aW1lbmUnLFxuICAgICAgTEFTVF8yNF9IT1VSUzogJ1Npc3RlIGTDuGduJyxcbiAgICAgIExBU1RfV0VFSzogJ1Npc3RlIHVrZScsXG4gICAgICBMQVNUX01PTlRIOiAnU2lzdGUgbcOlbmVkJ1xuICAgIH1cbiAgfSxcbiAgZW46IHtcbiAgICB0ZXh0OiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmlsZSB0cmFuc2ZlcicsXG4gICAgICBGSUxFX0NMQVNTSUZJQ0FUSU9OOiAnRmlsZSBjbGFzc2lmaWNhdGlvbicsXG4gICAgICBGSUxFX0RFTElWRVJZOiAnRmlsZSBkZWxpdmVyeScsXG4gICAgICBJTVBPUlQ6ICdJbXBvcnQnLFxuICAgICAgRVhQT1JUOiAnR1RGUyBleHBvcnQnLFxuICAgICAgRVhQT1JUX05FVEVYOiAnTmVURXggZXhwb3J0JyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogJ1ZhbGlkYXRpb24gbGV2ZWwgMScsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6ICdUcmFuc2ZlciB0byBjZW50cmFsIHNwYWNlJyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMjogJ1ZhbGlkYXRpb24gbGV2ZWwgMicsXG4gICAgICBCVUlMRF9HUkFQSDogJ0J1aWxkIGdyYXBoIChvdHAxKScsXG4gICAgICBPVFAyX0JVSUxEX0dSQVBIOiAnQnVpbGQgZ3JhcGggKG90cDIpJyxcbiAgICAgIFVOS05PV046ICdVa25vd24gc3RlcCdcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnVXBsb2FkIGxvY2FsIGZpbGUgdG8gcmVtb3RlIHNlcnZlcicsXG4gICAgICBJTVBPUlQ6ICdGaWxlIHZhbGlkYXRpb24gYW5kIGltcG9ydCBpbiBsb2NhbCBkYXRhIHNwYWNlIC0gbGV2ZWwgMScsXG4gICAgICBFWFBPUlQ6ICdFeHBvcnQgb2Ygcm91dGUgZGF0YSAnLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8xOiAnVmFsaWRhdGlvbiBvZiBjb21wbGV0ZSBkYXRhIHNwYWNlIC0gbGV2ZWwgMScsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6ICdWYWxpZGF0aW9uIG9mIGNvbXBsZXRlIGRhdGEgc3BhY2UgLSBsZXZlbCAyJyxcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogJ1RyYW5zZmVyIHRvIGNlbnRyYWwgZGF0YXNwYWNlIC0gbGV2ZWwgMicsXG4gICAgICBCVUlMRF9HUkFQSDogJ0J1aWxkIGdyYXBoIChvdHAxKScsXG4gICAgICBPVFAyX0JVSUxEX0dSQVBIOiAnQnVpbGQgZ3JhcGggKG90cDIpJyxcbiAgICAgIFVOS05PV046ICdUaGlzIHN0ZXAgaXMgdWtub3duJ1xuICAgIH0sXG4gICAgZmlsZW5hbWU6IHtcbiAgICAgIHVuZGVmaW5lZDogJ1ZhbGlkYXRpb24nXG4gICAgfSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgIE9LOiAnQ29tcGxldGVkJyxcbiAgICAgIFBFTkRJTkc6ICdQZW5kaW5nJyxcbiAgICAgIFNUQVJURUQ6ICdTdGFydGVkJyxcbiAgICAgIEZBSUxFRDogJ0ZhaWxlZCcsXG4gICAgICBEVVBMSUNBVEU6ICdGYWlsZWQgLSBkdXBsaWNhdGUgZGF0YSBzZXQnLFxuICAgICAgSUdOT1JFRDogJ1NraXBwZWQnLFxuICAgICAgQ0FOQ0VMTEVEOiAnQ2FuY2VsbGVkJyxcbiAgICAgIFRJTUVPVVQ6ICdUaW1lb3V0J1xuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmFpbGVkIHRvIHRyYW5zZmVyIGZpbGUnLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZhaWxlZCBvbiBmaWxlIGNsYXNzaWZpY2F0aW9uJ1xuICAgIH0sXG4gICAgZXJyb3JDb2RlOiB7XG4gICAgICBFUlJPUl9GSUxFX1VOS05PV05fRklMRV9FWFRFTlNJT046ICdUaGUgZmlsZSBleHRlbnNpb24gaXMgbmVpdGhlciAuemlwIG5vciAuWklQJyxcbiAgICAgIEVSUk9SX0ZJTEVfTk9UX0FfWklQX0ZJTEU6ICdUaGUgZmlsZSBpcyBub3QgYSB6aXAgYXJjaGl2ZScsXG4gICAgICBFUlJPUl9GSUxFX1VOS05PV05fRklMRV9UWVBFOiAnVGhlIGZpbGUgaXMgbmVpdGhlciBhIE5lVEV4IGFyY2hpdmUgbm9yIGEgR1RGUyBhcmNoaXZlJyxcbiAgICAgIEVSUk9SX0ZJTEVfWklQX0NPTlRBSU5TX1NVQl9ESVJFQ1RPUklFUzogJ1RoZSBhcmNoaXZlIGNvbnRhaW5zIHN1Yi1kaXJlY3RvcmllcycsXG4gICAgICBFUlJPUl9GSUxFX0lOVkFMSURfWklQX0VOVFJZX0VOQ09ESU5HOiAnVGhlIGFyY2hpdmUgY29udGFpbnMgZmlsZSBuYW1lcyB0aGF0IGFyZSBub3QgVVRGOC1lbmNvZGVkJyxcbiAgICAgIEVSUk9SX0ZJTEVfSU5WQUxJRF9YTUxfRU5DT0RJTkdfRVJST1I6ICdUaGUgYXJjaGl2ZSBjb250YWlucyBYTUwgZmlsZXMgd2l0aCBhbiBpbnZhbGlkIGVuY29kaW5nJyxcbiAgICAgIEVSUk9SX0ZJTEVfSU5WQUxJRF9YTUxfQ09OVEVOVDogJ1RoZSBhcmNoaXZlIGNvbnRhaW5zIGludmFsaWQgWE1MIGZpbGVzJyxcbiAgICAgIEVSUk9SX05FVEVYX0VYUE9SVF9FTVBUWV9FWFBPUlQ6ICdUaGUgZXhwb3J0ZWQgZGF0YXNldCBpcyBlbXB0eSAobm8gYWN0aXZlIHRpbWV0YWJsZSBkYXRhIGZvdW5kKScsXG4gICAgICBFUlJPUl9WQUxJREFUSU9OX05PX0RBVEE6ICdUaGVyZSBpcyBubyBkYXRhIHRvIHZhbGlkYXRlLiBDaGVjayB0aGUgc3RhdHVzIG9mIHRoZSBsYXRlc3QgZGF0YSBpbXBvcnQnXG5cbiAgICB9LFxuICAgIGZpbHRlckJ1dHRvbjoge1xuICAgICAgQUxMX1RJTUU6ICdVbmxpbWl0ZWQnLFxuICAgICAgTEFTVF8xMl9IT1VSUzogJ0xhc3QgMTIgaG91cnMnLFxuICAgICAgTEFTVF8yNF9IT1VSUzogJ0xhc3QgMjQgaG91cnMnLFxuICAgICAgTEFTVF9XRUVLOiAnTGFzdCB3ZWVrJyxcbiAgICAgIExBU1RfTU9OVEg6ICdMYXN0IG1vbnRoJ1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FjdGlvblRyYW5zbGF0aW9ucy5qcyIsImNvbnN0IGJ1dHRvbkNvbmZpZyA9IHtcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgaWQ6ICdMQVNUXzEyX0hPVVJTJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdMQVNUXzI0X0hPVVJTJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdMQVNUX1dFRUsnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfTU9OVEgnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0FMTF9USU1FJ1xuICAgIH1cbiAgXVxufTtcblxuZXhwb3J0IGNvbnN0IGdldExhc3RWYWxpZERhdGUgPSBpZCA9PiB7XG4gIHN3aXRjaCAoaWQpIHtcbiAgICBjYXNlICdBTExfVElNRSc6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBjYXNlICdMQVNUX01PTlRIJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldE1vbnRoKG5vdy5nZXRNb250aCgpIC0gMSkpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUX1dFRUsnOiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0RGF0ZShub3cuZ2V0RGF0ZSgpIC0gNykpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUXzEyX0hPVVJTJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldEhvdXJzKG5vdy5nZXRIb3VycygpIC0gMTIpKTtcbiAgICB9XG4gICAgY2FzZSAnTEFTVF8yNF9IT1VSUyc6IHtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCkgLSAxKSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidXR0b25Db25maWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9idXR0b25Db25maWcuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFwiZW5cIjoge1xuICAgIHBhZ2U6ICdQYWdlOiAnLFxuICAgIG5vX3N0YXR1czogJ05vIHJlc3VsdCB3aXRoIGFwcGxpZWQgZmlsdGVyJyxcbiAgICBzdGFydGVkOiAnU3RhcnRlZCcsXG4gICAgZW5kZWQ6ICdFbmRlZCcsXG4gICAgZHVyYXRpb246ICdEdXJhdGlvbjogJyxcbiAgICB1c2VybmFtZTogJ1VzZXJuYW1lOiAnLFxuICAgIHNob3dfYWxsOiAnU2hvdyBhbGwnLFxuICAgIHNob3dfb25seV9mYWlsZWQ6ICdTaG93IG9ubHkgZmFpbGVkJyxcbiAgICBzaG93X29ubHlfc3VjY2VzczogJ1Nob3cgb25seSBzdWNjZXNzZnVsJyxcbiAgICBzaG93X29ubHlfY2FuY2VsbGVkOiBcIlNob3cgb25seSBjYW5jZWxsZWRcIixcbiAgICBmaWx0ZXJfZGlyZWN0X2RlbGl2ZXJ5OiBcIk9ubHkgc3RhcnRlZCB3aXRoIGZpbGUgZGVsaXZlcnlcIlxuICB9LFxuICBcIm5iXCI6IHtcbiAgICBwYWdlOiAnU2lkZTogJyxcbiAgICBub19zdGF0dXM6ICdJbmdlbiByZXN1bHRhdGVyIG1lZCB2YWxndCBmaWx0ZXInLFxuICAgIHN0YXJ0ZWQ6ICdCZWd5bnRlJyxcbiAgICBlbmRlZDogJ0F2c2x1dHRldCcsXG4gICAgZHVyYXRpb246ICdWYXJpZ2hldCcsXG4gICAgdXNlcm5hbWU6ICdCcnVrZXJuYXZuOiAnLFxuICAgIHNob3dfYWxsOiAnVmlzIGFsbGUnLFxuICAgIHNob3dfb25seV9mYWlsZWQ6ICdWaXMga3VuIGZlaWxldCcsXG4gICAgc2hvd19vbmx5X3N1Y2Nlc3M6ICdWaXMga3VuIHZlbGx5a2tldCcsXG4gICAgc2hvd19vbmx5X2NhbmNlbGxlZDogXCJWaXMga3VuIGthbnNlbGxlcnRlXCIsXG4gICAgZmlsdGVyX2RpcmVjdF9kZWxpdmVyeTogXCJLdW4gc3RhcnRldCB2ZWQgZmlsbGV2ZXJhbnNlXCJcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90cmFuc2xhdGlvbnMuanMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdFx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHRcdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXIgXG5cdFx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdFx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdFx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xuXHR9KSxcblx0Z2V0RWxlbWVudCA9IChmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vID0ge307XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0XHR9O1xuXHR9KShmdW5jdGlvbiAoc3R5bGVUYXJnZXQpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHlsZVRhcmdldClcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXSxcblx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL2ZpeFVybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEludG8gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2Vcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdHZhciBzdHlsZVRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXHRpZiAoIXN0eWxlVGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRzdHlsZVRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBzdHlsZVRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHN0eWxlVGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVUYXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRzdHlsZVRhcmdldC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGF0dGFjaFRhZ0F0dHJzKHN0eWxlRWxlbWVudCwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YXR0YWNoVGFnQXR0cnMobGlua0VsZW1lbnQsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFRhZ0F0dHJzKGVsZW1lbnQsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qIElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKXtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZihzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xuXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYylcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgVGltZWxpbmUgZnJvbSAnLi9UaW1lbGluZSdcbmV4cG9ydCBIZWFkZXJUaW1lbGluZSBmcm9tICcuL0hlYWRlclRpbWVsaW5lJ1xuZXhwb3J0IEV2ZW50RGV0YWlscyBmcm9tICcuL0V2ZW50RGV0YWlscydcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ2hvdWV0dGVMaW5rID0gKHsgYWN0aW9uLCBpZCwgcmVmZXJlbnRpYWwsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgYmFzZVVSTCA9IGAke3dpbmRvdy5jb25maWcuY2hvdWV0dGVCYXNlVXJsfXJlZmVyZW50aWFscy9gO1xuXG4gIGNvbnN0IGFjdGlvbk1hcCA9IHtcbiAgICBpbXBvcnRlcjogYGltcG9ydHMvJHtpZH0vY29tcGxpYW5jZV9jaGVja2AsXG4gICAgZXhwb3J0ZXI6IGBleHBvcnRzLyR7aWR9L2NvbXBsaWFuY2VfY2hlY2tgLFxuICAgIHZhbGlkYXRvcjogYGNvbXBsaWFuY2VfY2hlY2tzLyR7aWR9L3JlcG9ydGBcbiAgfTtcbiAgY29uc3QgVVJMID0gYCR7YmFzZVVSTH0ke3JlZmVyZW50aWFsfS8ke2FjdGlvbk1hcFthY3Rpb25dfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8YSB0aXRsZT17VVJMfSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtVUkx9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENob3VldHRlTGluaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Nob3VldHRlTGluay5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hvdWV0dGVMaW5rIGZyb20gJy4vQ2hvdWV0dGVMaW5rJztcblxuY29uc3QgQ29udHJvbGxlZENob3VldHRlTGluayA9ICh7IGV2ZW50cywgaW5jbHVkZUxldmVsMiwgY2hpbGRyZW4gfSkgPT4ge1xuICBsZXQgc3VwcG9ydGVkQWN0aW9ucyA9IFsnSU1QT1JUJywgJ1ZBTElEQVRJT05fTEVWRUxfMSddO1xuXG4gIGxldCBjaG91ZXR0ZU1hcCA9IHtcbiAgICBJTVBPUlQ6ICdpbXBvcnRlcicsXG4gICAgVkFMSURBVElPTl9MRVZFTF8xOiAndmFsaWRhdG9yJ1xuICB9O1xuXG4gIGlmIChpbmNsdWRlTGV2ZWwyKSB7XG4gICAgc3VwcG9ydGVkQWN0aW9ucy5wdXNoKCdWQUxJREFUSU9OX0xFVkVMXzInKTtcbiAgICBzdXBwb3J0ZWRBY3Rpb25zLnB1c2goJ0VYUE9SVCcpO1xuICAgIHN1cHBvcnRlZEFjdGlvbnMucHVzaCgnRVhQT1JUX05FVEVYJyk7XG4gICAgY2hvdWV0dGVNYXBbJ1ZBTElEQVRJT05fTEVWRUxfMiddID0gJ3ZhbGlkYXRvcic7XG4gICAgY2hvdWV0dGVNYXBbJ0VYUE9SVCddID0gJ2V4cG9ydGVyJztcbiAgICBjaG91ZXR0ZU1hcFsnRVhQT1JUX05FVEVYJ10gPSAnZXhwb3J0ZXInO1xuICB9XG5cbiAgaWYgKGV2ZW50cy5zdGF0ZXMgJiYgZXZlbnRzLnN0YXRlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBlbmRTdGF0ZSA9IGV2ZW50cy5zdGF0ZXNbZXZlbnRzLnN0YXRlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAoc3VwcG9ydGVkQWN0aW9ucy5pbmRleE9mKGVuZFN0YXRlLmFjdGlvbikgPiAtMSAmJiBlbmRTdGF0ZS5jaG91ZXR0ZUpvYklkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2hvdWV0dGVMaW5rXG4gICAgICAgICAgYWN0aW9uPXtjaG91ZXR0ZU1hcFtlbmRTdGF0ZS5hY3Rpb25dfVxuICAgICAgICAgIGlkPXtlbmRTdGF0ZS5jaG91ZXR0ZUpvYklkfVxuICAgICAgICAgIHJlZmVyZW50aWFsPXtlbmRTdGF0ZS5yZWZlcmVudGlhbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9DaG91ZXR0ZUxpbms+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiA8ZGl2PiB7Y2hpbGRyZW59IDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZWRDaG91ZXR0ZUxpbms7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVkQ2hvdWV0dGVMaW5rLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFdmVudFN0ZXBwZXIgZnJvbSAnLi9FdmVudFN0ZXBwZXInO1xuaW1wb3J0ICcuL0V2ZW50RGV0YWlscy5jc3MnO1xuaW1wb3J0IEZhRnJlc2ggZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3JlZnJlc2gnO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgRmlsdGVyQnV0dG9uVHJheSBmcm9tICcuL0ZpbHRlckJ1dHRvblRyYXknO1xuaW1wb3J0IHsgZ2V0TGFzdFZhbGlkRGF0ZSB9IGZyb20gJy4vYnV0dG9uQ29uZmlnJztcblxuY2xhc3MgRXZlbnREZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogMCxcbiAgICAgIGVuZFN0YXRlRmlsdGVyOiAnQUxMJyxcbiAgICAgIGRhdGVGaWx0ZXI6IHByb3BzLnNob3dEYXRlRmlsdGVyID8gJ0xBU1RfMTJfSE9VUlMnIDogJ0FMTF9USU1FJyxcbiAgICAgIG9ubHlOZXdEZWxpdmVyeUZpbHRlcjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlUGFnZUNsaWNrKGUsIHBhZ2VJbmRleCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogcGFnZUluZGV4XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UoZGF0ZUZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0ZUZpbHRlcjogZGF0ZUZpbHRlcixcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogMFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsdGVyZWRTb3VyY2UoXG4gICAgZGF0YVNvdXJjZSxcbiAgICBkYXRlRmlsdGVyLFxuICAgIGVuZFN0YXRlRmlsdGVyLFxuICAgIG9ubHlOZXdEZWxpdmVyeUZpbHRlclxuICApIHtcbiAgICBjb25zdCBsYXN0RGF0ZSA9IGdldExhc3RWYWxpZERhdGUoZGF0ZUZpbHRlcik7XG5cbiAgICByZXR1cm4gKGRhdGFTb3VyY2UgfHwgW10pLmZpbHRlcihldmVudCA9PiB7XG4gICAgICBjb25zdCBhcHBsaWVkRmlsdGVyID0gW107XG5cbiAgICAgIC8qIEZpbHRlciBieSBkYXRlIGZyb20gcHJlLWRlZmluZWQgcGVyaW9kcyAqL1xuICAgICAgaWYgKGxhc3REYXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckJ5UGVyaW9kID0gbmV3IERhdGUoZXZlbnQuZmlyc3RFdmVudCkgPiBsYXN0RGF0ZTtcbiAgICAgICAgYXBwbGllZEZpbHRlci5wdXNoKGZpbHRlckJ5UGVyaW9kKTtcbiAgICAgIH1cblxuICAgICAgLyogRmlsdGVyIGJ5IGVuZCBzdGF0ZSBmcm9tIGRyb3Bkb3duICovXG4gICAgICBjb25zdCBlbmRTdGF0ZUZpbHRlckFwcGxpZWQgPVxuICAgICAgICBlbmRTdGF0ZUZpbHRlciA9PT0gJ0ZBSUxFRCcgfHxcbiAgICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdPSycgfHxcbiAgICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdDQU5DRUxMRUQnO1xuXG4gICAgICBpZiAoZW5kU3RhdGVGaWx0ZXJBcHBsaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckJ5RW5kU3RhdGUgPSBldmVudC5lbmRTdGF0ZSA9PT0gZW5kU3RhdGVGaWx0ZXI7XG4gICAgICAgIGFwcGxpZWRGaWx0ZXIucHVzaChmaWx0ZXJCeUVuZFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgLyogRmlsdGVyIGJ5IG9ubHkgbmV3IGRlbGl2ZXJpZXMgKi9cbiAgICAgIGNvbnN0IGNvbnRhaW5zRXZlbnRzID0gQXJyYXkuaXNBcnJheShldmVudC5ldmVudHMpICYmIGV2ZW50LmV2ZW50cy5sZW5ndGg7XG5cbiAgICAgIGlmIChjb250YWluc0V2ZW50cyAmJiBvbmx5TmV3RGVsaXZlcnlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyQnlOZXdEZWxpdmVyeSA9IGV2ZW50LmV2ZW50c1swXS5hY3Rpb24gPT09ICdGSUxFX1RSQU5TRkVSJztcbiAgICAgICAgYXBwbGllZEZpbHRlci5wdXNoKGZpbHRlckJ5TmV3RGVsaXZlcnkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXBwbGllZEZpbHRlci5ldmVyeShmaWx0ZXIgPT4gZmlsdGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhU291cmNlLFxuICAgICAgbG9jYWxlLFxuICAgICAgaW5jbHVkZUxldmVsMixcbiAgICAgIHNob3dEYXRlRmlsdGVyLFxuICAgICAgc2hvd05ld0RlbGl2ZXJpZXNGaWx0ZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBhY3RpdmVQYWdlSW5kZXgsXG4gICAgICBlbmRTdGF0ZUZpbHRlcixcbiAgICAgIGRhdGVGaWx0ZXIsXG4gICAgICBvbmx5TmV3RGVsaXZlcnlGaWx0ZXJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGZpbHRlcmVkU291cmNlID0gdGhpcy5nZXRGaWx0ZXJlZFNvdXJjZShcbiAgICAgIGRhdGFTb3VyY2UsXG4gICAgICBkYXRlRmlsdGVyLFxuICAgICAgZW5kU3RhdGVGaWx0ZXIsXG4gICAgICBvbmx5TmV3RGVsaXZlcnlGaWx0ZXJcbiAgICApO1xuICAgIGNvbnN0IHBhZ2luYXRpb25NYXAgPSBnZXRQYWdpbmF0aW9uTWFwKGZpbHRlcmVkU291cmNlKTtcblxuICAgIGNvbnN0IGZpbHRlcnMgPSAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzAuOWVtJyB9fVxuICAgICAgICAgIHZhbHVlPXtlbmRTdGF0ZUZpbHRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgZW5kU3RhdGVGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICBhY3RpdmVQYWdlSW5kZXg6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUxMXCI+e3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfYWxsfTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPS1wiPnt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zaG93X29ubHlfc3VjY2Vzc308L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0FOQ0VMTEVEXCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19vbmx5X2NhbmNlbGxlZH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRkFJTEVEXCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19vbmx5X2ZhaWxlZH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIHtzaG93RGF0ZUZpbHRlciAmJiAoXG4gICAgICAgICAgPEZpbHRlckJ1dHRvblRyYXlcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjAgfX1cbiAgICAgICAgICAgIGFjdGl2ZUJ1dHRvbklkPXt0aGlzLnN0YXRlLmRhdGVGaWx0ZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7c2hvd05ld0RlbGl2ZXJpZXNGaWx0ZXIgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAsIHBhZGRpbmdUb3A6IDIgfX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJkaXJlY3RfZGVsaXZlcnlcIlxuICAgICAgICAgICAgICBuYW1lPVwiZGlyZWN0X2RlbGl2ZXJ5XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17b25seU5ld0RlbGl2ZXJ5RmlsdGVyfVxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcwIDEwcHgnIH19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIG9ubHlOZXdEZWxpdmVyeUZpbHRlcjogZS50YXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2VJbmRleDogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlyZWN0X2RlbGl2ZXJ5XCI+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5maWx0ZXJfZGlyZWN0X2RlbGl2ZXJ5fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBjb25zdCBwYWdlID0gcGFnaW5hdGlvbk1hcFthY3RpdmVQYWdlSW5kZXhdO1xuXG4gICAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IHRoaXMucHJvcHMuaGFuZGxlUmVmcmVzaCAmJiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxNSwgZmxvYXQ6ICdyaWdodCcsIGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICA8RmFGcmVzaFxuICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3NjYWxlKDEuNSknIH19XG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVSZWZyZXNofVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGlmIChwYWdlICYmIHBhZ2UubGVuZ3RoICYmIHBhZ2luYXRpb25NYXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdsZWZ0JywgbWFyZ2luQm90dG9tOiA1IH19PlxuICAgICAgICAgICAge2ZpbHRlcnN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3JlZnJlc2hCdXR0b259XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxpbmstcGFyZW50XCI+XG4gICAgICAgICAgICA8c3Bhbj57dHJhbnNsYXRpb25zW2xvY2FsZV0ucGFnZX08L3NwYW4+XG4gICAgICAgICAgICB7cGFnaW5hdGlvbk1hcC5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID1cbiAgICAgICAgICAgICAgICBpbmRleCA9PSBhY3RpdmVQYWdlSW5kZXhcbiAgICAgICAgICAgICAgICAgID8gJ3BhZ2UtbGluayBhY3RpdmUtbGluaydcbiAgICAgICAgICAgICAgICAgIDogJ3BhZ2UtbGluayBpbmFjdGl2ZS1saW5rJztcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5oYW5kbGVQYWdlQ2xpY2soZSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAga2V5PXsnbGluay0nICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3BhZ2UubWFwKChsaXN0SXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGV2ZW50R3JvdXAgPSB7fTtcblxuICAgICAgICAgICAgICBsaXN0SXRlbS5ldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0pIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgZXZlbnRHcm91cFtldmVudC5hY3Rpb25dLnN0YXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0uc3RhdGVzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXS5lbmRTdGF0ZSA9IGV2ZW50LnN0YXRlO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17J2pvYnN0YXR1cy0nICsgbGlzdEl0ZW0uY2hvdWV0dGVKb2JJZCArICctJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RXZlbnRTdGVwcGVyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGVMZXZlbDI9e2luY2x1ZGVMZXZlbDJ9XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgICAgICAgICBrZXk9eydldmVudC1ncm91cC0nICsgbGlzdEl0ZW0uY2hvdWV0dGVKb2JJZCArICctJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICBncm91cHM9e2V2ZW50R3JvdXB9XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtPXtsaXN0SXRlbX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2xlZnQnLCBtYXJnaW5Cb3R0b206IDUgfX0+XG4gICAgICAgICAge2ZpbHRlcnN9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMCxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiA0MFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLm5vX3N0YXR1c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAxMCB9fT57cmVmcmVzaEJ1dHRvbn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBnZXRQYWdpbmF0aW9uTWFwID0gKHN0YXR1c0xpc3QgPSBbXSkgPT4ge1xuICBsZXQgcGFnaW5hdGlvbk1hcCA9IFtdO1xuXG4gIGlmIChzdGF0dXNMaXN0ICYmIHN0YXR1c0xpc3QubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSBzdGF0dXNMaXN0Lmxlbmd0aDsgaSA8IGo7IGkgKz0gMTApIHtcbiAgICAgIHBhZ2luYXRpb25NYXAucHVzaChzdGF0dXNMaXN0LnNsaWNlKGksIGkgKyAxMCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFnaW5hdGlvbk1hcDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGV0YWlscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWRFcnJvciBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvZXJyb3InO1xuaW1wb3J0IE1kRG9uZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvY2hlY2stY2lyY2xlJztcbmltcG9ydCBNZFNjaGVkdWxlIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9zY2hlZHVsZSc7XG5pbXBvcnQgRmFDb2cgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NvZyc7XG5pbXBvcnQgTWRIZWxwT3V0TGluZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvaGVscC1vdXRsaW5lJztcbmltcG9ydCBNZEhvdXIgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2hvdXJnbGFzcy1lbXB0eSc7XG5cbmNsYXNzIEV2ZW50U3RhdHVzSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMuc3RhdGUpIHtcbiAgICAgIGNhc2UgJ09LJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWREb25lXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ1BFTkRJTkcnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEhvdXJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ1NUQVJURUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGYUNvZ1xuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjMjI3NGI1Jywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0ZBSUxFRCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRXJyb3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0NBTkNFTExFRCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRXJyb3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0RVUExJQ0FURSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRXJyb3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0lHTk9SRUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZFNjaGVkdWxlXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSAnVElNRU9VVCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kU2NoZWR1bGVcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIDxNZEhlbHBPdXRMaW5lIHN0eWxlPXt7IGNvbG9yOiAnZ3JleScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiB9fSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFN0YXR1c0ljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudFN0YXR1c0ljb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBY3Rpb25UcmFuc2xhdGlvbnMgZnJvbSAnLi9hY3Rpb25UcmFuc2xhdGlvbnMnO1xuaW1wb3J0IEZhQ2hldnJvbkRvd24gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tZG93bic7XG5pbXBvcnQgRmFDaGV2cm9uVXAgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tdXAnO1xuaW1wb3J0IENvbnRyb2xsZWRDaG91ZXR0ZUxpbmsgZnJvbSAnLi9Db250cm9sbGVkQ2hvdWV0dGVMaW5rJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IEV2ZW50U3RhdHVzSWNvbiBmcm9tICcuL0V2ZW50U3RhdHVzSWNvbic7XG5cbmNsYXNzIEV2ZW50U3RlcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleHBhbmRlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBncm91cHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBsaXN0SXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgZXZlbnRTdGF0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdGSUxFX1RSQU5TRkVSJyxcbiAgICAgICdGSUxFX0NMQVNTSUZJQ0FUSU9OJyxcbiAgICAgICdGSUxFX0RFTElWRVJZJyxcbiAgICAgICdJTVBPUlQnLFxuICAgICAgJ1ZBTElEQVRJT05fTEVWRUxfMScsXG4gICAgICAnREFUQVNQQUNFX1RSQU5TRkVSJyxcbiAgICAgICdWQUxJREFUSU9OX0xFVkVMXzInLFxuICAgICAgJ0VYUE9SVCcsXG4gICAgICAnQlVJTERfR1JBUEgnLFxuICAgICAgJ09UUDJfQlVJTERfR1JBUEgnLFxuICAgICAgJ0VYUE9SVF9ORVRFWCdcbiAgICBdO1xuICB9XG5cbiAgYWRkVW5saXN0ZWRTdGF0ZXMoZ3JvdXBzKSB7XG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5ldmVudFN0YXRlcygpO1xuXG4gICAgbGV0IGdyb3Vwc1dpdGhVbmxpc3RlZCA9IE9iamVjdC5hc3NpZ24oe30sIGdyb3Vwcyk7XG5cbiAgICBsZXQgZmlyc3RTdGF0ZUZvdW5kID0gZmFsc2U7XG5cbiAgICBzdGF0ZXMuZm9yRWFjaChzdGF0ZSA9PiB7XG4gICAgICBpZiAoIWdyb3Vwc1dpdGhVbmxpc3RlZFtzdGF0ZV0pIHtcbiAgICAgICAgZ3JvdXBzV2l0aFVubGlzdGVkW3N0YXRlXSA9IHtcbiAgICAgICAgICBlbmRTdGF0ZTogJ0lHTk9SRUQnLFxuICAgICAgICAgIG1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0OiAhZmlyc3RTdGF0ZUZvdW5kXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXJzdFN0YXRlRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGZpbmFsR3JvdXBzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHNXaXRoVW5saXN0ZWQpXG4gICAgICAuc29ydCgoa2V5MSwga2V5MikgPT4gc3RhdGVzLmluZGV4T2Yoa2V5MSkgLSBzdGF0ZXMuaW5kZXhPZihrZXkyKSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGZpbmFsR3JvdXBzW2tleV0gPSBncm91cHNXaXRoVW5saXN0ZWRba2V5XTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBmaW5hbEdyb3VwcztcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWRcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNvbWJpbmVkU3BsaXQoZm9ybWF0dGVkR3JvdXBzLCBncm91cHMsIG5hbWUpIHtcbiAgICBjb25zdCBjb21iaW5lZCA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gZ3JvdXBzKSB7XG4gICAgICBjb25zdCBncm91cCA9IGdyb3Vwc1tpXTtcbiAgICAgIGNvbWJpbmVkW2dyb3VwXSA9IGZvcm1hdHRlZEdyb3Vwc1tncm91cF07XG5cbiAgICAgIGlmIChuYW1lICE9PSBncm91cCkge1xuICAgICAgICBkZWxldGUgZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9ybWF0dGVkR3JvdXBzW25hbWVdID0gY29tYmluZWQ7XG4gIH1cblxuICBhZ2dyZWdnYXRlRmlsZUV2ZW50cyhkYXRhKSB7XG4gICAgbGV0IGdyb3VwcyA9IHsgLi4uZGF0YSB9O1xuICAgIGxldCBlbmRTdGF0ZSA9IG51bGw7XG4gICAgbGV0IGVycm9yT24gPSBudWxsO1xuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICBpZiAoZ3JvdXAgPT09ICdGSUxFX0NMQVNTSUZJQ0FUSU9OJyB8fCBncm91cCA9PT0gJ0ZJTEVfVFJBTlNGRVInKSB7XG4gICAgICAgIGVuZFN0YXRlID0gZ3JvdXBzW2dyb3VwXS5lbmRTdGF0ZTtcblxuICAgICAgICBpZiAoZW5kU3RhdGUgPT09ICdGQUlMRUQnIHx8IGVuZFN0YXRlID09PSAnRFVQTElDQVRFJykge1xuICAgICAgICAgIGVycm9yT24gPSBncm91cDtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgZ3JvdXBzW2dyb3VwXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChlbmRTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgZ3JvdXBzLkZJTEVfREVMSVZFUlkgPSB7XG4gICAgICAgIGVuZFN0YXRlOiBlcnJvck9uID8gJ0ZBSUxFRCcgOiBlbmRTdGF0ZSxcbiAgICAgICAgZXJyb3JPbixcbiAgICAgICAgbWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQ6IGVuZFN0YXRlID09ICdJR05PUkVEJyAmJiAhZXJyb3JPblxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuXG4gIGJ1bGxldChmb3JtYXR0ZWRHcm91cHMsIGdyb3VwcywgbG9jYWxlLCBpbmNsdWRlTGV2ZWwyKSB7XG4gICAgY29uc3QgY29sdW1uU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBoZWlnaHQ6IDQ1XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhmb3JtYXR0ZWRHcm91cHMpLm1hcCgoZ3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY29sdW1uO1xuICAgICAgbGV0IGV2ZW50ID0gZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICAgIGNvbHVtbiA9IE9iamVjdC5rZXlzKGV2ZW50KS5tYXAoKGtleSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckV2ZW50KFxuICAgICAgICAgICAgZXZlbnRba2V5XSxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgIGluY2x1ZGVMZXZlbDJcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbiA9IHRoaXMucmVuZGVyRXZlbnQoXG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgZ3JvdXBzLFxuICAgICAgICAgIGdyb3VwLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGluZGV4ID09PSAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIGluY2x1ZGVMZXZlbDJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXsnYnVsbGV0LScgKyBpbmRleH0gc3R5bGU9e2NvbHVtblN0eWxlfT5cbiAgICAgICAgICB7Y29sdW1ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJFdmVudChcbiAgICBldmVudCxcbiAgICBncm91cHMsXG4gICAgZ3JvdXAsXG4gICAgaW5kZXgsXG4gICAgaXNGaXJzdCxcbiAgICBjb2x1bW5JbmRleCA9IDAsXG4gICAgbG9jYWxlLFxuICAgIGluY2x1ZGVMZXZlbDJcbiAgKSB7XG4gICAgY29uc3QgZ3JvdXBTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnXG4gICAgfTtcblxuICAgIGNvbnN0IGdyb3VwVGV4dCA9IHtcbiAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgbWFyZ2luTGVmdDogNVxuICAgIH07XG5cbiAgICBjb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMTg5LCAxODksIDE4OSknLFxuICAgICAgbWFyZ2luTGVmdDogLTYsXG4gICAgICBib3JkZXJUb3BTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAxLFxuICAgICAgd2lkdGg6IDMwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcbiAgICAgIG1hcmdpbjogOCxcbiAgICAgIHRyYW5zZm9ybTogY29sdW1uSW5kZXggPiAwICYmICd0cmFuc2xhdGVZKC0wLjVlbSkgcm90YXRlKDI1ZGVnKSAnXG4gICAgfTtcblxuICAgIGlmICghQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uc3RhdGVzW2V2ZW50LmVuZFN0YXRlXSkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgdG9vbFRpcFRleHQgPSBBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5zdGF0ZXNbZXZlbnQuZW5kU3RhdGVdO1xuXG4gICAgaWYgKGV2ZW50LnN0YXRlcyAmJiBldmVudC5zdGF0ZXNbZ3JvdXBzW2dyb3VwXS5zdGF0ZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIHRvb2xUaXBUZXh0ICs9ICcgJyArIGV2ZW50LnN0YXRlc1tldmVudC5zdGF0ZXMubGVuZ3RoIC0gMV0uZGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZXJyb3JPbikge1xuICAgICAgdG9vbFRpcFRleHQgPSBBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5lcnJvck1lc3NhZ2VbZXZlbnQuZXJyb3JPbl07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e2dyb3VwU3R5bGV9IGtleT17J2dyb3VwLScgKyBncm91cCArIGluZGV4fT5cbiAgICAgICAgeyFpc0ZpcnN0ICYmIDxkaXYgc3R5bGU9e2xpbmtTdHlsZX0gLz59XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB0aXRsZT17dG9vbFRpcFRleHR9XG4gICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogZXZlbnQubWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQgPyAwLjIgOiAxIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RXZlbnRTdGF0dXNJY29uIHN0YXRlPXtldmVudC5lbmRTdGF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uZ3JvdXBUZXh0LFxuICAgICAgICAgICAgb3BhY2l0eTogZXZlbnQubWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQgPyAwLjIgOiAxXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb250cm9sbGVkQ2hvdWV0dGVMaW5rIGluY2x1ZGVMZXZlbDI9e2luY2x1ZGVMZXZlbDJ9IGV2ZW50cz17ZXZlbnR9PlxuICAgICAgICAgICAge0FjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLnRleHRbZ3JvdXBdfVxuICAgICAgICAgIDwvQ29udHJvbGxlZENob3VldHRlTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0ZXBwZXJzdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiAxMFxuICAgIH07XG5cbiAgICBjb25zdCB7IGdyb3VwcywgbGlzdEl0ZW0sIGxvY2FsZSwgaW5jbHVkZUxldmVsMiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGZvcm1hdHRlZEdyb3VwcyA9IHRoaXMuYWRkVW5saXN0ZWRTdGF0ZXMoZ3JvdXBzKTtcbiAgICBmb3JtYXR0ZWRHcm91cHMgPSB0aGlzLmFnZ3JlZ2dhdGVGaWxlRXZlbnRzKGZvcm1hdHRlZEdyb3Vwcyk7XG4gICAgdGhpcy5jcmVhdGVDb21iaW5lZFNwbGl0KFxuICAgICAgZm9ybWF0dGVkR3JvdXBzLFxuICAgICAgWydFWFBPUlRfTkVURVgnLCAnRVhQT1JUJ10sXG4gICAgICAnRVhQT1JUJ1xuICAgICk7XG5cbiAgICB0aGlzLmNyZWF0ZUNvbWJpbmVkU3BsaXQoXG4gICAgICBmb3JtYXR0ZWRHcm91cHMsXG4gICAgICBbJ0JVSUxEX0dSQVBIJywgJ09UUDJfQlVJTERfR1JBUEgnXSxcbiAgICAgICdCVUlMRF9HUkFQSCdcbiAgICApO1xuXG4gICAgY29uc3QgYnVsbGV0cyA9IHRoaXMuYnVsbGV0KGZvcm1hdHRlZEdyb3VwcywgZ3JvdXBzLCBsb2NhbGUsIGluY2x1ZGVMZXZlbDIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXsnZXZlbnQnICsgbGlzdEl0ZW0uY2hvdWV0dGVKb2JJZH1cbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnYXV0bycsIHdpZHRoOiAnOTglJywgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVUb2dnbGVWaXNpYmlsaXR5KCl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5MZWZ0OiAtMTUgfX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgdGl0bGU9e3RyYW5zbGF0aW9uc1tsb2NhbGVdLmR1cmF0aW9uICsgbGlzdEl0ZW0uZHVyYXRpb259XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICBjb2xvcjogJyNlNTk0MDAnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IC04LFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMjBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xpc3RJdGVtLnN0YXJ0ZWR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2xpc3RJdGVtLnByb3ZpZGVyICYmXG4gICAgICAgICAgICBsaXN0SXRlbS5wcm92aWRlci5uYW1lICYmIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuOGVtJywgZm9udFdlaWdodDogNjAwLCBmbGV4OiAxIH19PlxuICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5wcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuOWVtJywgZm9udFdlaWdodDogNjAwLCBmbGV4OiAyIH19PlxuICAgICAgICAgICAge2xpc3RJdGVtLmZpbGVOYW1lIHx8IEFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLmZpbGVuYW1lLnVuZGVmaW5lZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0ZXBwZXJzdHlsZX0+XG4gICAgICAgICAge2J1bGxldHN9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBtYXJnaW5SaWdodDogMjAsIG1hcmdpblRvcDogLTUwIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWV4cGFuZGVkID8gPEZhQ2hldnJvbkRvd24gLz4gOiA8RmFDaGV2cm9uVXAgLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZXhwYW5kZWQgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogOCxcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xpc3RJdGVtLmVycm9yQ29kZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5SaWdodDogMTAsIGNvbG9yOiAncmVkJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5lcnJvckNvZGVbbGlzdEl0ZW0uZXJyb3JDb2RlXX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zdGFydGVkfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbS5maXJzdEV2ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uZW5kZWR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmxhc3RFdmVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLmR1cmF0aW9ufVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbS5kdXJhdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0udXNlcm5hbWV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS51c2VybmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U3RlcHBlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50U3RlcHBlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZpbHRlckJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIGNvbnN0IHsgaGFuZGxlQ2xpY2ssIGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChoYW5kbGVDbGljayAmJiB0eXBlb2YgaGFuZGxlQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGhhbmRsZUNsaWNrKGlkKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgYWN0aXZlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFjdGl2ZVN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJyMyMTk2RjMnLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMTU1OTlkJ1xuICAgIH07XG4gICAgY29uc3QgaW5hY3RpdmVTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2Q4ZDhkOCdcbiAgICB9O1xuICAgIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAgICAgIHBhZGRpbmc6ICcwLjJlbSAwLjRlbScsXG4gICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNSUnLFxuICAgICAgbWluV2lkdGg6IDQwLFxuICAgICAgbWFyZ2luTGVmdDogMTBcbiAgICB9O1xuXG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgZGVmYXVsdFN0eWxlLFxuICAgICAgYWN0aXZlID8gYWN0aXZlU3R5bGUgOiBpbmFjdGl2ZVN0eWxlXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiAnbm9uZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsdGVyQnV0dG9uIGZyb20gJy4vRmlsdGVyQnV0dG9uJztcbmltcG9ydCBidXR0b25Db25maWcgZnJvbSAnLi9idXR0b25Db25maWcnO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL2FjdGlvblRyYW5zbGF0aW9ucyc7XG5cbmNsYXNzIEZpbHRlckJ1dHRvblRyYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvY2FsZSwgYWN0aXZlQnV0dG9uSWQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICB7YnV0dG9uQ29uZmlnLmZpZWxkcy5tYXAoZmllbGQgPT5cbiAgICAgICAgICA8RmlsdGVyQnV0dG9uXG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUJ1dHRvbklkID09PSBmaWVsZC5pZH1cbiAgICAgICAgICAgIGlkPXtmaWVsZC5pZH1cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiB7IG9uQ2hhbmdlKGZpZWxkLmlkKSB9fVxuICAgICAgICAgICAga2V5PXsnZmlsdGVyLWJ1dHRvbi0nICsgZmllbGQuaWR9XG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRpb25zW2xvY2FsZV0uZmlsdGVyQnV0dG9uW2ZpZWxkLmlkXX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCdXR0b25UcmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uVHJheS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29sb3IsIGRpbWVuc2lvbiB9IGZyb20gJy4uL3N0eWxlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXJUaW1lbGluZS5jc3MnO1xuXG5jbGFzcyBIZWFkZXJUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaG92ZXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWxpZERheXNPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWxpZEZyb21EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZWZmZWN0aXZlUGVyaW9kczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVRvb2xUaXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93VG9vbHRpcDogIXRoaXMuc3RhdGUuc2hvd1Rvb2x0aXBcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVmZmVjdGl2ZVBlcmlvZHMsIHZhbGlkRGF5c09mZnNldCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgaGVpZ2h0OiAnMThweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICB3aWR0aDogZGltZW5zaW9uLnRpbWVMaW5lV2lkdGggKyAnJScsXG4gICAgICBtYXJnaW46ICcxMHB4IGF1dG8nLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGZvbnRTaXplOiAnMCUnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9O1xuXG4gICAgbGV0IHRpbWVsaW5lV3JhcHBlciA9IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW5Cb3R0b206IDJcbiAgICB9O1xuXG4gICAgbGV0IHRpbWVCbG9jayA9IHtcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lU3VjY2VzcyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBmb250U2l6ZTogJzAuOHJlbScsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9O1xuXG4gICAgY29uc3QgdGl0bGVUZXh0ID0ge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEwcHgsIDIwcHgpJyxcbiAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxuICAgICAgY29sb3I6IGVmZmVjdGl2ZVBlcmlvZHMubGVuZ3RoID8gY29sb3IuZWZmZWN0aXZlIDogY29sb3IuZmFpbCxcbiAgICAgIHpJbmRleDogOTlcbiAgICB9O1xuXG4gICAgY29uc3QgdG9vbFRpcFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAxcycsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICAgIGZvbnRTaXplOiAnMC44ZW0nLFxuICAgICAgY29sb3I6IGNvbG9yLmZvbnQudG9vbHRpcCxcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRvb2x0aXAsXG4gICAgICBwYWRkaW5nOiAxMCxcbiAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICB6SW5kZXg6IDk5XG4gICAgfTtcblxuICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICB0ZXh0U2hhZG93OiAnMHB4IDBweCA1cHggYmxhY2snLFxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIGhlaWdodDogMTgsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcydcbiAgICB9O1xuXG4gICAgbGV0IGhyU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgaGVpZ2h0OiAnMThweCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG1hcmdpbkxlZnQ6IDMzICsgdmFsaWREYXlzT2Zmc2V0ICsgJyUnXG4gICAgfTtcblxuICAgIGxldCBob3ZlclRleHQgPSBlZmZlY3RpdmVQZXJpb2RzLmxlbmd0aFxuICAgICAgPyB0aGlzLnByb3BzLmhvdmVyVGV4dFxuICAgICAgOiAnVWd5bGRpZyBsaW5qZS4gTWFuZ2xlciBkYXRhJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVdyYXBwZXJ9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3RpdGxlVGV4dH1cbiAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5oYW5kbGVUb2dnbGVUb29sVGlwLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZVRvZ2dsZVRvb2xUaXAuYmluZCh0aGlzKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxpbmV9XG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1Rvb2x0aXAgJiZcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Rvb2xUaXBTdHlsZX0+IHtob3ZlclRleHR9IDwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmV9IHN0eWxlPXt0aW1lbGluZVN0eWxlfT5cbiAgICAgICAgICA8ZGl2IGtleT17J3RpbWVsaW5lLWhlYWRlci13cmFwcGVyJyArIHRoaXMucHJvcHMuaW5kZXh9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17aHJTdHlsZX0gLz5cbiAgICAgICAgICAgIHtlZmZlY3RpdmVQZXJpb2RzLm1hcCgoZWZmZWN0aXZlUGVyaW9kLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgcGVyaW9kQmxvY2sgPSB7IC4uLnRpbWVCbG9jayB9O1xuICAgICAgICAgICAgICBwZXJpb2RCbG9jay53aWR0aCA9XG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gLVxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gK1xuICAgICAgICAgICAgICAgICclJztcblxuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID1cbiAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJSc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9XG4gICAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uIC1cbiAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZHNbaW5kZXggLSAxXS50aW1lbGluZUVuZFBvc2l0aW9uICtcbiAgICAgICAgICAgICAgICAgICclJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBpdGVtVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZC50bztcblxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA+IDAgJiZcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QuZnJvbS5sb2NhbGVDb21wYXJlKGVmZmVjdGl2ZVBlcmlvZC50bykgIT09IDBcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaXRlbVRleHQgPSBlZmZlY3RpdmVQZXJpb2QuZnJvbSArICcgLSAnICsgZWZmZWN0aXZlUGVyaW9kLnRvO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17J3RpbWVsaW5lLWhlYWRlci1ibG9jaycgKyBpbmRleH0gc3R5bGU9e3BlcmlvZEJsb2NrfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2QtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW1UZXh0fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1UZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUaW1lbGluZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb2xvciwgZGltZW5zaW9uIH0gZnJvbSAnLi4vc3R5bGVzJztcblxuY29uc3QgcGVyaW9kID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgZnJvbTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0bzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aW1lbGluZVN0YXJ0UG9zaXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGltZWxpbmVFbmRQb3NpdGlvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59KTtcblxuY29uc3QgdGltZXRhYmxlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgb2JqZWN0SWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGVyaW9kczogUHJvcFR5cGVzLmFycmF5T2YocGVyaW9kKS5pc1JlcXVpcmVkXG59KS5pc1JlcXVpcmVkO1xuXG5jbGFzcyBUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGltZXRhYmxlczogUHJvcFR5cGVzLmFycmF5T2YodGltZXRhYmxlKS5pc1JlcXVpcmVkLFxuICAgIGlzTGFzdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICB2YWxpZERheXNPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpbWV0YWJsZXMsIHZhbGlkRGF5c09mZnNldCwgaXNMYXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUJhY2tncm91bmQsXG4gICAgICB3aWR0aDogZGltZW5zaW9uLnRpbWVMaW5lV2lkdGggKyAnJScsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfTtcblxuICAgIGNvbnN0IHRpbWVsaW5lV3JhcHBlciA9IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwYWRkaW5nQm90dG9tOiBpc0xhc3QgPyAwIDogMTBcbiAgICB9O1xuXG4gICAgbGV0IHRpbWVCbG9jayA9IHtcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgIH07XG5cbiAgICBsZXQgdGV4dFN0eWxlID0ge1xuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBvdmVyZmxvdzogJ3Zpc2JsZScsXG4gICAgICB0ZXh0U2hhZG93OiAnMHB4IDBweCA1cHggYmxhY2snLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8gMTBweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgZm9udFNpemU6ICcwLjdlbScsXG4gICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICB9O1xuXG4gICAgbGV0IGhyU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH07XG5cbiAgICBoclN0eWxlLm1hcmdpbkxlZnQgPSAzMyArIHZhbGlkRGF5c09mZnNldCArICclJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVdyYXBwZXJ9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVN0eWxlfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtoclN0eWxlfSAvPlxuICAgICAgICAgIHt0aW1ldGFibGVzLm1hcCh0aW1ldGFibGUgPT5cbiAgICAgICAgICAgIHRpbWV0YWJsZS5wZXJpb2RzLm1hcCgocGVyaW9kLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpbWV0YWJsZS5vYmplY3RJZDtcbiAgICAgICAgICAgICAgY29uc3QgaG92ZXIgPSBgJHt0aXRsZX0gXFxuKHBlcmlvZDogJHtwZXJpb2QuZnJvbX0gLT4gJHtwZXJpb2QudG99KWA7XG4gICAgICAgICAgICAgIGxldCBwZXJpb2RCbG9jayA9IHsgLi4udGltZUJsb2NrIH07XG4gICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID1cbiAgICAgICAgICAgICAgICBwZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAtIHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJSc7XG4gICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPSBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17J3RpbWV0YWJsZS1wZXJpb2QtJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17cGVyaW9kQmxvY2t9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtob3Zlcn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFN0eWxlfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vZWFybHlhY2Nlc3Mvbm90b3NhbnNrYW5uYWRhLmNzcyk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS2FubmFkYScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMTkxOTE5O1xcbn1cXG5cXG5wLGgxLGgyLGgzLGg0LGg1LCBzcGFuIHtcXG4gICAgY29sb3I6ICMxOTE5MTk7XFxufVxcblxcbi5fMnBPWlQ2T0V3UjJ2X2NpNzJXNGtvQjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm1TR0tWbG1jV0VTYnhFSHI3QmF6MiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uXzFoOUFHLVZXeF9VNDBUeFZFMDE1NUsge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG4uXzFqTi1ON3lmU0tZaDFLVXpyYXM0bFoge1xcbiAgICBjb2xvcjogIzBEM0M2MTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5fMjFwNTVWTV9lNzVfMmlCaXJXMU1rZiB7XFxuICAgIGNvbG9yOiAjMjE5NkYzO1xcbn1cXG5cXG5cXG5hIHtcXG4gICAgY29sb3I6ICMyMTk2RjM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciwgYTpmb2N1cyB7XFxuICAgIGNvbG9yOiAjMTk3NkQyO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwZXJpb2QtYmxvY2tcIjogXCJfMnBPWlQ2T0V3UjJ2X2NpNzJXNGtvQlwiLFxuXHRcInBhZ2UtbGluay1wYXJlbnRcIjogXCJtU0dLVmxtY1dFU2J4RUhyN0JhejJcIixcblx0XCJwYWdlLWxpbmtcIjogXCJfMWg5QUctVld4X1U0MFR4VkUwMTU1S1wiLFxuXHRcImFjdGl2ZS1saW5rXCI6IFwiXzFqTi1ON3lmU0tZaDFLVXpyYXM0bFpcIixcblx0XCJpbmFjdGl2ZS1saW5rXCI6IFwiXzIxcDU1Vk1fZTc1XzJpQmlyVzFNa2ZcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9tb2R1bGVzPXRydWUhLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5fMnRVLWY4NmZfNDJnMXBWVlFaWEZYQyB7XFxuICBiYWNrZ3JvdW5kOiAjQjkxOTE5O1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjZjZmNmY2KSwgY29sb3Itc3RvcCgxMDAlLCAjZjZmNmY2KSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI2Y2ZjZmNiksIGNvbG9yLXN0b3AoMTAwJSwgI2Y2ZjZmNikpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0aW1lbGluZVwiOiBcIl8ydFUtZjg2Zl80MmcxcFZWUVpYRlhDXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcz10cnVlIS4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNoZXZyb25Eb3duID0gZnVuY3Rpb24gRmFDaGV2cm9uRG93bihwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNy42IDE4bC0xNi42IDE2LjZxLTAuNCAwLjQtMSAwLjR0LTEtMC40bC0xNi42LTE2LjZxLTAuNC0wLjQtMC40LTF0MC40LTFsMy43LTMuN3EwLjUtMC40IDEtMC40dDEgMC40bDExLjkgMTEuOSAxMS45LTExLjlxMC40LTAuNCAxLTAuNHQxIDAuNGwzLjcgMy43cTAuNCAwLjQgMC40IDF0LTAuNCAxeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYUNoZXZyb25Eb3duO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLWRvd24uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNoZXZyb25VcCA9IGZ1bmN0aW9uIEZhQ2hldnJvblVwKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTM3LjYgMjkuN2wtMy43IDMuN3EtMC41IDAuNC0xIDAuNHQtMS0wLjRsLTExLjktMTEuOS0xMS44IDExLjlxLTAuNSAwLjQtMS4xIDAuNHQtMS0wLjRsLTMuNy0zLjdxLTAuNC0wLjQtMC40LTF0MC40LTFsMTYuNi0xNi42cTAuNC0wLjQgMS0wLjR0MSAwLjRsMTYuNiAxNi42cTAuNCAwLjQgMC40IDF0LTAuNCAxeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYUNoZXZyb25VcDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi11cC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhQ29nID0gZnVuY3Rpb24gRmFDb2cocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjUuOSAyMHEwLTIuNC0xLjctNHQtNC4xLTEuNy00IDEuNy0xLjcgNCAxLjcgNCA0IDEuNyA0LjEtMS43IDEuNy00eiBtMTEuNC0yLjR2NC45cTAgMC4zLTAuMiAwLjV0LTAuNCAwLjNsLTQuMiAwLjZxLTAuNCAxLjMtMC44IDIuMSAwLjcgMS4xIDIuMyAzLjEgMC4zIDAuMiAwLjMgMC41dC0wLjIgMC41cS0wLjYgMC45LTIuMiAyLjR0LTIuMSAxLjZxLTAuMyAwLTAuNi0wLjJsLTMuMS0yLjRxLTEgMC41LTIgMC45LTAuNCAzLTAuNyA0LjEtMC4xIDAuNi0wLjggMC42aC00LjlxLTAuMyAwLTAuNi0wLjF0LTAuMi0wLjVsLTAuNy00LjFxLTEuMS0wLjQtMi0wLjlsLTMuMSAyLjRxLTAuMiAwLjItMC42IDAuMi0wLjMgMC0wLjUtMC4yLTIuOC0yLjYtMy43LTMuOC0wLjItMC4yLTAuMi0wLjUgMC0wLjIgMC4yLTAuNSAwLjMtMC41IDEuMS0xLjV0MS4yLTEuNXEtMC42LTEuMi0wLjktMi4zbC00LjEtMC42cS0wLjIgMC0wLjQtMC4ydC0wLjItMC42di00LjlxMC0wLjMgMC4yLTAuNXQwLjQtMC4zbDQuMi0wLjdxMC4zLTEgMC44LTItMC45LTEuMy0yLjQtMy4xLTAuMi0wLjMtMC4yLTAuNSAwLTAuMiAwLjItMC41IDAuNi0wLjggMi4yLTIuNHQyLjEtMS42cTAuMyAwIDAuNiAwLjJsMy4xIDIuNHExLTAuNSAyLTAuOSAwLjQtMyAwLjctNC4xIDAuMS0wLjYgMC44LTAuNmg0LjlxMC4zIDAgMC42IDAuMXQwLjIgMC41bDAuNyA0LjFxMSAwLjQgMiAwLjlsMy4xLTIuNHEwLjItMC4yIDAuNi0wLjIgMC4zIDAgMC41IDAuMiAyLjkgMi42IDMuNyAzLjggMC4yIDAuMiAwLjIgMC41IDAgMC4yLTAuMiAwLjUtMC40IDAuNS0xLjIgMS41dC0xLjIgMS41cTAuNiAxLjIgMSAyLjJsNCAwLjdxMC4zIDAgMC41IDAuMnQwLjIgMC42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYUNvZztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvZmEvY29nLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFSZWZyZXNoID0gZnVuY3Rpb24gRmFSZWZyZXNoKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTM2LjcgMjMuNnEwIDAuMSAwIDAuMS0xLjQgNi02IDkuN3QtMTAuNiAzLjdxLTMuMyAwLTYuNC0xLjJ0LTUuNC0zLjVsLTIuOSAyLjlxLTAuNCAwLjQtMSAwLjR0LTEtMC40LTAuNC0xdi0xMHEwLTAuNiAwLjQtMXQxLTAuNGgxMHEwLjYgMCAxIDAuNHQwLjUgMS0wLjUgMWwtMyAzcTEuNiAxLjUgMy42IDIuM3Q0LjEgMC44cTMgMCA1LjYtMS40dDQuMi00cTAuMi0wLjQgMS4yLTIuNiAwLjEtMC41IDAuNi0wLjVoNC4zcTAuMyAwIDAuNSAwLjJ0MC4yIDAuNXogbTAuNi0xNy45djEwcTAgMC42LTAuNCAxdC0xIDAuNGgtMTBxLTAuNiAwLTEtMC40dC0wLjUtMSAwLjUtMWwzLTMuMXEtMy4zLTMtNy44LTMtMi45IDAtNS41IDEuNHQtNC4yIDRxLTAuMiAwLjQtMS4yIDIuNi0wLjIgMC41LTAuNiAwLjVoLTQuNXEtMC4zIDAtMC41LTAuMnQtMC4yLTAuNXYtMC4xcTEuNS02IDYtOS43dDEwLjctMy43cTMuMyAwIDYuNCAxLjJ0NS40IDMuNWwzLTIuOXEwLjQtMC40IDEtMC40dDEgMC40IDAuNCAxeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYVJlZnJlc2g7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL3JlZnJlc2guanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZENoZWNrQ2lyY2xlID0gZnVuY3Rpb24gTWRDaGVja0NpcmNsZShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20xNi42IDI4LjRsMTUtMTUtMi4zLTIuNS0xMi43IDEyLjctNS45LTUuOS0yLjMgMi4zeiBtMy40LTI1YzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kQ2hlY2tDaXJjbGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kRXJyb3IgPSBmdW5jdGlvbiBNZEVycm9yKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIxLjYgMjEuNnYtMTBoLTMuMnYxMGgzLjJ6IG0wIDYuOHYtMy40aC0zLjJ2My40aDMuMnogbS0xLjYtMjVjOS4yIDAgMTYuNiA3LjQgMTYuNiAxNi42cy03LjQgMTYuNi0xNi42IDE2LjYtMTYuNi03LjQtMTYuNi0xNi42IDcuNC0xNi42IDE2LjYtMTYuNnonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWRFcnJvcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvbWQvZXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEhlbHBPdXRsaW5lID0gZnVuY3Rpb24gTWRIZWxwT3V0bGluZShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMCAxMGMzLjcgMCA2LjYgMyA2LjYgNi42IDAgNC4yLTUgNC43LTUgOC40aC0zLjJjMC01LjQgNS01IDUtOC40IDAtMS44LTEuNi0zLjItMy40LTMuMnMtMy40IDEuNC0zLjQgMy4yaC0zLjJjMC0zLjYgMi45LTYuNiA2LjYtNi42eiBtMCAyMy40YzcuMyAwIDEzLjQtNi4xIDEzLjQtMTMuNHMtNi4xLTEzLjQtMTMuNC0xMy40LTEzLjQgNi4xLTEzLjQgMTMuNCA2LjEgMTMuNCAxMy40IDEzLjR6IG0wLTMwYzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6IG0tMS42IDI2LjZ2LTMuNGgzLjJ2My40aC0zLjJ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kSGVscE91dGxpbmU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2hlbHAtb3V0bGluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kSG91cmdsYXNzRW1wdHkgPSBmdW5jdGlvbiBNZEhvdXJnbGFzc0VtcHR5KHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIwIDE5LjFsNi42LTYuNnYtNS45aC0xMy4ydjUuOXogbTYuNiA4LjRsLTYuNi02LjYtNi42IDYuNnY1LjloMTMuMnYtNS45eiBtLTE2LjYtMjQuMWgyMHYxMGwtNi42IDYuNiA2LjYgNi42djEwaC0yMHYtMTBsNi42LTYuNi02LjYtNi42di0xMHonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWRIb3VyZ2xhc3NFbXB0eTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvbWQvaG91cmdsYXNzLWVtcHR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRTY2hlZHVsZSA9IGZ1bmN0aW9uIE1kU2NoZWR1bGUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjAuOSAxMS42djguOGw3LjUgNC40LTEuMyAyLjItOC43LTUuNHYtMTBoMi41eiBtLTAuOSAyMS44YzcuMyAwIDEzLjQtNi4xIDEzLjQtMTMuNHMtNi4xLTEzLjQtMTMuNC0xMy40LTEzLjQgNi4xLTEzLjQgMTMuNCA2LjEgMTMuNCAxMy40IDEzLjR6IG0wLTMwYzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kU2NoZWR1bGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL3NjaGVkdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvZml4VXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vRXZlbnREZXRhaWxzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vRXZlbnREZXRhaWxzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vSGVhZGVyVGltZWxpbmUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vSGVhZGVyVGltZWxpbmUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==