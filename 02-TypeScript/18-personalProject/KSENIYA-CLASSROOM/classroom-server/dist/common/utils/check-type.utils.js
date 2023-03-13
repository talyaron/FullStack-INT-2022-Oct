"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperatorsOptionsMemory = exports.isObject = exports.isDate = exports.isString = exports.isNumber = void 0;
const isNumber = (value) => typeof value === "number" || value instanceof Number;
exports.isNumber = isNumber;
const isString = (value) => typeof value === "string" || value instanceof String;
exports.isString = isString;
const isDate = (value) => value instanceof Date;
exports.isDate = isDate;
const isObject = (value) => value === null ? false : typeof value === "function" || typeof value === "object";
exports.isObject = isObject;
function isOperatorsOptionsMemory(obj) {
    return typeof obj === "object" && !(obj instanceof Date);
}
exports.isOperatorsOptionsMemory = isOperatorsOptionsMemory;
//# sourceMappingURL=check-type.utils.js.map