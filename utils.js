(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "moment"], factory);
	else if(typeof exports === 'object')
		exports["bogu"] = factory(require("react"), require("moment"));
	else
		root["bogu"] = factory(root["react"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatLineStats = exports.segmentName2Key = exports.segmentName = exports.segmentColor = exports.validity = exports.sortIcon = exports.sortLines = exports.sortMethod = exports.filterLines = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _moment = __webpack_require__(10);

var _moment2 = _interopRequireDefault(_moment);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var filterLines = exports.filterLines = function filterLines(lineData, selectedSegment, daysValid) {
  if (lineData.hasOwnProperty(selectedSegment)) {
    return lineData[selectedSegment].lineNumbers;
  }

  for (var i in lineData.validity) {
    var category = lineData.validity[i];
    if (category.numDaysAtLeastValid === daysValid) {
      return category.lineNumbers;
    }
  }

  // fallback to all
  console.log('error, showing all data');
  return lineData['all'].lineNumbers;
};

var sortMethod = exports.sortMethod = function sortMethod() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var ascending = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return function (a, b) {
    if (a[index] === b[index]) {
      return 0;
    } else if (a[index] < b[index]) {
      return ascending ? -1 : 1;
    } else {
      return ascending ? 1 : -1;
    }
  };
};

var sortLines = exports.sortLines = function sortLines(sorting, lineData, selectedSegment, daysValid) {
  var order = filterLines(lineData, selectedSegment, daysValid);

  switch (sorting) {
    default:
      return order;
    case 1:
      return [].concat(_toConsumableArray(order)).sort(function (a, b) {
        return a.localeCompare(b, 'nb', {
          numeric: true,
          sensitivity: 'base'
        });
      });
    case 2:
      return [].concat(_toConsumableArray(order)).sort(function (a, b) {
        return b.localeCompare(a, 'nb', {
          numeric: true,
          sensitivity: 'base'
        });
      });
    case 3:
      var daysAsc = lineData.daysValid.slice().sort(sortMethod('days', true));
      return daysAsc.filter(function (line) {
        return order.indexOf(line.lineNumber) !== -1;
      }).map(function (line) {
        return line.lineNumber;
      });
    case 4:
      var daysDesc = lineData.daysValid.slice().sort(sortMethod('days', false));
      return daysDesc.filter(function (line) {
        return order.indexOf(line.lineNumber) !== -1;
      }).map(function (line) {
        return line.lineNumber;
      });
  }
};

var sortIcon = exports.sortIcon = function sortIcon(sorting) {
  var def = _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '18',
      height: '18',
      viewBox: '0 0 18 24'
    },
    _react2.default.createElement('path', { d: 'M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z' })
  );
  var down = _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '18',
      height: '18',
      viewBox: '0 0 18 24'
    },
    _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
  );
  var up = _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '18',
      height: '18',
      viewBox: '0 0 18 24'
    },
    _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
  );
  var az = _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '18',
      viewBox: '0 0 24 18'
    },
    _react2.default.createElement(
      'text',
      { x: '12', y: '12', textAnchor: 'middle' },
      'AZ'
    )
  );
  var za = _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '18',
      viewBox: '0 0 24 18'
    },
    _react2.default.createElement(
      'text',
      { x: '12', y: '12', textAnchor: 'middle' },
      'ZA'
    )
  );
  switch (sorting) {
    default:
    case 0:
      return def;
    case 1:
      return _react2.default.createElement(
        'div',
        null,
        az,
        down
      );
    case 2:
      return _react2.default.createElement(
        'div',
        null,
        za,
        up
      );
    case 3:
      return down;
    case 4:
      return up;
  }
};

var validity = exports.validity = function validity(daysForward) {
  if (daysForward < 0 || daysForward === Infinity) {
    return 'INVALID';
  } else if (daysForward >= 120) {
    return 'VALID';
  }
  return 'EXPIRING';
};

var segmentColor = exports.segmentColor = function segmentColor(daysValid) {
  var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var green = 120 + daysValid + modifier;
  return '#FF' + green.toString(16) + '00';
};

var segmentName = exports.segmentName = function segmentName(segment, numDays, locale) {
  if (segmentMap(locale).hasOwnProperty(segment) && segment !== 'dynamic') {
    return segmentMap(locale)[segment];
  }

  return segmentMap(locale)['dynamic'].replace('DAYS', numDays);
};

var segmentName2Key = exports.segmentName2Key = function segmentName2Key(segmentName) {
  if (!text2key.hasOwnProperty(segmentName)) {
    var idxStart = segmentName.indexOf('< ') + 2;
    var idxEnd = segmentName.indexOf(' da');

    return {
      segment: 'dynamic',
      daysValid: parseInt(segmentName.substring(idxStart, idxEnd))
    };
  }
  return { segment: text2key[segmentName], daysValid: 0 };
};

var segmentMap = function segmentMap(locale) {
  switch (locale) {
    case 'nb':
      return {
        all: 'Alle linjer',
        valid: 'Gyldige linjer',
        expiring: 'Utgående linjer',
        invalid: 'Utgåtte linjer',
        dynamic: 'Utgående linjer (< DAYS dager)'
      };
    default:
    case 'en':
      return {
        all: 'All lines',
        valid: 'Valid lines',
        expiring: 'Expiring lines',
        invalid: 'Invalid lines',
        dynamic: 'Expiring lines (< DAYS days)'
      };
  }
};

var text2key = {
  'Alle linjer': 'all',
  'Gyldige linjer': 'valid',
  'Utgående linjer': 'expiring',
  'Utgåtte linjer': 'invalid',
  'All lines': 'all',
  'Valid lines': 'valid',
  'Expiring lines': 'expiring',
  'Invalid lines': 'invalid'
};

var validPeriod = function validPeriod(endDate, from, to) {
  return (0, _moment2.default)(endDate).add(1, 'days').isBetween(from, to, 'days', '[]') ? to : endDate;
};

var validDays = function validDays(lines) {
  return lines.map(function (line) {
    return { lineNumber: line.lineNumber, days: line.daysValid };
  });
};

var getDaysRange = function getDaysRange(startDate) {
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return _moment2.default.isMoment(end) ? end.diff(startDate, 'days') : end;
};

var minDays = function minDays(lineNumber2Days) {
  var days = Math.min.apply(Math, _toConsumableArray(lineNumber2Days.map(function (line) {
    return line.days;
  })));
  return {
    days: days === Infinity ? 0 : days,
    validity: validity(days)
  };
};

var sortValidity = function sortValidity(validity) {
  return validity.sort(function (a, b) {
    return a['numDaysAtLeastValid'] < b['numDaysAtLeastValid'] ? -1 : 1;
  });
};

var lines = function lines(lineStats, validity, defaultObject) {
  return lineStats.validityCategories.find(function (category) {
    return category.name === validity;
  }) || _extends({
    validity: validity
  }, defaultObject);
};

var formatLineStats = exports.formatLineStats = function formatLineStats(lineStats) {
  try {
    var _ref;

    var defaultObject = { lineNumbers: [] };

    var formattedLines = {
      invalid: lines(lineStats, 'INVALID', defaultObject),
      valid: lines(lineStats, 'VALID', defaultObject),
      expiring: lines(lineStats, 'EXPIRING', defaultObject),
      validity: sortValidity(lineStats.validityCategories),
      all: defaultObject
    };

    formattedLines.all.lineNumbers = (_ref = []).concat.apply(_ref, _toConsumableArray(formattedLines.validity.map(function (lines) {
      return lines.lineNumbers;
    })));

    var linesMap = {};

    var startDate = (0, _moment2.default)(lineStats.startDate, 'YYYY-MM-DD');
    var endDate = (0, _moment2.default)(startDate).add(lineStats.days, 'days');

    formattedLines.startDate = startDate.format('YYYY-MM-DD');
    formattedLines.days = lineStats.days;
    formattedLines.endDate = endDate.format('YYYY-MM-DD');

    lineStats.publicLines.forEach(function (publicLine) {
      publicLine.effectivePeriods.forEach(function (effectivePeriod) {
        var fromDate = (0, _moment2.default)(effectivePeriod.from, 'YYYY-MM-DD');
        var fromDiff = startDate.diff(fromDate, 'days', true);

        if (fromDiff > 0) {
          // now is after start date of effective period
          effectivePeriod.timelineStartPosition = 0;
        } else {
          effectivePeriod.timelineStartPosition = Math.abs(fromDiff) / formattedLines.days * 100;
        }

        var timelineEndPosition = 100;

        var toDate = (0, _moment2.default)(effectivePeriod.to, 'YYYY-MM-DD');
        var toDiff = (0, _moment2.default)(formattedLines.endDate, 'YYYY-MM-DD').diff((0, _moment2.default)(toDate).add(1, 'days'), 'days', true);

        if (toDiff > 0) {
          timelineEndPosition = 100 - toDiff / (formattedLines.days / 100);
        }

        effectivePeriod.timelineEndPosition = Math.max(timelineEndPosition, 0);

        var daysForward = effectivePeriod.timelineEndPosition / 100 * formattedLines.days;
        effectivePeriod.validationLevel = validity(daysForward);

        publicLine.daysValid = validPeriod(publicLine.daysValid || startDate, fromDate, toDate);
      });
      publicLine.daysValid = getDaysRange(startDate, publicLine.daysValid);

      publicLine.lines.forEach(function (line) {
        line.timetables.forEach(function (timetable) {
          timetable.periods.forEach(function (period) {
            var fromDiff = startDate.diff((0, _moment2.default)(period.from, 'YYYY-MM-DD'), 'days', true);

            if (fromDiff < 0) {
              period.timelineStartPosition = Math.abs(fromDiff) / formattedLines.days * 100;
            } else {
              period.timelineStartPosition = 0;
            }

            var timelineEndPosition = 100;

            var toDiff = (0, _moment2.default)(formattedLines.endDate, 'YYYY-MM-DD').diff((0, _moment2.default)(period.to, 'YYYY-MM-DD').add(1, 'days'), 'days', true);

            if (toDiff > 0) {
              timelineEndPosition = 100 - toDiff / (formattedLines.days / 100);
            }

            period.timelineEndPosition = Math.max(timelineEndPosition, 0);
          });
        });
      });

      linesMap[publicLine.lineNumber] = publicLine;
    });

    formattedLines.linesMap = linesMap;
    formattedLines.validDaysOffset = 33;
    formattedLines.validFromDate = (0, _moment2.default)(startDate).add(120, 'days').format('YYYY-MM-DD');
    formattedLines.daysValid = validDays(lineStats.publicLines);
    formattedLines.minDays = minDays(formattedLines.daysValid);

    return formattedLines;
  } catch (e) {
    console.error('error in getLineStats', e);
  }
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGRkNzEzNjRlNWRiNmIyNGFhNTgzPzk3ODciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIj8zYzYyIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmaWx0ZXJMaW5lcyIsImxpbmVEYXRhIiwic2VsZWN0ZWRTZWdtZW50IiwiZGF5c1ZhbGlkIiwiaGFzT3duUHJvcGVydHkiLCJsaW5lTnVtYmVycyIsImkiLCJ2YWxpZGl0eSIsImNhdGVnb3J5IiwibnVtRGF5c0F0TGVhc3RWYWxpZCIsImNvbnNvbGUiLCJsb2ciLCJzb3J0TWV0aG9kIiwiaW5kZXgiLCJhc2NlbmRpbmciLCJhIiwiYiIsInNvcnRMaW5lcyIsInNvcnRpbmciLCJvcmRlciIsInNvcnQiLCJsb2NhbGVDb21wYXJlIiwibnVtZXJpYyIsInNlbnNpdGl2aXR5IiwiZGF5c0FzYyIsInNsaWNlIiwiZmlsdGVyIiwiaW5kZXhPZiIsImxpbmUiLCJsaW5lTnVtYmVyIiwibWFwIiwiZGF5c0Rlc2MiLCJzb3J0SWNvbiIsImRlZiIsImRvd24iLCJ1cCIsImF6IiwiemEiLCJkYXlzRm9yd2FyZCIsIkluZmluaXR5Iiwic2VnbWVudENvbG9yIiwibW9kaWZpZXIiLCJncmVlbiIsInRvU3RyaW5nIiwic2VnbWVudE5hbWUiLCJzZWdtZW50IiwibnVtRGF5cyIsImxvY2FsZSIsInNlZ21lbnRNYXAiLCJyZXBsYWNlIiwic2VnbWVudE5hbWUyS2V5IiwidGV4dDJrZXkiLCJpZHhTdGFydCIsImlkeEVuZCIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiYWxsIiwidmFsaWQiLCJleHBpcmluZyIsImludmFsaWQiLCJkeW5hbWljIiwidmFsaWRQZXJpb2QiLCJlbmREYXRlIiwiZnJvbSIsInRvIiwiYWRkIiwiaXNCZXR3ZWVuIiwidmFsaWREYXlzIiwibGluZXMiLCJkYXlzIiwiZ2V0RGF5c1JhbmdlIiwic3RhcnREYXRlIiwiZW5kIiwibW9tZW50IiwiaXNNb21lbnQiLCJkaWZmIiwibWluRGF5cyIsIk1hdGgiLCJtaW4iLCJsaW5lTnVtYmVyMkRheXMiLCJzb3J0VmFsaWRpdHkiLCJsaW5lU3RhdHMiLCJkZWZhdWx0T2JqZWN0IiwidmFsaWRpdHlDYXRlZ29yaWVzIiwiZmluZCIsIm5hbWUiLCJmb3JtYXRMaW5lU3RhdHMiLCJmb3JtYXR0ZWRMaW5lcyIsImNvbmNhdCIsImxpbmVzTWFwIiwiZm9ybWF0IiwicHVibGljTGluZXMiLCJmb3JFYWNoIiwicHVibGljTGluZSIsImVmZmVjdGl2ZVBlcmlvZHMiLCJmcm9tRGF0ZSIsImVmZmVjdGl2ZVBlcmlvZCIsImZyb21EaWZmIiwidGltZWxpbmVTdGFydFBvc2l0aW9uIiwiYWJzIiwidGltZWxpbmVFbmRQb3NpdGlvbiIsInRvRGF0ZSIsInRvRGlmZiIsIm1heCIsInZhbGlkYXRpb25MZXZlbCIsInRpbWV0YWJsZXMiLCJ0aW1ldGFibGUiLCJwZXJpb2RzIiwicGVyaW9kIiwidmFsaWREYXlzT2Zmc2V0IiwidmFsaWRGcm9tRGF0ZSIsImUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJC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cEMsRUFBdUMsTUFBdkMsQ0FEVyxFQUVYLE1BRlcsRUFHWCxJQUhXLENBQWI7O0FBTUEsZ0JBQUlxQyxTQUFTLENBQWIsRUFBZ0I7QUFDZEYsb0NBQXNCLE1BQU1FLFVBQVVmLGVBQWVsQixJQUFmLEdBQXNCLEdBQWhDLENBQTVCO0FBQ0Q7O0FBRUR1QyxtQkFBT1IsbUJBQVAsR0FBNkJ2QixLQUFLMEIsR0FBTCxDQUFTSCxtQkFBVCxFQUE4QixDQUE5QixDQUE3QjtBQUNELFdBM0JEO0FBNEJELFNBN0JEO0FBOEJELE9BL0JEOztBQWlDQVgsZUFBU0ksV0FBV2hFLFVBQXBCLElBQWtDZ0UsVUFBbEM7QUFDRCxLQTFFRDs7QUE0RUFOLG1CQUFlRSxRQUFmLEdBQTBCQSxRQUExQjtBQUNBRixtQkFBZXNCLGVBQWYsR0FBaUMsRUFBakM7QUFDQXRCLG1CQUFldUIsYUFBZixHQUErQixzQkFBT3ZDLFNBQVAsRUFDNUJOLEdBRDRCLENBQ3hCLEdBRHdCLEVBQ25CLE1BRG1CLEVBRTVCeUIsTUFGNEIsQ0FFckIsWUFGcUIsQ0FBL0I7QUFHQUgsbUJBQWVwRixTQUFmLEdBQTJCZ0UsVUFBVWMsVUFBVVUsV0FBcEIsQ0FBM0I7QUFDQUosbUJBQWVYLE9BQWYsR0FBeUJBLFFBQVFXLGVBQWVwRixTQUF2QixDQUF6Qjs7QUFFQSxXQUFPb0YsY0FBUDtBQUNELEdBN0dELENBNkdFLE9BQU93QixDQUFQLEVBQVU7QUFDVnJHLFlBQVFzRyxLQUFSLENBQWMsdUJBQWQsRUFBdUNELENBQXZDO0FBQ0Q7QUFDRixDQWpITSxDIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJtb21lbnRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYm9ndVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibW9tZW50XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJib2d1XCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJtb21lbnRcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkZDcxMzY0ZTVkYjZiMjRhYTU4MyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb21lbnRcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IGZpbHRlckxpbmVzID0gKGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZCkgPT4ge1xuICBpZiAobGluZURhdGEuaGFzT3duUHJvcGVydHkoc2VsZWN0ZWRTZWdtZW50KSkge1xuICAgIHJldHVybiBsaW5lRGF0YVtzZWxlY3RlZFNlZ21lbnRdLmxpbmVOdW1iZXJzO1xuICB9XG5cbiAgZm9yIChsZXQgaSBpbiBsaW5lRGF0YS52YWxpZGl0eSkge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gbGluZURhdGEudmFsaWRpdHlbaV07XG4gICAgaWYgKGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPT09IGRheXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5LmxpbmVOdW1iZXJzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZhbGxiYWNrIHRvIGFsbFxuICBjb25zb2xlLmxvZygnZXJyb3IsIHNob3dpbmcgYWxsIGRhdGEnKTtcbiAgcmV0dXJuIGxpbmVEYXRhWydhbGwnXS5saW5lTnVtYmVycztcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0TWV0aG9kID0gKGluZGV4ID0gMCwgYXNjZW5kaW5nID0gdHJ1ZSkgPT4ge1xuICByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgIGlmIChhW2luZGV4XSA9PT0gYltpbmRleF0pIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSBpZiAoYVtpbmRleF0gPCBiW2luZGV4XSkge1xuICAgICAgcmV0dXJuIGFzY2VuZGluZyA/IC0xIDogMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFzY2VuZGluZyA/IDEgOiAtMTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydExpbmVzID0gKHNvcnRpbmcsIGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZCkgPT4ge1xuICBjb25zdCBvcmRlciA9IGZpbHRlckxpbmVzKGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZCk7XG5cbiAgc3dpdGNoIChzb3J0aW5nKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBvcmRlcjtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gWy4uLm9yZGVyXS5zb3J0KChhLGIpID0+IHtcbiAgICAgICAgcmV0dXJuIGEubG9jYWxlQ29tcGFyZShiLCAnbmInLCB7XG4gICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcbiAgICAgICAgICBzZW5zaXRpdml0eTogJ2Jhc2UnXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIFsuLi5vcmRlcl0uc29ydCgoYSxiKSA9PiB7XG4gICAgICAgIHJldHVybiBiLmxvY2FsZUNvbXBhcmUoYSwgJ25iJywge1xuICAgICAgICAgIG51bWVyaWM6IHRydWUsXG4gICAgICAgICAgc2Vuc2l0aXZpdHk6ICdiYXNlJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIGNhc2UgMzpcbiAgICAgIGxldCBkYXlzQXNjID0gbGluZURhdGEuZGF5c1ZhbGlkLnNsaWNlKCkuc29ydChzb3J0TWV0aG9kKCdkYXlzJywgdHJ1ZSkpO1xuICAgICAgcmV0dXJuIGRheXNBc2NcbiAgICAgICAgLmZpbHRlcihsaW5lID0+IG9yZGVyLmluZGV4T2YobGluZS5saW5lTnVtYmVyKSAhPT0gLTEpXG4gICAgICAgIC5tYXAobGluZSA9PiBsaW5lLmxpbmVOdW1iZXIpO1xuICAgIGNhc2UgNDpcbiAgICAgIGxldCBkYXlzRGVzYyA9IGxpbmVEYXRhLmRheXNWYWxpZC5zbGljZSgpLnNvcnQoc29ydE1ldGhvZCgnZGF5cycsIGZhbHNlKSk7XG4gICAgICByZXR1cm4gZGF5c0Rlc2NcbiAgICAgICAgLmZpbHRlcihsaW5lID0+IG9yZGVyLmluZGV4T2YobGluZS5saW5lTnVtYmVyKSAhPT0gLTEpXG4gICAgICAgIC5tYXAobGluZSA9PiBsaW5lLmxpbmVOdW1iZXIpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydEljb24gPSBzb3J0aW5nID0+IHtcbiAgbGV0IGRlZiA9IChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgaGVpZ2h0PVwiMThcIlxuICAgICAgdmlld0JveD1cIjAgMCAxOCAyNFwiXG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0zIDE4aDZ2LTJIM3Yyek0zIDZ2MmgxOFY2SDN6bTAgN2gxMnYtMkgzdjJ6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbiAgbGV0IGRvd24gPSAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjE4XCJcbiAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTggMjRcIlxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNy40MSA3Ljg0TDEyIDEyLjQybDQuNTktNC41OEwxOCA5LjI1bC02IDYtNi02elwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG4gIGxldCB1cCA9IChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgaGVpZ2h0PVwiMThcIlxuICAgICAgdmlld0JveD1cIjAgMCAxOCAyNFwiXG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03LjQxIDE1LjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNGwtNi02LTYgNnpcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xuICBsZXQgYXogPSAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMThcIlxuICAgID5cbiAgICAgIDx0ZXh0IHg9XCIxMlwiIHk9XCIxMlwiIHRleHRBbmNob3I9XCJtaWRkbGVcIj5BWjwvdGV4dD5cbiAgICA8L3N2Zz5cbiAgKTtcbiAgbGV0IHphID0gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDE4XCJcbiAgICA+XG4gICAgICA8dGV4dCB4PVwiMTJcIiB5PVwiMTJcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+WkE8L3RleHQ+XG4gICAgPC9zdmc+XG4gICk7XG4gIHN3aXRjaCAoc29ydGluZykge1xuICAgIGRlZmF1bHQ6XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGRlZjtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gPGRpdj57YXp9e2Rvd259PC9kaXY+O1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiA8ZGl2Pnt6YX17dXB9PC9kaXY+O1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBkb3duO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiB1cDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkaXR5ID0gZGF5c0ZvcndhcmQgPT4ge1xuICBpZiAoZGF5c0ZvcndhcmQgPCAwIHx8IGRheXNGb3J3YXJkID09PSBJbmZpbml0eSkge1xuICAgIHJldHVybiAnSU5WQUxJRCc7XG4gIH0gZWxzZSBpZiAoZGF5c0ZvcndhcmQgPj0gMTIwKSB7XG4gICAgcmV0dXJuICdWQUxJRCc7XG4gIH1cbiAgcmV0dXJuICdFWFBJUklORyc7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VnbWVudENvbG9yID0gKGRheXNWYWxpZCwgbW9kaWZpZXIgPSAwKSA9PiB7XG4gIGxldCBncmVlbiA9IDEyMCArIGRheXNWYWxpZCArIG1vZGlmaWVyO1xuICByZXR1cm4gJyNGRicgKyBncmVlbi50b1N0cmluZygxNikgKyAnMDAnO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlZ21lbnROYW1lID0gKHNlZ21lbnQsIG51bURheXMsIGxvY2FsZSkgPT4ge1xuICBpZiAoc2VnbWVudE1hcChsb2NhbGUpLmhhc093blByb3BlcnR5KHNlZ21lbnQpICYmIHNlZ21lbnQgIT09ICdkeW5hbWljJykge1xuICAgIHJldHVybiBzZWdtZW50TWFwKGxvY2FsZSlbc2VnbWVudF07XG4gIH1cblxuICByZXR1cm4gc2VnbWVudE1hcChsb2NhbGUpWydkeW5hbWljJ10ucmVwbGFjZSgnREFZUycsIG51bURheXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlZ21lbnROYW1lMktleSA9IHNlZ21lbnROYW1lID0+IHtcbiAgaWYgKCF0ZXh0MmtleS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50TmFtZSkpIHtcbiAgICBsZXQgaWR4U3RhcnQgPSBzZWdtZW50TmFtZS5pbmRleE9mKCc8ICcpICsgMjtcbiAgICBsZXQgaWR4RW5kID0gc2VnbWVudE5hbWUuaW5kZXhPZignIGRhJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VnbWVudDogJ2R5bmFtaWMnLFxuICAgICAgZGF5c1ZhbGlkOiBwYXJzZUludChzZWdtZW50TmFtZS5zdWJzdHJpbmcoaWR4U3RhcnQsIGlkeEVuZCkpXG4gICAgfTtcbiAgfVxuICByZXR1cm4geyBzZWdtZW50OiB0ZXh0MmtleVtzZWdtZW50TmFtZV0sIGRheXNWYWxpZDogMCB9O1xufTtcblxuY29uc3Qgc2VnbWVudE1hcCA9IGxvY2FsZSA9PiB7XG4gIHN3aXRjaCAobG9jYWxlKSB7XG4gICAgY2FzZSAnbmInOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWxsOiAnQWxsZSBsaW5qZXInLFxuICAgICAgICB2YWxpZDogJ0d5bGRpZ2UgbGluamVyJyxcbiAgICAgICAgZXhwaXJpbmc6ICdVdGfDpWVuZGUgbGluamVyJyxcbiAgICAgICAgaW52YWxpZDogJ1V0Z8OldHRlIGxpbmplcicsXG4gICAgICAgIGR5bmFtaWM6ICdVdGfDpWVuZGUgbGluamVyICg8IERBWVMgZGFnZXIpJ1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgIGNhc2UgJ2VuJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFsbDogJ0FsbCBsaW5lcycsXG4gICAgICAgIHZhbGlkOiAnVmFsaWQgbGluZXMnLFxuICAgICAgICBleHBpcmluZzogJ0V4cGlyaW5nIGxpbmVzJyxcbiAgICAgICAgaW52YWxpZDogJ0ludmFsaWQgbGluZXMnLFxuICAgICAgICBkeW5hbWljOiAnRXhwaXJpbmcgbGluZXMgKDwgREFZUyBkYXlzKSdcbiAgICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IHRleHQya2V5ID0ge1xuICAnQWxsZSBsaW5qZXInOiAnYWxsJyxcbiAgJ0d5bGRpZ2UgbGluamVyJzogJ3ZhbGlkJyxcbiAgJ1V0Z8OlZW5kZSBsaW5qZXInOiAnZXhwaXJpbmcnLFxuICAnVXRnw6V0dGUgbGluamVyJzogJ2ludmFsaWQnLFxuICAnQWxsIGxpbmVzJzogJ2FsbCcsXG4gICdWYWxpZCBsaW5lcyc6ICd2YWxpZCcsXG4gICdFeHBpcmluZyBsaW5lcyc6ICdleHBpcmluZycsXG4gICdJbnZhbGlkIGxpbmVzJzogJ2ludmFsaWQnXG59O1xuXG5jb25zdCB2YWxpZFBlcmlvZCA9IChlbmREYXRlLCBmcm9tLCB0bykgPT5cbiAgbW9tZW50KGVuZERhdGUpLmFkZCgxLCAnZGF5cycpLmlzQmV0d2Vlbihmcm9tLCB0bywgJ2RheXMnLCAnW10nKVxuICAgID8gdG9cbiAgICA6IGVuZERhdGU7XG5cbmNvbnN0IHZhbGlkRGF5cyA9IGxpbmVzID0+XG4gIGxpbmVzLm1hcChsaW5lID0+IHtcbiAgICByZXR1cm4geyBsaW5lTnVtYmVyOiBsaW5lLmxpbmVOdW1iZXIsIGRheXM6IGxpbmUuZGF5c1ZhbGlkIH07XG4gIH0pO1xuXG5jb25zdCBnZXREYXlzUmFuZ2UgPSAoc3RhcnREYXRlLCBlbmQgPSAwKSA9PlxuICBtb21lbnQuaXNNb21lbnQoZW5kKSA/IGVuZC5kaWZmKHN0YXJ0RGF0ZSwgJ2RheXMnKSA6IGVuZDtcblxuY29uc3QgbWluRGF5cyA9IGxpbmVOdW1iZXIyRGF5cyA9PiB7XG4gIGxldCBkYXlzID0gTWF0aC5taW4oLi4ubGluZU51bWJlcjJEYXlzLm1hcChsaW5lID0+IGxpbmUuZGF5cykpO1xuICByZXR1cm4ge1xuICAgIGRheXM6IGRheXMgPT09IEluZmluaXR5ID8gMCA6IGRheXMsXG4gICAgdmFsaWRpdHk6IHZhbGlkaXR5KGRheXMpXG4gIH07XG59O1xuXG5jb25zdCBzb3J0VmFsaWRpdHkgPSB2YWxpZGl0eSA9PlxuICB2YWxpZGl0eS5zb3J0KFxuICAgIChhLCBiKSA9PiAoYVsnbnVtRGF5c0F0TGVhc3RWYWxpZCddIDwgYlsnbnVtRGF5c0F0TGVhc3RWYWxpZCddID8gLTEgOiAxKVxuICApO1xuXG5jb25zdCBsaW5lcyA9IChsaW5lU3RhdHMsIHZhbGlkaXR5LCBkZWZhdWx0T2JqZWN0KSA9PlxuICBsaW5lU3RhdHMudmFsaWRpdHlDYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkubmFtZSA9PT0gdmFsaWRpdHkpIHx8IHtcbiAgICB2YWxpZGl0eSxcbiAgICAuLi5kZWZhdWx0T2JqZWN0XG4gIH07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRMaW5lU3RhdHMgPSBsaW5lU3RhdHMgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRlZmF1bHRPYmplY3QgPSB7IGxpbmVOdW1iZXJzOiBbXSB9O1xuXG4gICAgbGV0IGZvcm1hdHRlZExpbmVzID0ge1xuICAgICAgaW52YWxpZDogbGluZXMobGluZVN0YXRzLCAnSU5WQUxJRCcsIGRlZmF1bHRPYmplY3QpLFxuICAgICAgdmFsaWQ6IGxpbmVzKGxpbmVTdGF0cywgJ1ZBTElEJywgZGVmYXVsdE9iamVjdCksXG4gICAgICBleHBpcmluZzogbGluZXMobGluZVN0YXRzLCAnRVhQSVJJTkcnLCBkZWZhdWx0T2JqZWN0KSxcbiAgICAgIHZhbGlkaXR5OiBzb3J0VmFsaWRpdHkobGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllcyksXG4gICAgICBhbGw6IGRlZmF1bHRPYmplY3RcbiAgICB9O1xuXG4gICAgZm9ybWF0dGVkTGluZXMuYWxsLmxpbmVOdW1iZXJzID0gW10uY29uY2F0KFxuICAgICAgLi4uZm9ybWF0dGVkTGluZXMudmFsaWRpdHkubWFwKGxpbmVzID0+IGxpbmVzLmxpbmVOdW1iZXJzKVxuICAgICk7XG5cbiAgICBsZXQgbGluZXNNYXAgPSB7fTtcblxuICAgIGxldCBzdGFydERhdGUgPSBtb21lbnQobGluZVN0YXRzLnN0YXJ0RGF0ZSwgJ1lZWVktTU0tREQnKTtcbiAgICBsZXQgZW5kRGF0ZSA9IG1vbWVudChzdGFydERhdGUpLmFkZChsaW5lU3RhdHMuZGF5cywgJ2RheXMnKTtcblxuICAgIGZvcm1hdHRlZExpbmVzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICBmb3JtYXR0ZWRMaW5lcy5kYXlzID0gbGluZVN0YXRzLmRheXM7XG4gICAgZm9ybWF0dGVkTGluZXMuZW5kRGF0ZSA9IGVuZERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG5cbiAgICBsaW5lU3RhdHMucHVibGljTGluZXMuZm9yRWFjaChwdWJsaWNMaW5lID0+IHtcbiAgICAgIHB1YmxpY0xpbmUuZWZmZWN0aXZlUGVyaW9kcy5mb3JFYWNoKGVmZmVjdGl2ZVBlcmlvZCA9PiB7XG4gICAgICAgIGxldCBmcm9tRGF0ZSA9IG1vbWVudChlZmZlY3RpdmVQZXJpb2QuZnJvbSwgJ1lZWVktTU0tREQnKTtcbiAgICAgICAgbGV0IGZyb21EaWZmID0gc3RhcnREYXRlLmRpZmYoZnJvbURhdGUsICdkYXlzJywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGZyb21EaWZmID4gMCkge1xuICAgICAgICAgIC8vIG5vdyBpcyBhZnRlciBzdGFydCBkYXRlIG9mIGVmZmVjdGl2ZSBwZXJpb2RcbiAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID1cbiAgICAgICAgICAgIE1hdGguYWJzKGZyb21EaWZmKSAvIGZvcm1hdHRlZExpbmVzLmRheXMgKiAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGltZWxpbmVFbmRQb3NpdGlvbiA9IDEwMDtcblxuICAgICAgICBsZXQgdG9EYXRlID0gbW9tZW50KGVmZmVjdGl2ZVBlcmlvZC50bywgJ1lZWVktTU0tREQnKTtcbiAgICAgICAgbGV0IHRvRGlmZiA9IG1vbWVudChmb3JtYXR0ZWRMaW5lcy5lbmREYXRlLCAnWVlZWS1NTS1ERCcpLmRpZmYoXG4gICAgICAgICAgbW9tZW50KHRvRGF0ZSkuYWRkKDEsICdkYXlzJyksXG4gICAgICAgICAgJ2RheXMnLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodG9EaWZmID4gMCkge1xuICAgICAgICAgIHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDAgLSB0b0RpZmYgLyAoZm9ybWF0dGVkTGluZXMuZGF5cyAvIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiA9IE1hdGgubWF4KHRpbWVsaW5lRW5kUG9zaXRpb24sIDApO1xuXG4gICAgICAgIGxldCBkYXlzRm9yd2FyZCA9XG4gICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gLyAxMDAgKiBmb3JtYXR0ZWRMaW5lcy5kYXlzO1xuICAgICAgICBlZmZlY3RpdmVQZXJpb2QudmFsaWRhdGlvbkxldmVsID0gdmFsaWRpdHkoZGF5c0ZvcndhcmQpO1xuXG4gICAgICAgIHB1YmxpY0xpbmUuZGF5c1ZhbGlkID0gdmFsaWRQZXJpb2QoXG4gICAgICAgICAgcHVibGljTGluZS5kYXlzVmFsaWQgfHwgc3RhcnREYXRlLFxuICAgICAgICAgIGZyb21EYXRlLFxuICAgICAgICAgIHRvRGF0ZVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICBwdWJsaWNMaW5lLmRheXNWYWxpZCA9IGdldERheXNSYW5nZShzdGFydERhdGUsIHB1YmxpY0xpbmUuZGF5c1ZhbGlkKTtcblxuICAgICAgcHVibGljTGluZS5saW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBsaW5lLnRpbWV0YWJsZXMuZm9yRWFjaCh0aW1ldGFibGUgPT4ge1xuICAgICAgICAgIHRpbWV0YWJsZS5wZXJpb2RzLmZvckVhY2gocGVyaW9kID0+IHtcbiAgICAgICAgICAgIGxldCBmcm9tRGlmZiA9IHN0YXJ0RGF0ZS5kaWZmKFxuICAgICAgICAgICAgICBtb21lbnQocGVyaW9kLmZyb20sICdZWVlZLU1NLUREJyksXG4gICAgICAgICAgICAgICdkYXlzJyxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKGZyb21EaWZmIDwgMCkge1xuICAgICAgICAgICAgICBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID1cbiAgICAgICAgICAgICAgICBNYXRoLmFicyhmcm9tRGlmZikgLyBmb3JtYXR0ZWRMaW5lcy5kYXlzICogMTAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwO1xuXG4gICAgICAgICAgICBsZXQgdG9EaWZmID0gbW9tZW50KGZvcm1hdHRlZExpbmVzLmVuZERhdGUsICdZWVlZLU1NLUREJykuZGlmZihcbiAgICAgICAgICAgICAgbW9tZW50KHBlcmlvZC50bywgJ1lZWVktTU0tREQnKS5hZGQoMSwgJ2RheXMnKSxcbiAgICAgICAgICAgICAgJ2RheXMnLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAodG9EaWZmID4gMCkge1xuICAgICAgICAgICAgICB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwIC0gdG9EaWZmIC8gKGZvcm1hdHRlZExpbmVzLmRheXMgLyAxMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiA9IE1hdGgubWF4KHRpbWVsaW5lRW5kUG9zaXRpb24sIDApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBsaW5lc01hcFtwdWJsaWNMaW5lLmxpbmVOdW1iZXJdID0gcHVibGljTGluZTtcbiAgICB9KTtcblxuICAgIGZvcm1hdHRlZExpbmVzLmxpbmVzTWFwID0gbGluZXNNYXA7XG4gICAgZm9ybWF0dGVkTGluZXMudmFsaWREYXlzT2Zmc2V0ID0gMzM7XG4gICAgZm9ybWF0dGVkTGluZXMudmFsaWRGcm9tRGF0ZSA9IG1vbWVudChzdGFydERhdGUpXG4gICAgICAuYWRkKDEyMCwgJ2RheXMnKVxuICAgICAgLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgIGZvcm1hdHRlZExpbmVzLmRheXNWYWxpZCA9IHZhbGlkRGF5cyhsaW5lU3RhdHMucHVibGljTGluZXMpO1xuICAgIGZvcm1hdHRlZExpbmVzLm1pbkRheXMgPSBtaW5EYXlzKGZvcm1hdHRlZExpbmVzLmRheXNWYWxpZCk7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkTGluZXM7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdlcnJvciBpbiBnZXRMaW5lU3RhdHMnLCBlKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=