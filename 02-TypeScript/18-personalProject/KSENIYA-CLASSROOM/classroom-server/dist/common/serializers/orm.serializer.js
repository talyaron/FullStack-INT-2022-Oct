"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializerFindOptions = exports.serializerWhereOptions = exports.serializerGroupOptions = exports.serializerRelationOptions = void 0;
const utils_1 = require("../utils");
const constants_1 = require("../constants");
const sequelize_1 = require("sequelize");
function serializerFunctionOptions({ fn, column }) {
    return (0, sequelize_1.fn)(fn, (0, sequelize_1.col)(column));
}
function serializerFindArrayAttributesOptions(attributes) {
    if (!Array.isArray(attributes)) {
        return;
    }
    return attributes.map(attribute => {
        if (typeof attribute === "string") {
            return attribute;
        }
        else if ("fn" in attribute) {
            return [serializerFunctionOptions(attribute), attribute.alias];
        }
        return [attribute.name, attribute.alias];
    });
}
function serializerFindAttributesOptions(attributes) {
    if (typeof attributes !== "object" || attributes === null) {
        return;
    }
    if (Array.isArray(attributes)) {
        return serializerFindArrayAttributesOptions(attributes);
    }
    else if ("include" in attributes) {
        return { include: serializerFindArrayAttributesOptions(attributes.include) };
    }
    else if ("exclude" in attributes) {
        return { exclude: attributes.exclude };
    }
}
function serializerOrderOptions(orderOptions) {
    if (!Array.isArray(orderOptions)) {
        return;
    }
    return orderOptions.map(({ by, order }) => [
        typeof by === "string" ? by : serializerFunctionOptions(by),
        order
    ]);
}
function serializerJoinOptions(joinOptions) {
    switch (joinOptions) {
        case "INNER": {
            return { required: true };
        }
        case "RIGHT": {
            return { required: false, right: true };
        }
        case "LEFT":
        default: {
            return { required: false, right: false };
        }
    }
}
function serializerRelationOptions(relations) {
    if (!relations) {
        return [];
    }
    if (Array.isArray(relations)) {
        return relations.map(serializerRelationObjectOptions);
    }
    return [serializerRelationObjectOptions(relations)];
}
exports.serializerRelationOptions = serializerRelationOptions;
function serializerRelationObjectOptions(relationObject) {
    if (!(0, utils_1.isObject)(relationObject)) {
        return;
    }
    const { on, join, order, where, relations } = relationObject, relationshipsOptions = __rest(relationObject, ["on", "join", "order", "where", "relations"]);
    return Object.assign(Object.assign(Object.assign({}, relationshipsOptions), serializerJoinOptions(join)), { on: serializerWhereOptions(on), order: serializerOrderOptions(order), where: serializerWhereOptions(where), include: serializerRelationOptions(relations) });
}
function serializerGroupOptions(groupOptions) {
    if (!Array.isArray(groupOptions)) {
        return;
    }
    return groupOptions.map(groupOption => {
        if (typeof groupOption === "string") {
            return groupOption;
        }
        return serializerFunctionOptions(groupOption);
    });
}
exports.serializerGroupOptions = serializerGroupOptions;
function serializerWhereOptions(whereOptions) {
    const keys = (key) => constants_1.operatorsORM[key] || key;
    return (0, utils_1.transformObj)(whereOptions, { keys });
}
exports.serializerWhereOptions = serializerWhereOptions;
function serializerFindOptions(_a) {
    var { order, where, group, attributes } = _a, findOptions = __rest(_a, ["order", "where", "group", "attributes"]);
    return Object.assign(Object.assign({}, findOptions), { group: serializerGroupOptions(group), order: serializerOrderOptions(order), where: serializerWhereOptions(where), attributes: serializerFindAttributesOptions(attributes) });
}
exports.serializerFindOptions = serializerFindOptions;
//# sourceMappingURL=orm.serializer.js.map