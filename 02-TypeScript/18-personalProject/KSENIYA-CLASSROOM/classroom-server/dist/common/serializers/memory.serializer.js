"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializerWhereOptionsMemory = exports.serializerKeyWhereOptionsMemory = void 0;
const utils_1 = require("../utils");
const utils_2 = require("../utils");
function serializerKeyWhereOptionsMemory(object, objectWhere) {
    return Object.keys(objectWhere)
        .map(keyWhere => {
        const compareWhere = objectWhere[keyWhere];
        if ((0, utils_2.isOperatorsOptionsMemory)(compareWhere)) {
            return Object.keys(compareWhere)
                .map((operators) => {
                return utils_1.Op[operators](object, compareWhere[operators], keyWhere);
            })
                .every(Boolean);
        }
        return utils_1.Op.equal(object, compareWhere, keyWhere);
    })
        .every(Boolean);
}
exports.serializerKeyWhereOptionsMemory = serializerKeyWhereOptionsMemory;
function serializerWhereOptionsMemory(object, where) {
    if ("and" in where) {
        return utils_1.Op.and(object, where.and);
    }
    if ("or" in where) {
        return utils_1.Op.or(object, where.or);
    }
    return serializerKeyWhereOptionsMemory(object, where);
}
exports.serializerWhereOptionsMemory = serializerWhereOptionsMemory;
//# sourceMappingURL=memory.serializer.js.map