"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPropertyPermitted = exports.filterRecordParams = void 0;
var _utils = require("../../../utils");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const filterRecordParams = function (record, options = {}) {
  if (options.includeParams && record) {
    return _objectSpread(_objectSpread({}, record), {}, {
      params: _utils.flat.selectParams(record.params || {}, options.includeParams)
    });
  }
  return record;
};
exports.filterRecordParams = filterRecordParams;
const isPropertyPermitted = (propertyName, options = {}) => {
  const {
    includeParams
  } = options;
  if (includeParams) {
    const parts = _utils.flat.pathToParts(propertyName, {
      skipArrayIndexes: true
    });
    return parts.some(part => includeParams.includes(part));
  }
  return true;
};
exports.isPropertyPermitted = isPropertyPermitted;