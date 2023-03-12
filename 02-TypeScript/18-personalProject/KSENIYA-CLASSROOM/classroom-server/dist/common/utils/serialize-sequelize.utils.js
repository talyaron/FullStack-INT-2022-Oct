"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSequelize = void 0;
const sequelize_1 = require("sequelize");
function serializeSequelize(value) {
    if (value instanceof sequelize_1.Model) {
        return value.toJSON();
    }
    return value;
}
exports.serializeSequelize = serializeSequelize;
//# sourceMappingURL=serialize-sequelize.utils.js.map