"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformObj = void 0;
function transformObj(obj, transforms) {
    if (typeof obj !== "object" || obj === null) {
        return;
    }
    function convertValue(value) {
        if (Array.isArray(value)) {
            return value.map(convertValue);
        }
        else if (typeof value === "object") {
            return transformObj(value, transforms);
        }
        else if ("values" in transforms) {
            return transforms.values(value);
        }
        else {
            return value;
        }
    }
    return Object.keys(obj).reduce((result, key) => {
        const value = obj[key];
        let newKey = key;
        if ("keys" in transforms) {
            newKey = transforms.keys(key);
        }
        result[newKey] = convertValue(value);
        return result;
    }, {});
}
exports.transformObj = transformObj;
//# sourceMappingURL=transform-obj.utils.js.map