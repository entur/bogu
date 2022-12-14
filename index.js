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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
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
  module.exports = __webpack_require__(24)();
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
      PREVALIDATION: 'Prevalidering',
      IMPORT: 'Import',
      EXPORT: 'GTFS-eksport',
      EXPORT_NETEX: 'NeTEx-eksport',
      VALIDATION_LEVEL_1: 'Validering nivå 1',
      DATASPACE_TRANSFER: 'Overføring sentral database',
      VALIDATION_LEVEL_2: 'Validering nivå 2',
      EXPORT_NETEX_POSTVALIDATION: 'Postvalidering',
      EXPORT_NETEX_MERGED_POSTVALIDATION: 'Validering av sammenslått datasett',
      BUILD_GRAPH: 'Bygg av reisesøkforslag (otp1)',
      OTP2_BUILD_GRAPH: 'Bygg av reisesøkforslag (otp2)',
      EXPORT_NETEX_BLOCKS: 'Eksport av NeTEx blocks',
      EXPORT_NETEX_BLOCKS_POSTVALIDATION: 'NeTEx blocks postvalidering',
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
      EXPORT_NETEX_BLOCKS: 'Eksport av NeTEx blocks',
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
      ERROR_FILE_DUPLICATE: 'Samme fil ble allerede importert',
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
      PREVALIDATION: 'Pre-validation',
      IMPORT: 'Import',
      EXPORT: 'GTFS export',
      EXPORT_NETEX: 'NeTEx export',
      VALIDATION_LEVEL_1: 'Validation level 1',
      DATASPACE_TRANSFER: 'Transfer to central space',
      VALIDATION_LEVEL_2: 'Validation level 2',
      EXPORT_NETEX_POSTVALIDATION: 'Post-validation',
      EXPORT_NETEX_MERGED_POSTVALIDATION: 'Merged dataset validation',
      BUILD_GRAPH: 'Build graph (otp1)',
      OTP2_BUILD_GRAPH: 'Build graph (otp2)',
      EXPORT_NETEX_BLOCKS: 'Export NeTEx blocks',
      EXPORT_NETEX_BLOCKS_POSTVALIDATION: 'NeTEx blocks post-validation',
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
      EXPORT_NETEX_BLOCKS: 'Export NeTEx blocks',
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
      ERROR_FILE_DUPLICATE: 'The same file has been already imported',
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
	fixUrls = __webpack_require__(35);

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

var _UdugLink = __webpack_require__(20);

var _UdugLink2 = _interopRequireDefault(_UdugLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supportedUdugActions = ['PREVALIDATION', 'EXPORT_NETEX_POSTVALIDATION', 'EXPORT_NETEX_MERGED_POSTVALIDATION', 'EXPORT_NETEX_BLOCKS_POSTVALIDATION'];

var ControlledLink = function ControlledLink(_ref) {
  var events = _ref.events,
      includeLevel2 = _ref.includeLevel2,
      navigate = _ref.navigate,
      children = _ref.children;

  var supportedChouetteActions = ['IMPORT', 'VALIDATION_LEVEL_1'];

  var chouetteMap = {
    IMPORT: 'importer',
    VALIDATION_LEVEL_1: 'validator'
  };

  if (includeLevel2) {
    supportedChouetteActions.push('VALIDATION_LEVEL_2');
    supportedChouetteActions.push('EXPORT');
    supportedChouetteActions.push('EXPORT_NETEX');
    chouetteMap['VALIDATION_LEVEL_2'] = 'validator';
    chouetteMap['EXPORT'] = 'exporter';
    chouetteMap['EXPORT_NETEX'] = 'exporter';
  }

  if (events.states && events.states.length) {
    var endState = events.states[events.states.length - 1];

    // chouetteJobId can refer to an external ID from either chouette or antu
    var externalId = endState.chouetteJobId;

    if (supportedChouetteActions.indexOf(endState.action) > -1 && externalId) {
      return _react2.default.createElement(
        _ChouetteLink2.default,
        {
          action: chouetteMap[endState.action],
          id: endState.chouetteJobId,
          referential: endState.referential
        },
        children
      );
    } else if (supportedUdugActions.indexOf(endState.action) > -1 && externalId) {
      return _react2.default.createElement(
        _UdugLink2.default,
        {
          id: endState.chouetteJobId,
          referential: endState.referential,
          navigate: navigate
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

exports.default = ControlledLink;

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

__webpack_require__(36);

var _refresh = __webpack_require__(29);

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
          showNewDeliveriesFilter = _props.showNewDeliveriesFilter,
          _props$hideIgnoredExp = _props.hideIgnoredExportNetexBlocks,
          hideIgnoredExportNetexBlocks = _props$hideIgnoredExp === undefined ? true : _props$hideIgnoredExp,
          _props$hideAntuValida = _props.hideAntuValidationSteps,
          hideAntuValidationSteps = _props$hideAntuValida === undefined ? true : _props$hideAntuValida,
          navigate = _props.navigate;
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
                  listItem: listItem,
                  hideIgnoredExportNetexBlocks: hideIgnoredExportNetexBlocks,
                  hideAntuValidationSteps: hideAntuValidationSteps,
                  navigate: navigate
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

var _error = __webpack_require__(31);

var _error2 = _interopRequireDefault(_error);

var _checkCircle = __webpack_require__(30);

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _schedule = __webpack_require__(34);

var _schedule2 = _interopRequireDefault(_schedule);

var _cog = __webpack_require__(28);

var _cog2 = _interopRequireDefault(_cog);

var _helpOutline = __webpack_require__(32);

var _helpOutline2 = _interopRequireDefault(_helpOutline);

var _hourglassEmpty = __webpack_require__(33);

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

var _chevronDown = __webpack_require__(26);

var _chevronDown2 = _interopRequireDefault(_chevronDown);

var _chevronUp = __webpack_require__(27);

var _chevronUp2 = _interopRequireDefault(_chevronUp);

var _ControlledLink = __webpack_require__(12);

var _ControlledLink2 = _interopRequireDefault(_ControlledLink);

var _translations = __webpack_require__(6);

var _translations2 = _interopRequireDefault(_translations);

var _EventStatusIcon = __webpack_require__(14);

var _EventStatusIcon2 = _interopRequireDefault(_EventStatusIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NETEX_BLOCKS_EVENTS = ['EXPORT_NETEX_BLOCKS', 'EXPORT_NETEX_BLOCKS_POSTVALIDATION'];

var ANTU_VALIDATION_EVENTS = ['PREVALIDATION', 'EXPORT_NETEX_POSTVALIDATION', 'EXPORT_NETEX_MERGED_POSTVALIDATION', 'EXPORT_NETEX_BLOCKS_POSTVALIDATION'];

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
      return ['FILE_TRANSFER', 'FILE_CLASSIFICATION', 'FILE_DELIVERY', 'PREVALIDATION', 'IMPORT', 'VALIDATION_LEVEL_1', 'DATASPACE_TRANSFER', 'VALIDATION_LEVEL_2', 'EXPORT_NETEX', 'EXPORT_NETEX_POSTVALIDATION', 'EXPORT_NETEX_MERGED_POSTVALIDATION', 'EXPORT_NETEX_BLOCKS', 'EXPORT', 'BUILD_GRAPH', 'OTP2_BUILD_GRAPH', 'EXPORT_NETEX_BLOCKS_POSTVALIDATION'];
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
    value: function bullet(formattedGroups, groups, locale, includeLevel2, hideIgnoredExportNetexBlocks, hideAntuValidationSteps) {
      var _this2 = this;

      var columnStyle = function columnStyle(column) {
        return {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: Array.isArray(column) && column.length > 2 ? 90 : 45
        };
      };

      return Object.keys(formattedGroups).map(function (group, index) {
        var column = void 0;
        var event = formattedGroups[group];

        if (Array.isArray(event)) {
          column = Object.keys(event).filter(function (key) {
            if (hideIgnoredExportNetexBlocks && NETEX_BLOCKS_EVENTS.includes(key)) {
              return event[key].endState !== 'IGNORED';
            }

            if (hideAntuValidationSteps && ANTU_VALIDATION_EVENTS.includes(key)) {
              return event[key].endState !== 'IGNORED';
            }

            if (ANTU_VALIDATION_EVENTS.includes(key)) {
              return event[key].endState !== 'IGNORED';
            }

            return true;
          }).map(function (key, i) {
            return _this2.renderEvent(event[key], event, key, i, false, i, locale, includeLevel2);
          });
        } else {
          if (hideIgnoredExportNetexBlocks && NETEX_BLOCKS_EVENTS.includes(group) && event.endState === 'IGNORED') {
            return null;
          }

          if (hideAntuValidationSteps && ANTU_VALIDATION_EVENTS.includes(group)) {
            return null;
          }

          if (ANTU_VALIDATION_EVENTS.includes(group) && event.endState === 'IGNORED') {
            return null;
          }

          column = _this2.renderEvent(event, groups, group, index, index === 0, 0, locale, includeLevel2);
        }
        return _react2.default.createElement(
          'div',
          { key: 'bullet-' + index, style: columnStyle(column) },
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
            _ControlledLink2.default,
            { includeLevel2: includeLevel2, events: event, navigate: this.props.navigate },
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
        alignItems: 'start',
        justifyContent: 'center',
        marginTop: 10
      };

      var _props = this.props,
          groups = _props.groups,
          listItem = _props.listItem,
          locale = _props.locale,
          includeLevel2 = _props.includeLevel2,
          hideIgnoredExportNetexBlocks = _props.hideIgnoredExportNetexBlocks,
          hideAntuValidationSteps = _props.hideAntuValidationSteps;
      var expanded = this.state.expanded;


      var formattedGroups = this.addUnlistedStates(groups);
      formattedGroups = this.aggreggateFileEvents(formattedGroups);

      this.createCombinedSplit(formattedGroups, ['EXPORT_NETEX_BLOCKS', 'EXPORT', 'BUILD_GRAPH', 'OTP2_BUILD_GRAPH'], 'BUILD_GRAPH');

      var bullets = this.bullet(formattedGroups, groups, locale, includeLevel2, hideIgnoredExportNetexBlocks, hideAntuValidationSteps);

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
              style: { marginLeft: 'auto', marginRight: 20, marginTop: -25 },
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

var _HeaderTimeline = __webpack_require__(37);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UdugLink = function UdugLink(_ref) {
  var id = _ref.id,
      referential = _ref.referential,
      navigate = _ref.navigate,
      children = _ref.children;

  var baseURL = window.config.udugBaseUrl + 'report/';
  var URL = '' + baseURL + referential + '/' + id;

  return _react2.default.createElement(
    'a',
    { title: URL, onClick: function onClick() {
        return navigate(URL);
      } },
    children
  );
};

exports.default = UdugLink;

/***/ }),
/* 21 */,
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(25);

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
/* 25 */
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
/* 34 */
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
/* 35 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiN2VjODZlM2JhODM2ZTYzYTI0ZCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY3Rpb25UcmFuc2xhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DaG91ZXR0ZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlZExpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50U3RhdHVzSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudFN0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvblRyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVWR1Z0xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLXVwLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQvaG91cmdsYXNzLWVtcHR5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL3NjaGVkdWxlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2ZpeFVybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzcz81Y2MxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzcz8yNzdhIl0sIm5hbWVzIjpbImNvbG9yRGVmIiwiYmxhY2siLCJ3aGl0ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImJpZ2JsdWUiLCJkYXJrQmx1ZSIsImRhcmtHcmV5IiwiZ3JleSIsImxpZ2h0R3JleSIsImVudHVyIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImNvbG9yIiwiZm9udCIsImludmVyc2UiLCJ0aXRsZSIsImluZm8xIiwiaW5mbzIiLCJpbmZvMyIsIndhcm4iLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiZWZmZWN0aXZlIiwiZmFpbCIsIm1vZGFsIiwiYmFja2Ryb3AiLCJ0YWJBY3RpdmUiLCJ0aW1lTGluZUJhY2tncm91bmQiLCJ0aW1lTGluZUJsb2NrQmFja2dyb3VuZCIsInRpbWVMaW5lQm9yZGVyIiwidGltZUxpbmVTdWNjZXNzIiwidGltZUxpbmVGYWlsIiwidGFibGVIZWFkZXIiLCJ0YWJsZVJvdyIsInRhYmxlSW5mbyIsInZhbGlkIiwiaW52YWxpZCIsImV4cGlyaW5nIiwiaGlnaGxpZ2h0IiwiZGltZW5zaW9uIiwidGltZUxpbmVXaWR0aCIsInN0eWxlcyIsIm5iIiwidGV4dCIsIkZJTEVfVFJBTlNGRVIiLCJGSUxFX0NMQVNTSUZJQ0FUSU9OIiwiRklMRV9ERUxJVkVSWSIsIlBSRVZBTElEQVRJT04iLCJJTVBPUlQiLCJFWFBPUlQiLCJFWFBPUlRfTkVURVgiLCJWQUxJREFUSU9OX0xFVkVMXzEiLCJEQVRBU1BBQ0VfVFJBTlNGRVIiLCJWQUxJREFUSU9OX0xFVkVMXzIiLCJFWFBPUlRfTkVURVhfUE9TVFZBTElEQVRJT04iLCJFWFBPUlRfTkVURVhfTUVSR0VEX1BPU1RWQUxJREFUSU9OIiwiQlVJTERfR1JBUEgiLCJPVFAyX0JVSUxEX0dSQVBIIiwiRVhQT1JUX05FVEVYX0JMT0NLUyIsIkVYUE9SVF9ORVRFWF9CTE9DS1NfUE9TVFZBTElEQVRJT04iLCJVTktOT1dOIiwiZmlsZW5hbWUiLCJ1bmRlZmluZWQiLCJzdGF0ZXMiLCJPSyIsIlBFTkRJTkciLCJTVEFSVEVEIiwiRkFJTEVEIiwiRFVQTElDQVRFIiwiSUdOT1JFRCIsIkNBTkNFTExFRCIsIlRJTUVPVVQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckNvZGUiLCJFUlJPUl9GSUxFX1VOS05PV05fRklMRV9FWFRFTlNJT04iLCJFUlJPUl9GSUxFX05PVF9BX1pJUF9GSUxFIiwiRVJST1JfRklMRV9VTktOT1dOX0ZJTEVfVFlQRSIsIkVSUk9SX0ZJTEVfWklQX0NPTlRBSU5TX1NVQl9ESVJFQ1RPUklFUyIsIkVSUk9SX0ZJTEVfSU5WQUxJRF9aSVBfRU5UUllfRU5DT0RJTkciLCJFUlJPUl9GSUxFX0lOVkFMSURfWE1MX0VOQ09ESU5HX0VSUk9SIiwiRVJST1JfRklMRV9JTlZBTElEX1hNTF9DT05URU5UIiwiRVJST1JfRklMRV9EVVBMSUNBVEUiLCJFUlJPUl9ORVRFWF9FWFBPUlRfRU1QVFlfRVhQT1JUIiwiRVJST1JfVkFMSURBVElPTl9OT19EQVRBIiwiZmlsdGVyQnV0dG9uIiwiQUxMX1RJTUUiLCJMQVNUXzEyX0hPVVJTIiwiTEFTVF8yNF9IT1VSUyIsIkxBU1RfV0VFSyIsIkxBU1RfTU9OVEgiLCJlbiIsImJ1dHRvbkNvbmZpZyIsImZpZWxkcyIsImlkIiwiZ2V0TGFzdFZhbGlkRGF0ZSIsIm5vdyIsIkRhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwic2V0RGF0ZSIsImdldERhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwicGFnZSIsIm5vX3N0YXR1cyIsInN0YXJ0ZWQiLCJlbmRlZCIsImR1cmF0aW9uIiwidXNlcm5hbWUiLCJzaG93X2FsbCIsInNob3dfb25seV9mYWlsZWQiLCJzaG93X29ubHlfc3VjY2VzcyIsInNob3dfb25seV9jYW5jZWxsZWQiLCJmaWx0ZXJfZGlyZWN0X2RlbGl2ZXJ5IiwiVGltZWxpbmUiLCJIZWFkZXJUaW1lbGluZSIsIkV2ZW50RGV0YWlscyIsIkNob3VldHRlTGluayIsImFjdGlvbiIsInJlZmVyZW50aWFsIiwiY2hpbGRyZW4iLCJiYXNlVVJMIiwid2luZG93IiwiY29uZmlnIiwiY2hvdWV0dGVCYXNlVXJsIiwiYWN0aW9uTWFwIiwiaW1wb3J0ZXIiLCJleHBvcnRlciIsInZhbGlkYXRvciIsIlVSTCIsInN1cHBvcnRlZFVkdWdBY3Rpb25zIiwiQ29udHJvbGxlZExpbmsiLCJldmVudHMiLCJpbmNsdWRlTGV2ZWwyIiwibmF2aWdhdGUiLCJzdXBwb3J0ZWRDaG91ZXR0ZUFjdGlvbnMiLCJjaG91ZXR0ZU1hcCIsInB1c2giLCJsZW5ndGgiLCJlbmRTdGF0ZSIsImV4dGVybmFsSWQiLCJjaG91ZXR0ZUpvYklkIiwiaW5kZXhPZiIsInByb3BzIiwic3RhdGUiLCJhY3RpdmVQYWdlSW5kZXgiLCJlbmRTdGF0ZUZpbHRlciIsImRhdGVGaWx0ZXIiLCJzaG93RGF0ZUZpbHRlciIsIm9ubHlOZXdEZWxpdmVyeUZpbHRlciIsImUiLCJwYWdlSW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZGF0YVNvdXJjZSIsImxhc3REYXRlIiwiZmlsdGVyIiwiYXBwbGllZEZpbHRlciIsImZpbHRlckJ5UGVyaW9kIiwiZXZlbnQiLCJmaXJzdEV2ZW50IiwiZW5kU3RhdGVGaWx0ZXJBcHBsaWVkIiwiZmlsdGVyQnlFbmRTdGF0ZSIsImNvbnRhaW5zRXZlbnRzIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyQnlOZXdEZWxpdmVyeSIsImV2ZXJ5IiwibG9jYWxlIiwic2hvd05ld0RlbGl2ZXJpZXNGaWx0ZXIiLCJoaWRlSWdub3JlZEV4cG9ydE5ldGV4QmxvY2tzIiwiaGlkZUFudHVWYWxpZGF0aW9uU3RlcHMiLCJmaWx0ZXJlZFNvdXJjZSIsImdldEZpbHRlcmVkU291cmNlIiwicGFnaW5hdGlvbk1hcCIsImdldFBhZ2luYXRpb25NYXAiLCJmaWx0ZXJzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsInRhcmdldCIsInZhbHVlIiwidHJhbnNsYXRpb25zIiwibWFyZ2luTGVmdCIsImhhbmRsZUZpbHRlckNoYW5nZSIsImJpbmQiLCJwYWRkaW5nVG9wIiwibWFyZ2luIiwiY2hlY2tlZCIsInJlZnJlc2hCdXR0b24iLCJoYW5kbGVSZWZyZXNoIiwibWFyZ2luUmlnaHQiLCJmbG9hdCIsImN1cnNvciIsInRyYW5zZm9ybSIsIndpZHRoIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwibWFwIiwiaW5kZXgiLCJpc0FjdGl2ZSIsImhhbmRsZVBhZ2VDbGljayIsImxpc3RJdGVtIiwiZXZlbnRHcm91cCIsImZvckVhY2giLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiZm9udFdlaWdodCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwic3RhdHVzTGlzdCIsImkiLCJqIiwic2xpY2UiLCJFdmVudFN0YXR1c0ljb24iLCJoZWlnaHQiLCJORVRFWF9CTE9DS1NfRVZFTlRTIiwiQU5UVV9WQUxJREFUSU9OX0VWRU5UUyIsIkV2ZW50U3RlcHBlciIsImV4cGFuZGVkIiwiZ3JvdXBzIiwiZXZlbnRTdGF0ZXMiLCJncm91cHNXaXRoVW5saXN0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJmaXJzdFN0YXRlRm91bmQiLCJtaXNzaW5nQmVmb3JlU3RhcnRTdGFydCIsImZpbmFsR3JvdXBzIiwia2V5cyIsInNvcnQiLCJrZXkxIiwia2V5MiIsImtleSIsImZvcm1hdHRlZEdyb3VwcyIsIm5hbWUiLCJjb21iaW5lZCIsImdyb3VwIiwiZGF0YSIsImVycm9yT24iLCJjb2x1bW5TdHlsZSIsImNvbHVtbiIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImluY2x1ZGVzIiwicmVuZGVyRXZlbnQiLCJpc0ZpcnN0IiwiY29sdW1uSW5kZXgiLCJncm91cFN0eWxlIiwiZ3JvdXBUZXh0IiwibGlua1N0eWxlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJUb3BTdHlsZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiQWN0aW9uVHJhbnNsYXRpb25zIiwidG9vbFRpcFRleHQiLCJkYXRlIiwib3BhY2l0eSIsInN0ZXBwZXJzdHlsZSIsImFsaWduQ29udGVudCIsImFkZFVubGlzdGVkU3RhdGVzIiwiYWdncmVnZ2F0ZUZpbGVFdmVudHMiLCJjcmVhdGVDb21iaW5lZFNwbGl0IiwiYnVsbGV0cyIsImJ1bGxldCIsImhhbmRsZVRvZ2dsZVZpc2liaWxpdHkiLCJwcm92aWRlciIsImZsZXgiLCJmaWxlTmFtZSIsInN0b3BQcm9wYWdhdGlvbiIsImxhc3RFdmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJGaWx0ZXJCdXR0b24iLCJoYW5kbGVDbGljayIsImxhYmVsIiwiYWN0aXZlIiwiYWN0aXZlU3R5bGUiLCJpbmFjdGl2ZVN0eWxlIiwiZGVmYXVsdFN0eWxlIiwibWluV2lkdGgiLCJidXR0b25TdHlsZSIsInBvaW50ZXJFdmVudHMiLCJGaWx0ZXJCdXR0b25UcmF5IiwiYWN0aXZlQnV0dG9uSWQiLCJvbkNoYW5nZSIsInN0eWxlIiwiZmllbGQiLCJzaG93VG9vbHRpcCIsImVmZmVjdGl2ZVBlcmlvZHMiLCJ2YWxpZERheXNPZmZzZXQiLCJ0aW1lbGluZVN0eWxlIiwibGluZUhlaWdodCIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJ0aW1lbGluZVdyYXBwZXIiLCJ0aW1lQmxvY2siLCJ0aXRsZVRleHQiLCJ6SW5kZXgiLCJ0b29sVGlwU3R5bGUiLCJ0cmFuc2l0aW9uIiwidGV4dFN0eWxlIiwidGV4dFNoYWRvdyIsIndoaXRlU3BhY2UiLCJ0ZXh0T3ZlcmZsb3ciLCJoclN0eWxlIiwiaG92ZXJUZXh0IiwiaGFuZGxlVG9nZ2xlVG9vbFRpcCIsImxpbmUiLCJ0aW1lbGluZSIsImVmZmVjdGl2ZVBlcmlvZCIsInBlcmlvZEJsb2NrIiwidGltZWxpbmVFbmRQb3NpdGlvbiIsInRpbWVsaW5lU3RhcnRQb3NpdGlvbiIsIml0ZW1UZXh0IiwidG8iLCJmcm9tIiwibG9jYWxlQ29tcGFyZSIsInZlcnRpY2FsQWxpZ24iLCJzdHJpbmciLCJudW1iZXIiLCJ2YWxpZEZyb21EYXRlIiwiYXJyYXkiLCJwZXJpb2QiLCJzaGFwZSIsInRpbWV0YWJsZSIsIm9iamVjdElkIiwicGVyaW9kcyIsImFycmF5T2YiLCJ0aW1ldGFibGVzIiwiaXNMYXN0Iiwib3ZlcmZsb3dZIiwicGFkZGluZ0JvdHRvbSIsImhvdmVyIiwiYm9vbCIsIlVkdWdMaW5rIiwidWR1Z0Jhc2VVcmwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsOENBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJvZ3VcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYm9ndVwiXSA9IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI3ZWM4NmUzYmE4MzZlNjNhMjRkIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIEljb25CYXNlID0gZnVuY3Rpb24gSWNvbkJhc2UoX3JlZiwgX3JlZjIpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIGNvbG9yID0gX3JlZi5jb2xvcjtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemU7XG4gIHZhciBzdHlsZSA9IF9yZWYuc3R5bGU7XG4gIHZhciB3aWR0aCA9IF9yZWYud2lkdGg7XG4gIHZhciBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjaGlsZHJlbicsICdjb2xvcicsICdzaXplJywgJ3N0eWxlJywgJ3dpZHRoJywgJ2hlaWdodCddKTtcblxuICB2YXIgX3JlZjIkcmVhY3RJY29uQmFzZSA9IF9yZWYyLnJlYWN0SWNvbkJhc2U7XG4gIHZhciByZWFjdEljb25CYXNlID0gX3JlZjIkcmVhY3RJY29uQmFzZSA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmMiRyZWFjdEljb25CYXNlO1xuXG4gIHZhciBjb21wdXRlZFNpemUgPSBzaXplIHx8IHJlYWN0SWNvbkJhc2Uuc2l6ZSB8fCAnMWVtJztcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzdmcnLCBfZXh0ZW5kcyh7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBtZWV0JyxcbiAgICBoZWlnaHQ6IGhlaWdodCB8fCBjb21wdXRlZFNpemUsXG4gICAgd2lkdGg6IHdpZHRoIHx8IGNvbXB1dGVkU2l6ZVxuICB9LCByZWFjdEljb25CYXNlLCBwcm9wcywge1xuICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGNvbG9yOiBjb2xvciB8fCByZWFjdEljb25CYXNlLmNvbG9yXG4gICAgfSwgcmVhY3RJY29uQmFzZS5zdHlsZSB8fCB7fSwgc3R5bGUpXG4gIH0pKTtcbn07XG5cbkljb25CYXNlLnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBzaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5cbkljb25CYXNlLmNvbnRleHRUeXBlcyA9IHtcbiAgcmVhY3RJY29uQmFzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZShJY29uQmFzZS5wcm9wVHlwZXMpXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJY29uQmFzZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29uLWJhc2UvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuY29uc3QgY29sb3JEZWYgPSB7XG4gIGJsYWNrOiAnIzAwMCcsXG4gIHdoaXRlOiAnI0ZGRicsXG4gIHJlZDogJyNGMDAnLFxuICBncmVlbjogJyMwRjAnLFxuICBibHVlOiAnIzAwRicsXG4gIGJpZ2JsdWU6ICcjMTE2OUE3JyxcbiAgZGFya0JsdWU6ICcjMDgzNDUzJyxcbiAgZGFya0dyZXk6ICcjMkYyRjJGJyxcbiAgZ3JleTogJyNEREREREQnLFxuICBsaWdodEdyZXk6ICcjRjJGMkYyJyxcbiAgZW50dXI6IHtcbiAgICBwcmltYXJ5OiAnIzI3M0E0NicsICAgLy8gMzksNTgsNzBcbiAgICBzZWNvbmRhcnk6ICcjNkJCREMyJywgLy8xMDcsMTg5LDE5NCxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29sb3IgPSB7XG4gIGZvbnQ6IHtcbiAgICBpbnZlcnNlOiBjb2xvckRlZi53aGl0ZSxcbiAgICB0aXRsZTogY29sb3JEZWYuYmxhY2ssXG4gICAgaW5mbzE6IGNvbG9yRGVmLmVudHVyLnNlY29uZGFyeSxcbiAgICBpbmZvMjogY29sb3JEZWYuZGFya0JsdWUsXG4gICAgaW5mbzM6IGNvbG9yRGVmLmJsYWNrLFxuICAgIHdhcm46IGNvbG9yRGVmLnJlZCxcbiAgICBkaXNhYmxlZDogY29sb3JEZWYuZ3JleSxcblxuICAgIHRvb2x0aXA6IGNvbG9yRGVmLndoaXRlLFxuICB9LFxuICBiYWNrZ3JvdW5kOiBjb2xvckRlZi5lbnR1ci5wcmltYXJ5LFxuICBib3JkZXI6IGNvbG9yRGVmLmJsYWNrLFxuICBlZmZlY3RpdmU6IGNvbG9yRGVmLmJsYWNrLFxuICBmYWlsOiBjb2xvckRlZi5yZWQsXG4gIG1vZGFsOiBjb2xvckRlZi53aGl0ZSxcbiAgYmFja2Ryb3A6ICdyZ2JhKDAsIDAsIDAsIDAuMyknLFxuICB0b29sdGlwOiAnIzE5MTkxOScsXG4gIHRhYkFjdGl2ZTogY29sb3JEZWYuZW50dXIuc2Vjb25kYXJ5LFxuXG4gIHRpbWVMaW5lQmFja2dyb3VuZDogJyNERUQ4RDgnLFxuICB0aW1lTGluZUJsb2NrQmFja2dyb3VuZDogJyM2RDkyQjYnLFxuICB0aW1lTGluZUJvcmRlcjogJyNlZWUnLFxuICB0aW1lTGluZVN1Y2Nlc3M6ICcjNURBRTVEJyxcbiAgdGltZUxpbmVGYWlsOiAnI0I5MTkxOScsXG4gIHRhYmxlSGVhZGVyOiBjb2xvckRlZi5saWdodEdyZXksXG4gIHRhYmxlUm93OiAnI2ViZjJmMScsXG4gIHRhYmxlSW5mbzogJyNmZmZmZGInLFxuXG4gIHZhbGlkOiAnIzMzYzE0NicsXG4gIGludmFsaWQ6ICcjYjIwMDAwJyxcbiAgZXhwaXJpbmc6ICcjRkZBQTAwJyxcbiAgaGlnaGxpZ2h0IDoge1xuICAgIHZhbGlkOiAnIzRjYWY1MCcsXG4gICAgZXhwaXJpbmc6ICcjRkZCNjBBJyxcbiAgICBpbnZhbGlkOiAnI2NjMDAwMCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRpbWVuc2lvbiA9IHtcbiAgdGltZUxpbmVXaWR0aDogODUsXG59XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB7XG4gIGNvbG9yOiBjb2xvcixcbiAgZGltZW5zaW9uOiBkaW1lbnNpb24sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBFVVBMLCBWZXJzaW9uIDEuMiBvciDigJMgYXMgc29vbiB0aGV5IHdpbGwgYmUgYXBwcm92ZWQgYnlcbiAqIHRoZSBFdXJvcGVhbiBDb21taXNzaW9uIC0gc3Vic2VxdWVudCB2ZXJzaW9ucyBvZiB0aGUgRVVQTCAodGhlIFwiTGljZW5jZVwiKTtcbiAqIFlvdSBtYXkgbm90IHVzZSB0aGlzIHdvcmsgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5jZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5jZSBhdDpcbiAqXG4gKiAgIGh0dHBzOi8vam9pbnVwLmVjLmV1cm9wYS5ldS9zb2Z0d2FyZS9wYWdlL2V1cGxcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5jZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5jZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbmNlLlxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5iOiB7XG4gICAgdGV4dDoge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ0ZpbG92ZXJmw7hyaW5nJyxcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046ICdGaWxrbGFzc2lmaXNlcmluZycsXG4gICAgICBGSUxFX0RFTElWRVJZOiAnRmlsbGV2ZXJhbnNlJyxcbiAgICAgIFBSRVZBTElEQVRJT046ICdQcmV2YWxpZGVyaW5nJyxcbiAgICAgIElNUE9SVDogJ0ltcG9ydCcsXG4gICAgICBFWFBPUlQ6ICdHVEZTLWVrc3BvcnQnLFxuICAgICAgRVhQT1JUX05FVEVYOiAnTmVURXgtZWtzcG9ydCcsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6ICdWYWxpZGVyaW5nIG5pdsOlIDEnLFxuICAgICAgREFUQVNQQUNFX1RSQU5TRkVSOiAnT3ZlcmbDuHJpbmcgc2VudHJhbCBkYXRhYmFzZScsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6ICdWYWxpZGVyaW5nIG5pdsOlIDInLFxuICAgICAgRVhQT1JUX05FVEVYX1BPU1RWQUxJREFUSU9OOiAnUG9zdHZhbGlkZXJpbmcnLFxuICAgICAgRVhQT1JUX05FVEVYX01FUkdFRF9QT1NUVkFMSURBVElPTjogJ1ZhbGlkZXJpbmcgYXYgc2FtbWVuc2zDpXR0IGRhdGFzZXR0JyxcbiAgICAgIEJVSUxEX0dSQVBIOiAnQnlnZyBhdiByZWlzZXPDuGtmb3JzbGFnIChvdHAxKScsXG4gICAgICBPVFAyX0JVSUxEX0dSQVBIOiAnQnlnZyBhdiByZWlzZXPDuGtmb3JzbGFnIChvdHAyKScsXG4gICAgICBFWFBPUlRfTkVURVhfQkxPQ0tTOiAnRWtzcG9ydCBhdiBOZVRFeCBibG9ja3MnLFxuICAgICAgRVhQT1JUX05FVEVYX0JMT0NLU19QT1NUVkFMSURBVElPTjogJ05lVEV4IGJsb2NrcyBwb3N0dmFsaWRlcmluZycsXG4gICAgICBVTktOT1dOOiAnVWtqZW50IHN0ZWcnXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ092ZXJmw7hyaW5nIGF2IGZpbCBmcmEgbG9rYWwgbWFza2luIHRpbCBzZW50cmFsIHNlcnZlcicsXG4gICAgICBJTVBPUlQ6ICdGaWx2YWxpZGVyaW5nIG9nIGltcG9ydCBpIGxva2FsdCBkYXRhYmFzZW9tcsOlZGUgbml2w6UgMScsXG4gICAgICBFWFBPUlQ6ICdFa3Nwb3J0IGF2IHJ1dGVkYXRhICcsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6ICdWYWxpZGVyaW5nIGF2IGtvbXBsZXR0IGRhdGFvbXLDpWRlIG5pdsOlIDEnLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiAnVmFsaWRlcmluZyBhdiBrb21wbGV0dCBkYXRhb21yw6VkZSBuaXbDpSAyJyxcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogJ092ZXJmw7hyaW5nIHRpbCBzZW50cmFsdCBkYXRhYmFzZW9tcsOlZGUgbml2w6UgMicsXG4gICAgICBCVUlMRF9HUkFQSDogJ0J5Z2cgYXYgcmVpc2Vzw7hrZm9yc2xhZyAob3RwMSknLFxuICAgICAgT1RQMl9CVUlMRF9HUkFQSDogJ0J5Z2cgYXYgcmVpc2Vzw7hrZm9yc2xhZyAob3RwMiknLFxuICAgICAgRVhQT1JUX05FVEVYX0JMT0NLUzogJ0Vrc3BvcnQgYXYgTmVURXggYmxvY2tzJyxcbiAgICAgIFVOS05PV046ICdEZXR0ZSBzdGVnZXQgZXIgdWtqZW50J1xuICAgIH0sXG4gICAgZmlsZW5hbWU6IHtcbiAgICAgIHVuZGVmaW5lZDogJ1ZhbGlkZXJpbmcnXG4gICAgfSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgIE9LOiAnRnVsbGbDuHJ0JyxcbiAgICAgIFBFTkRJTkc6ICdWZW50ZXInLFxuICAgICAgU1RBUlRFRDogJ1DDpWJlZ3ludCcsXG4gICAgICBGQUlMRUQ6ICdGZWlsJyxcbiAgICAgIERVUExJQ0FURTogJ0ZlaWwgLSBkdXBsaWthdCBkYXRhc2V0dCcsXG4gICAgICBJR05PUkVEOiAnSWtrZSBnamVubm9tZsO4cnQnLFxuICAgICAgQ0FOQ0VMTEVEOiAnS2Fuc2VsbGVydCcsXG4gICAgICBUSU1FT1VUOiAnVGlkc2F2YnJ1ZGQnXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6ICdGaWxvdmVyZsO4cmluZyBmZWlsZXQnLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZpbGtsYXNzaWZpc2VyaW5nIGZlaWxldCdcbiAgICB9LFxuICAgIGVycm9yQ29kZToge1xuICAgICAgRVJST1JfRklMRV9VTktOT1dOX0ZJTEVfRVhURU5TSU9OOiAnRmlsZW5kZWxzZW4gZXIgaHZlcmtlbiAuemlwIGVsbGVyIC5aSVAnLFxuICAgICAgRVJST1JfRklMRV9OT1RfQV9aSVBfRklMRTogJ0ZpbGVuIGVyIGlra2UgZXQgemlwIGFya2l2JyxcbiAgICAgIEVSUk9SX0ZJTEVfVU5LTk9XTl9GSUxFX1RZUEU6ICdGaWxlbiBlciBodmVya2VuIE5lVEV4IGVsbGVyIEdURlMnLFxuICAgICAgRVJST1JfRklMRV9aSVBfQ09OVEFJTlNfU1VCX0RJUkVDVE9SSUVTOiAnQXJraXZldCBpbm5laG9sZGVyIHVuZGVya2F0YWxvZ2VyJyxcbiAgICAgIEVSUk9SX0ZJTEVfSU5WQUxJRF9aSVBfRU5UUllfRU5DT0RJTkc6ICdBcmtpdmV0IGlubmVob2xkZXIgZmlsbmF2biBzb20gaWtrZSBlciBneWxkaWcgVVRGOCcsXG4gICAgICBFUlJPUl9GSUxFX0lOVkFMSURfWE1MX0VOQ09ESU5HX0VSUk9SOiAnQXJraXZldCBpbm5laG9sZGVyIFhNTC1maWxlciBtZWQgdWd5bGRpZyB0ZWduc2V0dCcsXG4gICAgICBFUlJPUl9GSUxFX0lOVkFMSURfWE1MX0NPTlRFTlQ6ICdBcmtpdmV0IGlubmVob2xkZXIgdWd5bGRpZ2UgWE1MLWZpbGVyJyxcbiAgICAgIEVSUk9SX0ZJTEVfRFVQTElDQVRFOiAnU2FtbWUgZmlsIGJsZSBhbGxlcmVkZSBpbXBvcnRlcnQnLFxuICAgICAgRVJST1JfTkVURVhfRVhQT1JUX0VNUFRZX0VYUE9SVDogJ0RldCBla3Nwb3J0ZXJ0ZSBkYXRhc2V0dGV0IGVyIHRvbXQgKGZhbnQgaW5nZW4gYWt0aXZlIHRpZHRhYmVsbGRhdGEpJyxcbiAgICAgIEVSUk9SX1ZBTElEQVRJT05fTk9fREFUQTogJ0RldCBmaW5uZXMgaW5nZW4gZGF0YSDDpSB2YWxpZGVyZS4gU3RhdHVzZW4gZm9yIHNpc3RlIGltcG9ydCBiw7hyIGtvbnRyb2xsZXJlcydcbiAgICB9LFxuICAgIGZpbHRlckJ1dHRvbjoge1xuICAgICAgQUxMX1RJTUU6ICdVYmVncmVuc2V0JyxcbiAgICAgIExBU1RfMTJfSE9VUlM6ICdTaXN0ZSAxMiB0aW1lbmUnLFxuICAgICAgTEFTVF8yNF9IT1VSUzogJ1Npc3RlIGTDuGduJyxcbiAgICAgIExBU1RfV0VFSzogJ1Npc3RlIHVrZScsXG4gICAgICBMQVNUX01PTlRIOiAnU2lzdGUgbcOlbmVkJ1xuICAgIH1cbiAgfSxcbiAgZW46IHtcbiAgICB0ZXh0OiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmlsZSB0cmFuc2ZlcicsXG4gICAgICBGSUxFX0NMQVNTSUZJQ0FUSU9OOiAnRmlsZSBjbGFzc2lmaWNhdGlvbicsXG4gICAgICBGSUxFX0RFTElWRVJZOiAnRmlsZSBkZWxpdmVyeScsXG4gICAgICBQUkVWQUxJREFUSU9OOiAnUHJlLXZhbGlkYXRpb24nLFxuICAgICAgSU1QT1JUOiAnSW1wb3J0JyxcbiAgICAgIEVYUE9SVDogJ0dURlMgZXhwb3J0JyxcbiAgICAgIEVYUE9SVF9ORVRFWDogJ05lVEV4IGV4cG9ydCcsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6ICdWYWxpZGF0aW9uIGxldmVsIDEnLFxuICAgICAgREFUQVNQQUNFX1RSQU5TRkVSOiAnVHJhbnNmZXIgdG8gY2VudHJhbCBzcGFjZScsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6ICdWYWxpZGF0aW9uIGxldmVsIDInLFxuICAgICAgRVhQT1JUX05FVEVYX1BPU1RWQUxJREFUSU9OOiAnUG9zdC12YWxpZGF0aW9uJyxcbiAgICAgIEVYUE9SVF9ORVRFWF9NRVJHRURfUE9TVFZBTElEQVRJT046ICdNZXJnZWQgZGF0YXNldCB2YWxpZGF0aW9uJyxcbiAgICAgIEJVSUxEX0dSQVBIOiAnQnVpbGQgZ3JhcGggKG90cDEpJyxcbiAgICAgIE9UUDJfQlVJTERfR1JBUEg6ICdCdWlsZCBncmFwaCAob3RwMiknLFxuICAgICAgRVhQT1JUX05FVEVYX0JMT0NLUzogJ0V4cG9ydCBOZVRFeCBibG9ja3MnLFxuICAgICAgRVhQT1JUX05FVEVYX0JMT0NLU19QT1NUVkFMSURBVElPTjogJ05lVEV4IGJsb2NrcyBwb3N0LXZhbGlkYXRpb24nLFxuICAgICAgVU5LTk9XTjogJ1Vrbm93biBzdGVwJ1xuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6ICdVcGxvYWQgbG9jYWwgZmlsZSB0byByZW1vdGUgc2VydmVyJyxcbiAgICAgIElNUE9SVDogJ0ZpbGUgdmFsaWRhdGlvbiBhbmQgaW1wb3J0IGluIGxvY2FsIGRhdGEgc3BhY2UgLSBsZXZlbCAxJyxcbiAgICAgIEVYUE9SVDogJ0V4cG9ydCBvZiByb3V0ZSBkYXRhICcsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6ICdWYWxpZGF0aW9uIG9mIGNvbXBsZXRlIGRhdGEgc3BhY2UgLSBsZXZlbCAxJyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMjogJ1ZhbGlkYXRpb24gb2YgY29tcGxldGUgZGF0YSBzcGFjZSAtIGxldmVsIDInLFxuICAgICAgREFUQVNQQUNFX1RSQU5TRkVSOiAnVHJhbnNmZXIgdG8gY2VudHJhbCBkYXRhc3BhY2UgLSBsZXZlbCAyJyxcbiAgICAgIEJVSUxEX0dSQVBIOiAnQnVpbGQgZ3JhcGggKG90cDEpJyxcbiAgICAgIE9UUDJfQlVJTERfR1JBUEg6ICdCdWlsZCBncmFwaCAob3RwMiknLFxuICAgICAgRVhQT1JUX05FVEVYX0JMT0NLUzogJ0V4cG9ydCBOZVRFeCBibG9ja3MnLFxuICAgICAgVU5LTk9XTjogJ1RoaXMgc3RlcCBpcyB1a25vd24nXG4gICAgfSxcbiAgICBmaWxlbmFtZToge1xuICAgICAgdW5kZWZpbmVkOiAnVmFsaWRhdGlvbidcbiAgICB9LFxuICAgIHN0YXRlczoge1xuICAgICAgT0s6ICdDb21wbGV0ZWQnLFxuICAgICAgUEVORElORzogJ1BlbmRpbmcnLFxuICAgICAgU1RBUlRFRDogJ1N0YXJ0ZWQnLFxuICAgICAgRkFJTEVEOiAnRmFpbGVkJyxcbiAgICAgIERVUExJQ0FURTogJ0ZhaWxlZCAtIGR1cGxpY2F0ZSBkYXRhIHNldCcsXG4gICAgICBJR05PUkVEOiAnU2tpcHBlZCcsXG4gICAgICBDQU5DRUxMRUQ6ICdDYW5jZWxsZWQnLFxuICAgICAgVElNRU9VVDogJ1RpbWVvdXQnXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6ICdGYWlsZWQgdG8gdHJhbnNmZXIgZmlsZScsXG4gICAgICBGSUxFX0NMQVNTSUZJQ0FUSU9OOiAnRmFpbGVkIG9uIGZpbGUgY2xhc3NpZmljYXRpb24nXG4gICAgfSxcbiAgICBlcnJvckNvZGU6IHtcbiAgICAgIEVSUk9SX0ZJTEVfVU5LTk9XTl9GSUxFX0VYVEVOU0lPTjogJ1RoZSBmaWxlIGV4dGVuc2lvbiBpcyBuZWl0aGVyIC56aXAgbm9yIC5aSVAnLFxuICAgICAgRVJST1JfRklMRV9OT1RfQV9aSVBfRklMRTogJ1RoZSBmaWxlIGlzIG5vdCBhIHppcCBhcmNoaXZlJyxcbiAgICAgIEVSUk9SX0ZJTEVfVU5LTk9XTl9GSUxFX1RZUEU6ICdUaGUgZmlsZSBpcyBuZWl0aGVyIGEgTmVURXggYXJjaGl2ZSBub3IgYSBHVEZTIGFyY2hpdmUnLFxuICAgICAgRVJST1JfRklMRV9aSVBfQ09OVEFJTlNfU1VCX0RJUkVDVE9SSUVTOiAnVGhlIGFyY2hpdmUgY29udGFpbnMgc3ViLWRpcmVjdG9yaWVzJyxcbiAgICAgIEVSUk9SX0ZJTEVfSU5WQUxJRF9aSVBfRU5UUllfRU5DT0RJTkc6ICdUaGUgYXJjaGl2ZSBjb250YWlucyBmaWxlIG5hbWVzIHRoYXQgYXJlIG5vdCBVVEY4LWVuY29kZWQnLFxuICAgICAgRVJST1JfRklMRV9JTlZBTElEX1hNTF9FTkNPRElOR19FUlJPUjogJ1RoZSBhcmNoaXZlIGNvbnRhaW5zIFhNTCBmaWxlcyB3aXRoIGFuIGludmFsaWQgZW5jb2RpbmcnLFxuICAgICAgRVJST1JfRklMRV9JTlZBTElEX1hNTF9DT05URU5UOiAnVGhlIGFyY2hpdmUgY29udGFpbnMgaW52YWxpZCBYTUwgZmlsZXMnLFxuICAgICAgRVJST1JfRklMRV9EVVBMSUNBVEU6ICdUaGUgc2FtZSBmaWxlIGhhcyBiZWVuIGFscmVhZHkgaW1wb3J0ZWQnLFxuICAgICAgRVJST1JfTkVURVhfRVhQT1JUX0VNUFRZX0VYUE9SVDogJ1RoZSBleHBvcnRlZCBkYXRhc2V0IGlzIGVtcHR5IChubyBhY3RpdmUgdGltZXRhYmxlIGRhdGEgZm91bmQpJyxcbiAgICAgIEVSUk9SX1ZBTElEQVRJT05fTk9fREFUQTogJ1RoZXJlIGlzIG5vIGRhdGEgdG8gdmFsaWRhdGUuIENoZWNrIHRoZSBzdGF0dXMgb2YgdGhlIGxhdGVzdCBkYXRhIGltcG9ydCdcblxuICAgIH0sXG4gICAgZmlsdGVyQnV0dG9uOiB7XG4gICAgICBBTExfVElNRTogJ1VubGltaXRlZCcsXG4gICAgICBMQVNUXzEyX0hPVVJTOiAnTGFzdCAxMiBob3VycycsXG4gICAgICBMQVNUXzI0X0hPVVJTOiAnTGFzdCAyNCBob3VycycsXG4gICAgICBMQVNUX1dFRUs6ICdMYXN0IHdlZWsnLFxuICAgICAgTEFTVF9NT05USDogJ0xhc3QgbW9udGgnXG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYWN0aW9uVHJhbnNsYXRpb25zLmpzIiwiY29uc3QgYnV0dG9uQ29uZmlnID0ge1xuICBmaWVsZHM6IFtcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfMTJfSE9VUlMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfMjRfSE9VUlMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfV0VFSydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnTEFTVF9NT05USCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnQUxMX1RJTUUnXG4gICAgfVxuICBdXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGFzdFZhbGlkRGF0ZSA9IGlkID0+IHtcbiAgc3dpdGNoIChpZCkge1xuICAgIGNhc2UgJ0FMTF9USU1FJzpcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGNhc2UgJ0xBU1RfTU9OVEgnOiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0TW9udGgobm93LmdldE1vbnRoKCkgLSAxKSk7XG4gICAgfVxuICAgIGNhc2UgJ0xBU1RfV0VFSyc6IHtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCkgLSA3KSk7XG4gICAgfVxuICAgIGNhc2UgJ0xBU1RfMTJfSE9VUlMnOiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0SG91cnMobm93LmdldEhvdXJzKCkgLSAxMikpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUXzI0X0hPVVJTJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldERhdGUobm93LmdldERhdGUoKSAtIDEpKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1dHRvbkNvbmZpZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2J1dHRvbkNvbmZpZy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgXCJlblwiOiB7XG4gICAgcGFnZTogJ1BhZ2U6ICcsXG4gICAgbm9fc3RhdHVzOiAnTm8gcmVzdWx0IHdpdGggYXBwbGllZCBmaWx0ZXInLFxuICAgIHN0YXJ0ZWQ6ICdTdGFydGVkJyxcbiAgICBlbmRlZDogJ0VuZGVkJyxcbiAgICBkdXJhdGlvbjogJ0R1cmF0aW9uOiAnLFxuICAgIHVzZXJuYW1lOiAnVXNlcm5hbWU6ICcsXG4gICAgc2hvd19hbGw6ICdTaG93IGFsbCcsXG4gICAgc2hvd19vbmx5X2ZhaWxlZDogJ1Nob3cgb25seSBmYWlsZWQnLFxuICAgIHNob3dfb25seV9zdWNjZXNzOiAnU2hvdyBvbmx5IHN1Y2Nlc3NmdWwnLFxuICAgIHNob3dfb25seV9jYW5jZWxsZWQ6IFwiU2hvdyBvbmx5IGNhbmNlbGxlZFwiLFxuICAgIGZpbHRlcl9kaXJlY3RfZGVsaXZlcnk6IFwiT25seSBzdGFydGVkIHdpdGggZmlsZSBkZWxpdmVyeVwiXG4gIH0sXG4gIFwibmJcIjoge1xuICAgIHBhZ2U6ICdTaWRlOiAnLFxuICAgIG5vX3N0YXR1czogJ0luZ2VuIHJlc3VsdGF0ZXIgbWVkIHZhbGd0IGZpbHRlcicsXG4gICAgc3RhcnRlZDogJ0JlZ3ludGUnLFxuICAgIGVuZGVkOiAnQXZzbHV0dGV0JyxcbiAgICBkdXJhdGlvbjogJ1ZhcmlnaGV0JyxcbiAgICB1c2VybmFtZTogJ0JydWtlcm5hdm46ICcsXG4gICAgc2hvd19hbGw6ICdWaXMgYWxsZScsXG4gICAgc2hvd19vbmx5X2ZhaWxlZDogJ1ZpcyBrdW4gZmVpbGV0JyxcbiAgICBzaG93X29ubHlfc3VjY2VzczogJ1ZpcyBrdW4gdmVsbHlra2V0JyxcbiAgICBzaG93X29ubHlfY2FuY2VsbGVkOiBcIlZpcyBrdW4ga2Fuc2VsbGVydGVcIixcbiAgICBmaWx0ZXJfZGlyZWN0X2RlbGl2ZXJ5OiBcIkt1biBzdGFydGV0IHZlZCBmaWxsZXZlcmFuc2VcIlxuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyYW5zbGF0aW9ucy5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0XHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdFx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlciBcblx0XHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0XHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0XHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG5cdH0pLFxuXHRnZXRFbGVtZW50ID0gKGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW8gPSB7fTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHRcdH07XG5cdH0pKGZ1bmN0aW9uIChzdHlsZVRhcmdldCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0eWxlVGFyZ2V0KVxuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdLFxuXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vZml4VXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0SW50byA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cdGlmICghc3R5bGVUYXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHN0eWxlVGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIHN0eWxlVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0c3R5bGVUYXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZVRhcmdldC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHN0eWxlVGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YXR0YWNoVGFnQXR0cnMoc3R5bGVFbGVtZW50LCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhdHRhY2hUYWdBdHRycyhsaW5rRWxlbWVudCwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XG5cdHJldHVybiBsaW5rRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXR0YWNoVGFnQXR0cnMoZWxlbWVudCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0LyogSWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpe1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XG5cblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKVxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBUaW1lbGluZSBmcm9tICcuL1RpbWVsaW5lJ1xuZXhwb3J0IEhlYWRlclRpbWVsaW5lIGZyb20gJy4vSGVhZGVyVGltZWxpbmUnXG5leHBvcnQgRXZlbnREZXRhaWxzIGZyb20gJy4vRXZlbnREZXRhaWxzJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDaG91ZXR0ZUxpbmsgPSAoeyBhY3Rpb24sIGlkLCByZWZlcmVudGlhbCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBiYXNlVVJMID0gYCR7d2luZG93LmNvbmZpZy5jaG91ZXR0ZUJhc2VVcmx9cmVmZXJlbnRpYWxzL2A7XG5cbiAgY29uc3QgYWN0aW9uTWFwID0ge1xuICAgIGltcG9ydGVyOiBgaW1wb3J0cy8ke2lkfS9jb21wbGlhbmNlX2NoZWNrYCxcbiAgICBleHBvcnRlcjogYGV4cG9ydHMvJHtpZH0vY29tcGxpYW5jZV9jaGVja2AsXG4gICAgdmFsaWRhdG9yOiBgY29tcGxpYW5jZV9jaGVja3MvJHtpZH0vcmVwb3J0YFxuICB9O1xuICBjb25zdCBVUkwgPSBgJHtiYXNlVVJMfSR7cmVmZXJlbnRpYWx9LyR7YWN0aW9uTWFwW2FjdGlvbl19YDtcblxuICByZXR1cm4gKFxuICAgIDxhIHRpdGxlPXtVUkx9IHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e1VSTH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hvdWV0dGVMaW5rO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ2hvdWV0dGVMaW5rLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaG91ZXR0ZUxpbmsgZnJvbSAnLi9DaG91ZXR0ZUxpbmsnO1xuaW1wb3J0IFVkdWdMaW5rIGZyb20gJy4vVWR1Z0xpbmsnO1xuXG5jb25zdCBzdXBwb3J0ZWRVZHVnQWN0aW9ucyA9IFtcbiAgJ1BSRVZBTElEQVRJT04nLFxuICAnRVhQT1JUX05FVEVYX1BPU1RWQUxJREFUSU9OJyxcbiAgJ0VYUE9SVF9ORVRFWF9NRVJHRURfUE9TVFZBTElEQVRJT04nLFxuICAnRVhQT1JUX05FVEVYX0JMT0NLU19QT1NUVkFMSURBVElPTidcbl07XG5cbmNvbnN0IENvbnRyb2xsZWRMaW5rID0gKHsgZXZlbnRzLCBpbmNsdWRlTGV2ZWwyLCBuYXZpZ2F0ZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBsZXQgc3VwcG9ydGVkQ2hvdWV0dGVBY3Rpb25zID0gWydJTVBPUlQnLCAnVkFMSURBVElPTl9MRVZFTF8xJ107XG5cbiAgbGV0IGNob3VldHRlTWFwID0ge1xuICAgIElNUE9SVDogJ2ltcG9ydGVyJyxcbiAgICBWQUxJREFUSU9OX0xFVkVMXzE6ICd2YWxpZGF0b3InXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVMZXZlbDIpIHtcbiAgICBzdXBwb3J0ZWRDaG91ZXR0ZUFjdGlvbnMucHVzaCgnVkFMSURBVElPTl9MRVZFTF8yJyk7XG4gICAgc3VwcG9ydGVkQ2hvdWV0dGVBY3Rpb25zLnB1c2goJ0VYUE9SVCcpO1xuICAgIHN1cHBvcnRlZENob3VldHRlQWN0aW9ucy5wdXNoKCdFWFBPUlRfTkVURVgnKTtcbiAgICBjaG91ZXR0ZU1hcFsnVkFMSURBVElPTl9MRVZFTF8yJ10gPSAndmFsaWRhdG9yJztcbiAgICBjaG91ZXR0ZU1hcFsnRVhQT1JUJ10gPSAnZXhwb3J0ZXInO1xuICAgIGNob3VldHRlTWFwWydFWFBPUlRfTkVURVgnXSA9ICdleHBvcnRlcic7XG4gIH1cblxuICBcblxuICBpZiAoZXZlbnRzLnN0YXRlcyAmJiBldmVudHMuc3RhdGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGVuZFN0YXRlID0gZXZlbnRzLnN0YXRlc1tldmVudHMuc3RhdGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgLy8gY2hvdWV0dGVKb2JJZCBjYW4gcmVmZXIgdG8gYW4gZXh0ZXJuYWwgSUQgZnJvbSBlaXRoZXIgY2hvdWV0dGUgb3IgYW50dVxuICAgIGNvbnN0IGV4dGVybmFsSWQgPSBlbmRTdGF0ZS5jaG91ZXR0ZUpvYklkO1xuXG4gICAgaWYgKHN1cHBvcnRlZENob3VldHRlQWN0aW9ucy5pbmRleE9mKGVuZFN0YXRlLmFjdGlvbikgPiAtMSAmJiBleHRlcm5hbElkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2hvdWV0dGVMaW5rXG4gICAgICAgICAgYWN0aW9uPXtjaG91ZXR0ZU1hcFtlbmRTdGF0ZS5hY3Rpb25dfVxuICAgICAgICAgIGlkPXtlbmRTdGF0ZS5jaG91ZXR0ZUpvYklkfVxuICAgICAgICAgIHJlZmVyZW50aWFsPXtlbmRTdGF0ZS5yZWZlcmVudGlhbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9DaG91ZXR0ZUxpbms+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoc3VwcG9ydGVkVWR1Z0FjdGlvbnMuaW5kZXhPZihlbmRTdGF0ZS5hY3Rpb24pID4gLTEgJiYgZXh0ZXJuYWxJZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFVkdWdMaW5rXG4gICAgICAgICAgaWQ9e2VuZFN0YXRlLmNob3VldHRlSm9iSWR9XG4gICAgICAgICAgcmVmZXJlbnRpYWw9e2VuZFN0YXRlLnJlZmVyZW50aWFsfVxuICAgICAgICAgIG5hdmlnYXRlPXtuYXZpZ2F0ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9VZHVnTGluaz5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDxkaXY+IHtjaGlsZHJlbn0gPC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlZExpbms7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVkTGluay5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXZlbnRTdGVwcGVyIGZyb20gJy4vRXZlbnRTdGVwcGVyJztcbmltcG9ydCAnLi9FdmVudERldGFpbHMuY3NzJztcbmltcG9ydCBGYUZyZXNoIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IEZpbHRlckJ1dHRvblRyYXkgZnJvbSAnLi9GaWx0ZXJCdXR0b25UcmF5JztcbmltcG9ydCB7IGdldExhc3RWYWxpZERhdGUgfSBmcm9tICcuL2J1dHRvbkNvbmZpZyc7XG5cbmNsYXNzIEV2ZW50RGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVQYWdlSW5kZXg6IDAsXG4gICAgICBlbmRTdGF0ZUZpbHRlcjogJ0FMTCcsXG4gICAgICBkYXRlRmlsdGVyOiBwcm9wcy5zaG93RGF0ZUZpbHRlciA/ICdMQVNUXzEyX0hPVVJTJyA6ICdBTExfVElNRScsXG4gICAgICBvbmx5TmV3RGVsaXZlcnlGaWx0ZXI6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVBhZ2VDbGljayhlLCBwYWdlSW5kZXgpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlSW5kZXg6IHBhZ2VJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKGRhdGVGaWx0ZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGVGaWx0ZXI6IGRhdGVGaWx0ZXIsXG4gICAgICBhY3RpdmVQYWdlSW5kZXg6IDBcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbHRlcmVkU291cmNlKFxuICAgIGRhdGFTb3VyY2UsXG4gICAgZGF0ZUZpbHRlcixcbiAgICBlbmRTdGF0ZUZpbHRlcixcbiAgICBvbmx5TmV3RGVsaXZlcnlGaWx0ZXJcbiAgKSB7XG4gICAgY29uc3QgbGFzdERhdGUgPSBnZXRMYXN0VmFsaWREYXRlKGRhdGVGaWx0ZXIpO1xuXG4gICAgcmV0dXJuIChkYXRhU291cmNlIHx8IFtdKS5maWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgY29uc3QgYXBwbGllZEZpbHRlciA9IFtdO1xuXG4gICAgICAvKiBGaWx0ZXIgYnkgZGF0ZSBmcm9tIHByZS1kZWZpbmVkIHBlcmlvZHMgKi9cbiAgICAgIGlmIChsYXN0RGF0ZSkge1xuICAgICAgICBjb25zdCBmaWx0ZXJCeVBlcmlvZCA9IG5ldyBEYXRlKGV2ZW50LmZpcnN0RXZlbnQpID4gbGFzdERhdGU7XG4gICAgICAgIGFwcGxpZWRGaWx0ZXIucHVzaChmaWx0ZXJCeVBlcmlvZCk7XG4gICAgICB9XG5cbiAgICAgIC8qIEZpbHRlciBieSBlbmQgc3RhdGUgZnJvbSBkcm9wZG93biAqL1xuICAgICAgY29uc3QgZW5kU3RhdGVGaWx0ZXJBcHBsaWVkID1cbiAgICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdGQUlMRUQnIHx8XG4gICAgICAgIGVuZFN0YXRlRmlsdGVyID09PSAnT0snIHx8XG4gICAgICAgIGVuZFN0YXRlRmlsdGVyID09PSAnQ0FOQ0VMTEVEJztcblxuICAgICAgaWYgKGVuZFN0YXRlRmlsdGVyQXBwbGllZCkge1xuICAgICAgICBjb25zdCBmaWx0ZXJCeUVuZFN0YXRlID0gZXZlbnQuZW5kU3RhdGUgPT09IGVuZFN0YXRlRmlsdGVyO1xuICAgICAgICBhcHBsaWVkRmlsdGVyLnB1c2goZmlsdGVyQnlFbmRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIC8qIEZpbHRlciBieSBvbmx5IG5ldyBkZWxpdmVyaWVzICovXG4gICAgICBjb25zdCBjb250YWluc0V2ZW50cyA9IEFycmF5LmlzQXJyYXkoZXZlbnQuZXZlbnRzKSAmJiBldmVudC5ldmVudHMubGVuZ3RoO1xuXG4gICAgICBpZiAoY29udGFpbnNFdmVudHMgJiYgb25seU5ld0RlbGl2ZXJ5RmlsdGVyKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckJ5TmV3RGVsaXZlcnkgPSBldmVudC5ldmVudHNbMF0uYWN0aW9uID09PSAnRklMRV9UUkFOU0ZFUic7XG4gICAgICAgIGFwcGxpZWRGaWx0ZXIucHVzaChmaWx0ZXJCeU5ld0RlbGl2ZXJ5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFwcGxpZWRGaWx0ZXIuZXZlcnkoZmlsdGVyID0+IGZpbHRlcik7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YVNvdXJjZSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGluY2x1ZGVMZXZlbDIsXG4gICAgICBzaG93RGF0ZUZpbHRlcixcbiAgICAgIHNob3dOZXdEZWxpdmVyaWVzRmlsdGVyLFxuICAgICAgaGlkZUlnbm9yZWRFeHBvcnROZXRleEJsb2NrcyA9IHRydWUsXG4gICAgICBoaWRlQW50dVZhbGlkYXRpb25TdGVwcyA9IHRydWUsXG4gICAgICBuYXZpZ2F0ZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlUGFnZUluZGV4LFxuICAgICAgZW5kU3RhdGVGaWx0ZXIsXG4gICAgICBkYXRlRmlsdGVyLFxuICAgICAgb25seU5ld0RlbGl2ZXJ5RmlsdGVyXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBmaWx0ZXJlZFNvdXJjZSA9IHRoaXMuZ2V0RmlsdGVyZWRTb3VyY2UoXG4gICAgICBkYXRhU291cmNlLFxuICAgICAgZGF0ZUZpbHRlcixcbiAgICAgIGVuZFN0YXRlRmlsdGVyLFxuICAgICAgb25seU5ld0RlbGl2ZXJ5RmlsdGVyXG4gICAgKTtcbiAgICBjb25zdCBwYWdpbmF0aW9uTWFwID0gZ2V0UGFnaW5hdGlvbk1hcChmaWx0ZXJlZFNvdXJjZSk7XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gKFxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcwLjllbScgfX1cbiAgICAgICAgICB2YWx1ZT17ZW5kU3RhdGVGaWx0ZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGVuZFN0YXRlRmlsdGVyOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgYWN0aXZlUGFnZUluZGV4OiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFMTFwiPnt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zaG93X2FsbH08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT0tcIj57dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19vbmx5X3N1Y2Nlc3N9PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNBTkNFTExFRFwiPlxuICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfb25seV9jYW5jZWxsZWR9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZBSUxFRFwiPlxuICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfb25seV9mYWlsZWR9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7c2hvd0RhdGVGaWx0ZXIgJiYgKFxuICAgICAgICAgIDxGaWx0ZXJCdXR0b25UcmF5XG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDIwIH19XG4gICAgICAgICAgICBhY3RpdmVCdXR0b25JZD17dGhpcy5zdGF0ZS5kYXRlRmlsdGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Nob3dOZXdEZWxpdmVyaWVzRmlsdGVyICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEwLCBwYWRkaW5nVG9wOiAyIH19PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGlkPVwiZGlyZWN0X2RlbGl2ZXJ5XCJcbiAgICAgICAgICAgICAgbmFtZT1cImRpcmVjdF9kZWxpdmVyeVwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e29ubHlOZXdEZWxpdmVyeUZpbHRlcn1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnMCAxMHB4JyB9fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBvbmx5TmV3RGVsaXZlcnlGaWx0ZXI6IGUudGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlSW5kZXg6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpcmVjdF9kZWxpdmVyeVwiPlxuICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uZmlsdGVyX2RpcmVjdF9kZWxpdmVyeX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgY29uc3QgcGFnZSA9IHBhZ2luYXRpb25NYXBbYWN0aXZlUGFnZUluZGV4XTtcblxuICAgIGNvbnN0IHJlZnJlc2hCdXR0b24gPSB0aGlzLnByb3BzLmhhbmRsZVJlZnJlc2ggJiYgKFxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTUsIGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgPEZhRnJlc2hcbiAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06ICdzY2FsZSgxLjUpJyB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlUmVmcmVzaH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBpZiAocGFnZSAmJiBwYWdlLmxlbmd0aCAmJiBwYWdpbmF0aW9uTWFwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnbGVmdCcsIG1hcmdpbkJvdHRvbTogNSB9fT5cbiAgICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZWZyZXNoQnV0dG9ufVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1saW5rLXBhcmVudFwiPlxuICAgICAgICAgICAgPHNwYW4+e3RyYW5zbGF0aW9uc1tsb2NhbGVdLnBhZ2V9PC9zcGFuPlxuICAgICAgICAgICAge3BhZ2luYXRpb25NYXAubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9XG4gICAgICAgICAgICAgICAgaW5kZXggPT0gYWN0aXZlUGFnZUluZGV4XG4gICAgICAgICAgICAgICAgICA/ICdwYWdlLWxpbmsgYWN0aXZlLWxpbmsnXG4gICAgICAgICAgICAgICAgICA6ICdwYWdlLWxpbmsgaW5hY3RpdmUtbGluayc7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3RpdmV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlUGFnZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIGtleT17J2xpbmstJyArIGluZGV4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwYWdlLm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBldmVudEdyb3VwID0ge307XG5cbiAgICAgICAgICAgICAgbGlzdEl0ZW0uZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnRHcm91cFtldmVudC5hY3Rpb25dKSB7XG4gICAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0gPSB7fTtcbiAgICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXS5zdGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnRHcm91cFtldmVudC5hY3Rpb25dLnN0YXRlcy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0uZW5kU3RhdGUgPSBldmVudC5zdGF0ZTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9eydqb2JzdGF0dXMtJyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWQgKyAnLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEV2ZW50U3RlcHBlclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlTGV2ZWwyPXtpbmNsdWRlTGV2ZWwyfVxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXsnZXZlbnQtZ3JvdXAtJyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWQgKyAnLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzPXtldmVudEdyb3VwfVxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbT17bGlzdEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIGhpZGVJZ25vcmVkRXhwb3J0TmV0ZXhCbG9ja3M9e2hpZGVJZ25vcmVkRXhwb3J0TmV0ZXhCbG9ja3N9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVBbnR1VmFsaWRhdGlvblN0ZXBzPXtoaWRlQW50dVZhbGlkYXRpb25TdGVwc31cbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGU9e25hdmlnYXRlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnbGVmdCcsIG1hcmdpbkJvdHRvbTogNSB9fT5cbiAgICAgICAgICB7ZmlsdGVyc31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwLFxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2VlZScsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDQwXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwIH19PlxuICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0ubm9fc3RhdHVzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEwIH19PntyZWZyZXNoQnV0dG9ufTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGdldFBhZ2luYXRpb25NYXAgPSAoc3RhdHVzTGlzdCA9IFtdKSA9PiB7XG4gIGxldCBwYWdpbmF0aW9uTWFwID0gW107XG5cbiAgaWYgKHN0YXR1c0xpc3QgJiYgc3RhdHVzTGlzdC5sZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IHN0YXR1c0xpc3QubGVuZ3RoOyBpIDwgajsgaSArPSAxMCkge1xuICAgICAgcGFnaW5hdGlvbk1hcC5wdXNoKHN0YXR1c0xpc3Quc2xpY2UoaSwgaSArIDEwKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwYWdpbmF0aW9uTWFwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnREZXRhaWxzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZEVycm9yIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9lcnJvcic7XG5pbXBvcnQgTWREb25lIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9jaGVjay1jaXJjbGUnO1xuaW1wb3J0IE1kU2NoZWR1bGUgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL3NjaGVkdWxlJztcbmltcG9ydCBGYUNvZyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY29nJztcbmltcG9ydCBNZEhlbHBPdXRMaW5lIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUnO1xuaW1wb3J0IE1kSG91ciBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvaG91cmdsYXNzLWVtcHR5JztcblxuY2xhc3MgRXZlbnRTdGF0dXNJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5zdGF0ZSkge1xuICAgICAgY2FzZSAnT0snOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZERvbmVcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnUEVORElORyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kSG91clxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnU1RBUlRFRCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEZhQ29nXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyMyMjc0YjUnLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnRkFJTEVEJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRFcnJvclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnQ0FOQ0VMTEVEJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRFcnJvclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnRFVQTElDQVRFJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRFcnJvclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnSUdOT1JFRCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kU2NoZWR1bGVcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuXG4gICAgICBjYXNlICdUSU1FT1VUJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRTY2hlZHVsZVxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPE1kSGVscE91dExpbmUgc3R5bGU9e3sgY29sb3I6ICdncmV5Jywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyIH19IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U3RhdHVzSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50U3RhdHVzSWNvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFjdGlvblRyYW5zbGF0aW9ucyBmcm9tICcuL2FjdGlvblRyYW5zbGF0aW9ucyc7XG5pbXBvcnQgRmFDaGV2cm9uRG93biBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1kb3duJztcbmltcG9ydCBGYUNoZXZyb25VcCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi11cCc7XG5pbXBvcnQgQ29udHJvbGxlZExpbmsgZnJvbSAnLi9Db250cm9sbGVkTGluayc7XG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJy4vdHJhbnNsYXRpb25zJztcbmltcG9ydCBFdmVudFN0YXR1c0ljb24gZnJvbSAnLi9FdmVudFN0YXR1c0ljb24nO1xuXG5jb25zdCBORVRFWF9CTE9DS1NfRVZFTlRTID0gW1xuICAnRVhQT1JUX05FVEVYX0JMT0NLUycsXG4gICdFWFBPUlRfTkVURVhfQkxPQ0tTX1BPU1RWQUxJREFUSU9OJ1xuXTtcblxuY29uc3QgQU5UVV9WQUxJREFUSU9OX0VWRU5UUyA9IFtcbiAgJ1BSRVZBTElEQVRJT04nLFxuICAnRVhQT1JUX05FVEVYX1BPU1RWQUxJREFUSU9OJyxcbiAgJ0VYUE9SVF9ORVRFWF9NRVJHRURfUE9TVFZBTElEQVRJT04nLFxuICAnRVhQT1JUX05FVEVYX0JMT0NLU19QT1NUVkFMSURBVElPTidcbl07XG5cbmNsYXNzIEV2ZW50U3RlcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleHBhbmRlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBncm91cHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBsaXN0SXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgZXZlbnRTdGF0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdGSUxFX1RSQU5TRkVSJyxcbiAgICAgICdGSUxFX0NMQVNTSUZJQ0FUSU9OJyxcbiAgICAgICdGSUxFX0RFTElWRVJZJyxcbiAgICAgICdQUkVWQUxJREFUSU9OJyxcbiAgICAgICdJTVBPUlQnLFxuICAgICAgJ1ZBTElEQVRJT05fTEVWRUxfMScsXG4gICAgICAnREFUQVNQQUNFX1RSQU5TRkVSJyxcbiAgICAgICdWQUxJREFUSU9OX0xFVkVMXzInLFxuICAgICAgJ0VYUE9SVF9ORVRFWCcsXG4gICAgICAnRVhQT1JUX05FVEVYX1BPU1RWQUxJREFUSU9OJyxcbiAgICAgICdFWFBPUlRfTkVURVhfTUVSR0VEX1BPU1RWQUxJREFUSU9OJyxcbiAgICAgICdFWFBPUlRfTkVURVhfQkxPQ0tTJyxcbiAgICAgICdFWFBPUlQnLFxuICAgICAgJ0JVSUxEX0dSQVBIJyxcbiAgICAgICdPVFAyX0JVSUxEX0dSQVBIJyxcbiAgICAgICdFWFBPUlRfTkVURVhfQkxPQ0tTX1BPU1RWQUxJREFUSU9OJyxcbiAgICBdO1xuICB9XG5cbiAgYWRkVW5saXN0ZWRTdGF0ZXMoZ3JvdXBzKSB7XG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5ldmVudFN0YXRlcygpO1xuXG4gICAgbGV0IGdyb3Vwc1dpdGhVbmxpc3RlZCA9IE9iamVjdC5hc3NpZ24oe30sIGdyb3Vwcyk7XG5cbiAgICBsZXQgZmlyc3RTdGF0ZUZvdW5kID0gZmFsc2U7XG5cbiAgICBzdGF0ZXMuZm9yRWFjaChzdGF0ZSA9PiB7XG4gICAgICBpZiAoIWdyb3Vwc1dpdGhVbmxpc3RlZFtzdGF0ZV0pIHtcbiAgICAgICAgZ3JvdXBzV2l0aFVubGlzdGVkW3N0YXRlXSA9IHtcbiAgICAgICAgICBlbmRTdGF0ZTogJ0lHTk9SRUQnLFxuICAgICAgICAgIG1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0OiAhZmlyc3RTdGF0ZUZvdW5kXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXJzdFN0YXRlRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGZpbmFsR3JvdXBzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHNXaXRoVW5saXN0ZWQpXG4gICAgICAuc29ydCgoa2V5MSwga2V5MikgPT4gc3RhdGVzLmluZGV4T2Yoa2V5MSkgLSBzdGF0ZXMuaW5kZXhPZihrZXkyKSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGZpbmFsR3JvdXBzW2tleV0gPSBncm91cHNXaXRoVW5saXN0ZWRba2V5XTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBmaW5hbEdyb3VwcztcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWRcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNvbWJpbmVkU3BsaXQoZm9ybWF0dGVkR3JvdXBzLCBncm91cHMsIG5hbWUpIHtcbiAgICBjb25zdCBjb21iaW5lZCA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gZ3JvdXBzKSB7XG4gICAgICBjb25zdCBncm91cCA9IGdyb3Vwc1tpXTtcbiAgICAgIGNvbWJpbmVkW2dyb3VwXSA9IGZvcm1hdHRlZEdyb3Vwc1tncm91cF07XG5cbiAgICAgIGlmIChuYW1lICE9PSBncm91cCkge1xuICAgICAgICBkZWxldGUgZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9ybWF0dGVkR3JvdXBzW25hbWVdID0gY29tYmluZWQ7XG4gIH1cblxuICBhZ2dyZWdnYXRlRmlsZUV2ZW50cyhkYXRhKSB7XG4gICAgbGV0IGdyb3VwcyA9IHsgLi4uZGF0YSB9O1xuICAgIGxldCBlbmRTdGF0ZSA9IG51bGw7XG4gICAgbGV0IGVycm9yT24gPSBudWxsO1xuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICBpZiAoZ3JvdXAgPT09ICdGSUxFX0NMQVNTSUZJQ0FUSU9OJyB8fCBncm91cCA9PT0gJ0ZJTEVfVFJBTlNGRVInKSB7XG4gICAgICAgIGVuZFN0YXRlID0gZ3JvdXBzW2dyb3VwXS5lbmRTdGF0ZTtcblxuICAgICAgICBpZiAoZW5kU3RhdGUgPT09ICdGQUlMRUQnIHx8IGVuZFN0YXRlID09PSAnRFVQTElDQVRFJykge1xuICAgICAgICAgIGVycm9yT24gPSBncm91cDtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgZ3JvdXBzW2dyb3VwXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChlbmRTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgZ3JvdXBzLkZJTEVfREVMSVZFUlkgPSB7XG4gICAgICAgIGVuZFN0YXRlOiBlcnJvck9uID8gJ0ZBSUxFRCcgOiBlbmRTdGF0ZSxcbiAgICAgICAgZXJyb3JPbixcbiAgICAgICAgbWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQ6IGVuZFN0YXRlID09ICdJR05PUkVEJyAmJiAhZXJyb3JPblxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuXG4gIGJ1bGxldChmb3JtYXR0ZWRHcm91cHMsIGdyb3VwcywgbG9jYWxlLCBpbmNsdWRlTGV2ZWwyLCBoaWRlSWdub3JlZEV4cG9ydE5ldGV4QmxvY2tzLCBoaWRlQW50dVZhbGlkYXRpb25TdGVwcykge1xuICAgIGNvbnN0IGNvbHVtblN0eWxlID0gKGNvbHVtbikgPT4gKHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIGhlaWdodDogQXJyYXkuaXNBcnJheShjb2x1bW4pICYmIGNvbHVtbi5sZW5ndGggPiAyID8gOTAgOiA0NVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZvcm1hdHRlZEdyb3VwcykubWFwKChncm91cCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjb2x1bW47XG4gICAgICBsZXQgZXZlbnQgPSBmb3JtYXR0ZWRHcm91cHNbZ3JvdXBdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgY29sdW1uID0gT2JqZWN0LmtleXMoZXZlbnQpXG4gICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoaGlkZUlnbm9yZWRFeHBvcnROZXRleEJsb2NrcyAmJiBORVRFWF9CTE9DS1NfRVZFTlRTLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50W2tleV0uZW5kU3RhdGUgIT09ICdJR05PUkVEJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZGVBbnR1VmFsaWRhdGlvblN0ZXBzICYmIEFOVFVfVkFMSURBVElPTl9FVkVOVFMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICByZXR1cm4gZXZlbnRba2V5XS5lbmRTdGF0ZSAhPT0gJ0lHTk9SRUQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoQU5UVV9WQUxJREFUSU9OX0VWRU5UUy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudFtrZXldLmVuZFN0YXRlICE9PSAnSUdOT1JFRCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm1hcCgoa2V5LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRXZlbnQoXG4gICAgICAgICAgICBldmVudFtrZXldLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgaW5jbHVkZUxldmVsMlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGhpZGVJZ25vcmVkRXhwb3J0TmV0ZXhCbG9ja3MgJiYgTkVURVhfQkxPQ0tTX0VWRU5UUy5pbmNsdWRlcyhncm91cCkgJiYgZXZlbnQuZW5kU3RhdGUgPT09ICdJR05PUkVEJykge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpZGVBbnR1VmFsaWRhdGlvblN0ZXBzICYmIEFOVFVfVkFMSURBVElPTl9FVkVOVFMuaW5jbHVkZXMoZ3JvdXApKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQU5UVV9WQUxJREFUSU9OX0VWRU5UUy5pbmNsdWRlcyhncm91cCkgJiYgZXZlbnQuZW5kU3RhdGUgPT09ICdJR05PUkVEJykge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sdW1uID0gdGhpcy5yZW5kZXJFdmVudChcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBncm91cHMsXG4gICAgICAgICAgZ3JvdXAsXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgaW5kZXggPT09IDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgaW5jbHVkZUxldmVsMlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9eydidWxsZXQtJyArIGluZGV4fSBzdHlsZT17Y29sdW1uU3R5bGUoY29sdW1uKX0+XG4gICAgICAgICAge2NvbHVtbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyRXZlbnQoXG4gICAgZXZlbnQsXG4gICAgZ3JvdXBzLFxuICAgIGdyb3VwLFxuICAgIGluZGV4LFxuICAgIGlzRmlyc3QsXG4gICAgY29sdW1uSW5kZXggPSAwLFxuICAgIGxvY2FsZSxcbiAgICBpbmNsdWRlTGV2ZWwyXG4gICkge1xuICAgIGNvbnN0IGdyb3VwU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93J1xuICAgIH07XG5cbiAgICBjb25zdCBncm91cFRleHQgPSB7XG4gICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgIG1hcmdpbkxlZnQ6IDVcbiAgICB9O1xuXG4gICAgY29uc3QgbGlua1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiKDE4OSwgMTg5LCAxODkpJyxcbiAgICAgIG1hcmdpbkxlZnQ6IC02LFxuICAgICAgYm9yZGVyVG9wU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJUb3BXaWR0aDogMSxcbiAgICAgIHdpZHRoOiAzMCxcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXG4gICAgICBtYXJnaW46IDgsXG4gICAgICB0cmFuc2Zvcm06IGNvbHVtbkluZGV4ID4gMCAmJiAndHJhbnNsYXRlWSgtMC41ZW0pIHJvdGF0ZSgyNWRlZykgJ1xuICAgIH07XG5cbiAgICBpZiAoIUFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLnN0YXRlc1tldmVudC5lbmRTdGF0ZV0pIHJldHVybiBudWxsO1xuXG4gICAgbGV0IHRvb2xUaXBUZXh0ID0gQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uc3RhdGVzW2V2ZW50LmVuZFN0YXRlXTtcblxuICAgIGlmIChldmVudC5zdGF0ZXMgJiYgZXZlbnQuc3RhdGVzW2dyb3Vwc1tncm91cF0uc3RhdGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICB0b29sVGlwVGV4dCArPSAnICcgKyBldmVudC5zdGF0ZXNbZXZlbnQuc3RhdGVzLmxlbmd0aCAtIDFdLmRhdGU7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmVycm9yT24pIHtcbiAgICAgIHRvb2xUaXBUZXh0ID0gQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uZXJyb3JNZXNzYWdlW2V2ZW50LmVycm9yT25dO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtncm91cFN0eWxlfSBrZXk9eydncm91cC0nICsgZ3JvdXAgKyBpbmRleH0+XG4gICAgICAgIHshaXNGaXJzdCAmJiA8ZGl2IHN0eWxlPXtsaW5rU3R5bGV9IC8+fVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdGl0bGU9e3Rvb2xUaXBUZXh0fVxuICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IGV2ZW50Lm1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0ID8gMC4yIDogMSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEV2ZW50U3RhdHVzSWNvbiBzdGF0ZT17ZXZlbnQuZW5kU3RhdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLmdyb3VwVGV4dCxcbiAgICAgICAgICAgIG9wYWNpdHk6IGV2ZW50Lm1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0ID8gMC4yIDogMVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q29udHJvbGxlZExpbmsgaW5jbHVkZUxldmVsMj17aW5jbHVkZUxldmVsMn0gZXZlbnRzPXtldmVudH0gbmF2aWdhdGU9e3RoaXMucHJvcHMubmF2aWdhdGV9PlxuICAgICAgICAgICAge0FjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLnRleHRbZ3JvdXBdfVxuICAgICAgICAgIDwvQ29udHJvbGxlZExpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdGVwcGVyc3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnc3RhcnQnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiAxMFxuICAgIH07XG5cbiAgICBjb25zdCB7IGdyb3VwcywgbGlzdEl0ZW0sIGxvY2FsZSwgaW5jbHVkZUxldmVsMiwgaGlkZUlnbm9yZWRFeHBvcnROZXRleEJsb2NrcywgaGlkZUFudHVWYWxpZGF0aW9uU3RlcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBleHBhbmRlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBmb3JtYXR0ZWRHcm91cHMgPSB0aGlzLmFkZFVubGlzdGVkU3RhdGVzKGdyb3Vwcyk7XG4gICAgZm9ybWF0dGVkR3JvdXBzID0gdGhpcy5hZ2dyZWdnYXRlRmlsZUV2ZW50cyhmb3JtYXR0ZWRHcm91cHMpO1xuXG4gICAgdGhpcy5jcmVhdGVDb21iaW5lZFNwbGl0KFxuICAgICAgZm9ybWF0dGVkR3JvdXBzLFxuICAgICAgWydFWFBPUlRfTkVURVhfQkxPQ0tTJywgJ0VYUE9SVCcsICdCVUlMRF9HUkFQSCcsICdPVFAyX0JVSUxEX0dSQVBIJ10sXG4gICAgICAnQlVJTERfR1JBUEgnXG4gICAgKTtcblxuICAgIGNvbnN0IGJ1bGxldHMgPSB0aGlzLmJ1bGxldChmb3JtYXR0ZWRHcm91cHMsIGdyb3VwcywgbG9jYWxlLCBpbmNsdWRlTGV2ZWwyLCBoaWRlSWdub3JlZEV4cG9ydE5ldGV4QmxvY2tzLCBoaWRlQW50dVZhbGlkYXRpb25TdGVwcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9eydldmVudCcgKyBsaXN0SXRlbS5jaG91ZXR0ZUpvYklkfVxuICAgICAgICBzdHlsZT17eyBtYXJnaW46ICdhdXRvJywgd2lkdGg6ICc5OCUnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkxlZnQ6IC0xNSB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB0aXRsZT17dHJhbnNsYXRpb25zW2xvY2FsZV0uZHVyYXRpb24gKyBsaXN0SXRlbS5kdXJhdGlvbn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgIGNvbG9yOiAnI2U1OTQwMCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogLTgsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGlzdEl0ZW0uc3RhcnRlZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bGlzdEl0ZW0ucHJvdmlkZXIgJiZcbiAgICAgICAgICAgIGxpc3RJdGVtLnByb3ZpZGVyLm5hbWUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMC44ZW0nLCBmb250V2VpZ2h0OiA2MDAsIGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAge2xpc3RJdGVtLnByb3ZpZGVyLm5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMC45ZW0nLCBmb250V2VpZ2h0OiA2MDAsIGZsZXg6IDIgfX0+XG4gICAgICAgICAgICB7bGlzdEl0ZW0uZmlsZU5hbWUgfHwgQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uZmlsZW5hbWUudW5kZWZpbmVkfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17c3RlcHBlcnN0eWxlfT5cbiAgICAgICAgICB7YnVsbGV0c31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIG1hcmdpblJpZ2h0OiAyMCwgbWFyZ2luVG9wOiAtMjUgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVG9nZ2xlVmlzaWJpbGl0eSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshZXhwYW5kZWQgPyA8RmFDaGV2cm9uRG93biAvPiA6IDxGYUNoZXZyb25VcCAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtleHBhbmRlZCAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiA4LFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGlzdEl0ZW0uZXJyb3JDb2RlICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCwgY29sb3I6ICdyZWQnIH19PlxuICAgICAgICAgICAgICAgICAge0FjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLmVycm9yQ29kZVtsaXN0SXRlbS5lcnJvckNvZGVdfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnN0YXJ0ZWR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmZpcnN0RXZlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5lbmRlZH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7bGlzdEl0ZW0ubGFzdEV2ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uZHVyYXRpb259XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmR1cmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS51c2VybmFtZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLnVzZXJuYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTdGVwcGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGVwcGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRmlsdGVyQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc3QgeyBoYW5kbGVDbGljaywgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGhhbmRsZUNsaWNrICYmIHR5cGVvZiBoYW5kbGVDbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaGFuZGxlQ2xpY2soaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBhY3RpdmUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWN0aXZlU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzIxOTZGMycsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMxNTU5OWQnXG4gICAgfTtcbiAgICBjb25zdCBpbmFjdGl2ZVN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDhkOGQ4J1xuICAgIH07XG4gICAgY29uc3QgZGVmYXVsdFN0eWxlID0ge1xuICAgICAgcGFkZGluZzogJzAuMmVtIDAuNGVtJyxcbiAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1JScsXG4gICAgICBtaW5XaWR0aDogNDAsXG4gICAgICBtYXJnaW5MZWZ0OiAxMFxuICAgIH07XG5cbiAgICBjb25zdCBidXR0b25TdHlsZSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBkZWZhdWx0U3R5bGUsXG4gICAgICBhY3RpdmUgPyBhY3RpdmVTdHlsZSA6IGluYWN0aXZlU3R5bGVcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gc3R5bGU9e2J1dHRvblN0eWxlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCl9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvaW50ZXJFdmVudHM6ICdub25lJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWx0ZXJCdXR0b24gZnJvbSAnLi9GaWx0ZXJCdXR0b24nO1xuaW1wb3J0IGJ1dHRvbkNvbmZpZyBmcm9tICcuL2J1dHRvbkNvbmZpZyc7XG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJy4vYWN0aW9uVHJhbnNsYXRpb25zJztcblxuY2xhc3MgRmlsdGVyQnV0dG9uVHJheSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9jYWxlLCBhY3RpdmVCdXR0b25JZCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgIHtidXR0b25Db25maWcuZmllbGRzLm1hcChmaWVsZCA9PlxuICAgICAgICAgIDxGaWx0ZXJCdXR0b25cbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlQnV0dG9uSWQgPT09IGZpZWxkLmlkfVxuICAgICAgICAgICAgaWQ9e2ZpZWxkLmlkfVxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IHsgb25DaGFuZ2UoZmllbGQuaWQpIH19XG4gICAgICAgICAgICBrZXk9eydmaWx0ZXItYnV0dG9uLScgKyBmaWVsZC5pZH1cbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGlvbnNbbG9jYWxlXS5maWx0ZXJCdXR0b25bZmllbGQuaWRdfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJ1dHRvblRyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCdXR0b25UcmF5LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb2xvciwgZGltZW5zaW9uIH0gZnJvbSAnLi4vc3R5bGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlclRpbWVsaW5lLmNzcyc7XG5cbmNsYXNzIEhlYWRlclRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBob3ZlclRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRGF5c09mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRnJvbURhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBlZmZlY3RpdmVQZXJpb2RzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93VG9vbHRpcDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlVG9vbFRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWZmZWN0aXZlUGVyaW9kcywgdmFsaWREYXlzT2Zmc2V0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgIHdpZHRoOiBkaW1lbnNpb24udGltZUxpbmVXaWR0aCArICclJyxcbiAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZm9udFNpemU6ICcwJScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH07XG5cbiAgICBsZXQgdGltZWxpbmVXcmFwcGVyID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogMlxuICAgIH07XG5cbiAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVTdWNjZXNzLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGZvbnRTaXplOiAnMC44cmVtJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH07XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTBweCwgMjBweCknLFxuICAgICAgZm9udFNpemU6ICcxLjJlbScsXG4gICAgICBjb2xvcjogZWZmZWN0aXZlUGVyaW9kcy5sZW5ndGggPyBjb2xvci5lZmZlY3RpdmUgOiBjb2xvci5mYWlsLFxuICAgICAgekluZGV4OiA5OVxuICAgIH07XG5cbiAgICBjb25zdCB0b29sVGlwU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDFzJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgICBjb2xvcjogY29sb3IuZm9udC50b29sdGlwLFxuICAgICAgYmFja2dyb3VuZDogY29sb3IudG9vbHRpcCxcbiAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIHpJbmRleDogOTlcbiAgICB9O1xuXG4gICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDVweCBibGFjaycsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgaGVpZ2h0OiAxOCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xuICAgIH07XG5cbiAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXG4gICAgICB3aWR0aDogJzFweCcsXG4gICAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbWFyZ2luTGVmdDogMzMgKyB2YWxpZERheXNPZmZzZXQgKyAnJSdcbiAgICB9O1xuXG4gICAgbGV0IGhvdmVyVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZHMubGVuZ3RoXG4gICAgICA/IHRoaXMucHJvcHMuaG92ZXJUZXh0XG4gICAgICA6ICdVZ3lsZGlnIGxpbmplLiBNYW5nbGVyIGRhdGEnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lV3JhcHBlcn0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17dGl0bGVUZXh0fVxuICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZVRvZ2dsZVRvb2xUaXAuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlVG9nZ2xlVG9vbFRpcC5iaW5kKHRoaXMpfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucHJvcHMubGluZX1cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VG9vbHRpcCAmJlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dG9vbFRpcFN0eWxlfT4ge2hvdmVyVGV4dH0gPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZX0gc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgIDxkaXYga2V5PXsndGltZWxpbmUtaGVhZGVyLXdyYXBwZXInICsgdGhpcy5wcm9wcy5pbmRleH0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtoclN0eWxlfSAvPlxuICAgICAgICAgICAge2VmZmVjdGl2ZVBlcmlvZHMubWFwKChlZmZlY3RpdmVQZXJpb2QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBwZXJpb2RCbG9jayA9IHsgLi4udGltZUJsb2NrIH07XG4gICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID1cbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAtXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArXG4gICAgICAgICAgICAgICAgJyUnO1xuXG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPVxuICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID1cbiAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gLVxuICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kc1tpbmRleCAtIDFdLnRpbWVsaW5lRW5kUG9zaXRpb24gK1xuICAgICAgICAgICAgICAgICAgJyUnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IGl0ZW1UZXh0ID0gZWZmZWN0aXZlUGVyaW9kLnRvO1xuXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID4gMCAmJlxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC5mcm9tLmxvY2FsZUNvbXBhcmUoZWZmZWN0aXZlUGVyaW9kLnRvKSAhPT0gMFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpdGVtVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZC5mcm9tICsgJyAtICcgKyBlZmZlY3RpdmVQZXJpb2QudG87XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXsndGltZWxpbmUtaGVhZGVyLWJsb2NrJyArIGluZGV4fSBzdHlsZT17cGVyaW9kQmxvY2t9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclRpbWVsaW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbG9yLCBkaW1lbnNpb24gfSBmcm9tICcuLi9zdHlsZXMnO1xuXG5jb25zdCBwZXJpb2QgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBmcm9tOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpbWVsaW5lU3RhcnRQb3NpdGlvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lbGluZUVuZFBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn0pO1xuXG5jb25zdCB0aW1ldGFibGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBvYmplY3RJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwZXJpb2RzOiBQcm9wVHlwZXMuYXJyYXlPZihwZXJpb2QpLmlzUmVxdWlyZWRcbn0pLmlzUmVxdWlyZWQ7XG5cbmNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aW1ldGFibGVzOiBQcm9wVHlwZXMuYXJyYXlPZih0aW1ldGFibGUpLmlzUmVxdWlyZWQsXG4gICAgaXNMYXN0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRGF5c09mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGltZXRhYmxlcywgdmFsaWREYXlzT2Zmc2V0LCBpc0xhc3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lQmFja2dyb3VuZCxcbiAgICAgIHdpZHRoOiBkaW1lbnNpb24udGltZUxpbmVXaWR0aCArICclJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9O1xuXG4gICAgY29uc3QgdGltZWxpbmVXcmFwcGVyID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHBhZGRpbmdCb3R0b206IGlzTGFzdCA/IDAgOiAxMFxuICAgIH07XG5cbiAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVCbG9ja0JhY2tncm91bmQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgfTtcblxuICAgIGxldCB0ZXh0U3R5bGUgPSB7XG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAndmlzYmxlJyxcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDVweCBibGFjaycsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbWFyZ2luOiAnYXV0byAxMHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICBmb250U2l6ZTogJzAuN2VtJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgIH07XG5cbiAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXG4gICAgICB3aWR0aDogJzFweCcsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfTtcblxuICAgIGhyU3R5bGUubWFyZ2luTGVmdCA9IDMzICsgdmFsaWREYXlzT2Zmc2V0ICsgJyUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lV3JhcHBlcn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e2hyU3R5bGV9IC8+XG4gICAgICAgICAge3RpbWV0YWJsZXMubWFwKHRpbWV0YWJsZSA9PlxuICAgICAgICAgICAgdGltZXRhYmxlLnBlcmlvZHMubWFwKChwZXJpb2QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGltZXRhYmxlLm9iamVjdElkO1xuICAgICAgICAgICAgICBjb25zdCBob3ZlciA9IGAke3RpdGxlfSBcXG4ocGVyaW9kOiAke3BlcmlvZC5mcm9tfSAtPiAke3BlcmlvZC50b30pYDtcbiAgICAgICAgICAgICAgbGV0IHBlcmlvZEJsb2NrID0geyAuLi50aW1lQmxvY2sgfTtcbiAgICAgICAgICAgICAgcGVyaW9kQmxvY2sud2lkdGggPVxuICAgICAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC0gcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJztcbiAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9IHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJSc7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXsndGltZXRhYmxlLXBlcmlvZC0nICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtwZXJpb2RCbG9ja31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2hvdmVyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0U3R5bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFVkdWdMaW5rID0gKHsgaWQsIHJlZmVyZW50aWFsLCBuYXZpZ2F0ZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBiYXNlVVJMID0gYCR7d2luZG93LmNvbmZpZy51ZHVnQmFzZVVybH1yZXBvcnQvYDtcbiAgY29uc3QgVVJMID0gYCR7YmFzZVVSTH0ke3JlZmVyZW50aWFsfS8ke2lkfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8YSB0aXRsZT17VVJMfSBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZShVUkwpfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVZHVnTGluaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1VkdWdMaW5rLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25vdG9zYW5za2FubmFkYS5jc3MpO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEthbm5hZGEnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzE5MTkxOTtcXG59XFxuXFxucCxoMSxoMixoMyxoNCxoNSwgc3BhbiB7XFxuICAgIGNvbG9yOiAjMTkxOTE5O1xcbn1cXG5cXG4uXzJwT1pUNk9Fd1Iydl9jaTcyVzRrb0I6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5tU0dLVmxtY1dFU2J4RUhyN0JhejIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLl8xaDlBRy1WV3hfVTQwVHhWRTAxNTVLIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLl8xak4tTjd5ZlNLWWgxS1V6cmFzNGxaIHtcXG4gICAgY29sb3I6ICMwRDNDNjE7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uXzIxcDU1Vk1fZTc1XzJpQmlyVzFNa2Yge1xcbiAgICBjb2xvcjogIzIxOTZGMztcXG59XFxuXFxuXFxuYSB7XFxuICAgIGNvbG9yOiAjMjE5NkYzO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIsIGE6Zm9jdXMge1xcbiAgICBjb2xvcjogIzE5NzZEMjtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGVyaW9kLWJsb2NrXCI6IFwiXzJwT1pUNk9Fd1Iydl9jaTcyVzRrb0JcIixcblx0XCJwYWdlLWxpbmstcGFyZW50XCI6IFwibVNHS1ZsbWNXRVNieEVIcjdCYXoyXCIsXG5cdFwicGFnZS1saW5rXCI6IFwiXzFoOUFHLVZXeF9VNDBUeFZFMDE1NUtcIixcblx0XCJhY3RpdmUtbGlua1wiOiBcIl8xak4tTjd5ZlNLWWgxS1V6cmFzNGxaXCIsXG5cdFwiaW5hY3RpdmUtbGlua1wiOiBcIl8yMXA1NVZNX2U3NV8yaUJpclcxTWtmXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcz10cnVlIS4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uXzJ0VS1mODZmXzQyZzFwVlZRWlhGWEMge1xcbiAgYmFja2dyb3VuZDogI0I5MTkxOTtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI2Y2ZjZmNiksIGNvbG9yLXN0b3AoMTAwJSwgI2Y2ZjZmNikpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNmNmY2ZjYpLCBjb2xvci1zdG9wKDEwMCUsICNmNmY2ZjYpKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGltZWxpbmVcIjogXCJfMnRVLWY4NmZfNDJnMXBWVlFaWEZYQ1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP21vZHVsZXM9dHJ1ZSEuL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDaGV2cm9uRG93biA9IGZ1bmN0aW9uIEZhQ2hldnJvbkRvd24ocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMzcuNiAxOGwtMTYuNiAxNi42cS0wLjQgMC40LTEgMC40dC0xLTAuNGwtMTYuNi0xNi42cS0wLjQtMC40LTAuNC0xdDAuNC0xbDMuNy0zLjdxMC41LTAuNCAxLTAuNHQxIDAuNGwxMS45IDExLjkgMTEuOS0xMS45cTAuNC0wLjQgMS0wLjR0MSAwLjRsMy43IDMuN3EwLjQgMC40IDAuNCAxdC0wLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDaGV2cm9uRG93bjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1kb3duLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDaGV2cm9uVXAgPSBmdW5jdGlvbiBGYUNoZXZyb25VcChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNy42IDI5LjdsLTMuNyAzLjdxLTAuNSAwLjQtMSAwLjR0LTEtMC40bC0xMS45LTExLjktMTEuOCAxMS45cS0wLjUgMC40LTEuMSAwLjR0LTEtMC40bC0zLjctMy43cS0wLjQtMC40LTAuNC0xdDAuNC0xbDE2LjYtMTYuNnEwLjQtMC40IDEtMC40dDEgMC40bDE2LjYgMTYuNnEwLjQgMC40IDAuNCAxdC0wLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDaGV2cm9uVXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tdXAuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNvZyA9IGZ1bmN0aW9uIEZhQ29nKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTI1LjkgMjBxMC0yLjQtMS43LTR0LTQuMS0xLjctNCAxLjctMS43IDQgMS43IDQgNCAxLjcgNC4xLTEuNyAxLjctNHogbTExLjQtMi40djQuOXEwIDAuMy0wLjIgMC41dC0wLjQgMC4zbC00LjIgMC42cS0wLjQgMS4zLTAuOCAyLjEgMC43IDEuMSAyLjMgMy4xIDAuMyAwLjIgMC4zIDAuNXQtMC4yIDAuNXEtMC42IDAuOS0yLjIgMi40dC0yLjEgMS42cS0wLjMgMC0wLjYtMC4ybC0zLjEtMi40cS0xIDAuNS0yIDAuOS0wLjQgMy0wLjcgNC4xLTAuMSAwLjYtMC44IDAuNmgtNC45cS0wLjMgMC0wLjYtMC4xdC0wLjItMC41bC0wLjctNC4xcS0xLjEtMC40LTItMC45bC0zLjEgMi40cS0wLjIgMC4yLTAuNiAwLjItMC4zIDAtMC41LTAuMi0yLjgtMi42LTMuNy0zLjgtMC4yLTAuMi0wLjItMC41IDAtMC4yIDAuMi0wLjUgMC4zLTAuNSAxLjEtMS41dDEuMi0xLjVxLTAuNi0xLjItMC45LTIuM2wtNC4xLTAuNnEtMC4yIDAtMC40LTAuMnQtMC4yLTAuNnYtNC45cTAtMC4zIDAuMi0wLjV0MC40LTAuM2w0LjItMC43cTAuMy0xIDAuOC0yLTAuOS0xLjMtMi40LTMuMS0wLjItMC4zLTAuMi0wLjUgMC0wLjIgMC4yLTAuNSAwLjYtMC44IDIuMi0yLjR0Mi4xLTEuNnEwLjMgMCAwLjYgMC4ybDMuMSAyLjRxMS0wLjUgMi0wLjkgMC40LTMgMC43LTQuMSAwLjEtMC42IDAuOC0wLjZoNC45cTAuMyAwIDAuNiAwLjF0MC4yIDAuNWwwLjcgNC4xcTEgMC40IDIgMC45bDMuMS0yLjRxMC4yLTAuMiAwLjYtMC4yIDAuMyAwIDAuNSAwLjIgMi45IDIuNiAzLjcgMy44IDAuMiAwLjIgMC4yIDAuNSAwIDAuMi0wLjIgMC41LTAuNCAwLjUtMS4yIDEuNXQtMS4yIDEuNXEwLjYgMS4yIDEgMi4ybDQgMC43cTAuMyAwIDAuNSAwLjJ0MC4yIDAuNnonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDb2c7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NvZy5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhUmVmcmVzaCA9IGZ1bmN0aW9uIEZhUmVmcmVzaChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNi43IDIzLjZxMCAwLjEgMCAwLjEtMS40IDYtNiA5Ljd0LTEwLjYgMy43cS0zLjMgMC02LjQtMS4ydC01LjQtMy41bC0yLjkgMi45cS0wLjQgMC40LTEgMC40dC0xLTAuNC0wLjQtMXYtMTBxMC0wLjYgMC40LTF0MS0wLjRoMTBxMC42IDAgMSAwLjR0MC41IDEtMC41IDFsLTMgM3ExLjYgMS41IDMuNiAyLjN0NC4xIDAuOHEzIDAgNS42LTEuNHQ0LjItNHEwLjItMC40IDEuMi0yLjYgMC4xLTAuNSAwLjYtMC41aDQuM3EwLjMgMCAwLjUgMC4ydDAuMiAwLjV6IG0wLjYtMTcuOXYxMHEwIDAuNi0wLjQgMXQtMSAwLjRoLTEwcS0wLjYgMC0xLTAuNHQtMC41LTEgMC41LTFsMy0zLjFxLTMuMy0zLTcuOC0zLTIuOSAwLTUuNSAxLjR0LTQuMiA0cS0wLjIgMC40LTEuMiAyLjYtMC4yIDAuNS0wLjYgMC41aC00LjVxLTAuMyAwLTAuNS0wLjJ0LTAuMi0wLjV2LTAuMXExLjUtNiA2LTkuN3QxMC43LTMuN3EzLjMgMCA2LjQgMS4ydDUuNCAzLjVsMy0yLjlxMC40LTAuNCAxLTAuNHQxIDAuNCAwLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFSZWZyZXNoO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRDaGVja0NpcmNsZSA9IGZ1bmN0aW9uIE1kQ2hlY2tDaXJjbGUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMTYuNiAyOC40bDE1LTE1LTIuMy0yLjUtMTIuNyAxMi43LTUuOS01LjktMi4zIDIuM3ogbTMuNC0yNWM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZENoZWNrQ2lyY2xlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9jaGVjay1jaXJjbGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEVycm9yID0gZnVuY3Rpb24gTWRFcnJvcihwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMS42IDIxLjZ2LTEwaC0zLjJ2MTBoMy4yeiBtMCA2Ljh2LTMuNGgtMy4ydjMuNGgzLjJ6IG0tMS42LTI1YzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kRXJyb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2Vycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRIZWxwT3V0bGluZSA9IGZ1bmN0aW9uIE1kSGVscE91dGxpbmUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjAgMTBjMy43IDAgNi42IDMgNi42IDYuNiAwIDQuMi01IDQuNy01IDguNGgtMy4yYzAtNS40IDUtNSA1LTguNCAwLTEuOC0xLjYtMy4yLTMuNC0zLjJzLTMuNCAxLjQtMy40IDMuMmgtMy4yYzAtMy42IDIuOS02LjYgNi42LTYuNnogbTAgMjMuNGM3LjMgMCAxMy40LTYuMSAxMy40LTEzLjRzLTYuMS0xMy40LTEzLjQtMTMuNC0xMy40IDYuMS0xMy40IDEzLjQgNi4xIDEzLjQgMTMuNCAxMy40eiBtMC0zMGM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eiBtLTEuNiAyNi42di0zLjRoMy4ydjMuNGgtMy4yeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZEhlbHBPdXRsaW5lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEhvdXJnbGFzc0VtcHR5ID0gZnVuY3Rpb24gTWRIb3VyZ2xhc3NFbXB0eShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMCAxOS4xbDYuNi02LjZ2LTUuOWgtMTMuMnY1Ljl6IG02LjYgOC40bC02LjYtNi42LTYuNiA2LjZ2NS45aDEzLjJ2LTUuOXogbS0xNi42LTI0LjFoMjB2MTBsLTYuNiA2LjYgNi42IDYuNnYxMGgtMjB2LTEwbDYuNi02LjYtNi42LTYuNnYtMTB6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kSG91cmdsYXNzRW1wdHk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2hvdXJnbGFzcy1lbXB0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kU2NoZWR1bGUgPSBmdW5jdGlvbiBNZFNjaGVkdWxlKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIwLjkgMTEuNnY4LjhsNy41IDQuNC0xLjMgMi4yLTguNy01LjR2LTEwaDIuNXogbS0wLjkgMjEuOGM3LjMgMCAxMy40LTYuMSAxMy40LTEzLjRzLTYuMS0xMy40LTEzLjQtMTMuNC0xMy40IDYuMS0xMy40IDEzLjQgNi4xIDEzLjQgMTMuNCAxMy40eiBtMC0zMGM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZFNjaGVkdWxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9zY2hlZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2ZpeFVybHMuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9FdmVudERldGFpbHMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9IZWFkZXJUaW1lbGluZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=