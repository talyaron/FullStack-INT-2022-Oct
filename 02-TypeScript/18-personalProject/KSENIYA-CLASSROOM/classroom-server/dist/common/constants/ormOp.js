"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operatorsORM = void 0;
const sequelize_1 = require("sequelize");
exports.operatorsORM = {
    in: sequelize_1.Op.in,
    or: sequelize_1.Op.or,
    gt: sequelize_1.Op.gt,
    lt: sequelize_1.Op.lt,
    lte: sequelize_1.Op.lte,
    not: sequelize_1.Op.not,
    gte: sequelize_1.Op.gte,
    and: sequelize_1.Op.and,
    equal: sequelize_1.Op.eq,
    like: sequelize_1.Op.like,
    notEqual: sequelize_1.Op.ne
};
//# sourceMappingURL=ormOp.js.map