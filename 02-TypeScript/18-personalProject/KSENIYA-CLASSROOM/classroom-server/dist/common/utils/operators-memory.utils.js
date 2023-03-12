"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Op = void 0;
const _1 = require(".");
const serializers_1 = require("../serializers");
exports.Op = {
    or: or,
    and: and,
    gt: (object, compare, key) => object[key] > compare,
    lt: (object, compare, key) => object[key] < compare,
    like: (object, like, key) => object[key].match(like),
    lte: (object, compare, key) => object[key] <= compare,
    gte: (object, compare, key) => object[key] >= compare,
    equal: (object, compare, key) => object[key] === compare,
    notEqual: (object, compare, key) => object[key] !== compare,
    in: (object, compare, key) => compare.includes(object[key])
};
function and(object, compare) {
    return compare.map(objectWhere => (0, serializers_1.serializerKeyWhereOptionsMemory)(object, objectWhere)).every(Boolean);
}
function or(object, compare, key) {
    if (Array.isArray(compare)) {
        return compare
            .map(objectWhere => {
            if ((0, _1.isObject)(objectWhere) && !(0, _1.isDate)(objectWhere)) {
                return (0, serializers_1.serializerWhereOptionsMemory)(object, objectWhere);
            }
            return exports.Op.equal(object, objectWhere, key);
        })
            .some(Boolean);
    }
}
//# sourceMappingURL=operators-memory.utils.js.map