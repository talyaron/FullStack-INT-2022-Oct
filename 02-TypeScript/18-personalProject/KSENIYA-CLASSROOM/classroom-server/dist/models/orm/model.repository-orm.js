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
exports.BaseRepositoryORM = void 0;
const serializers_1 = require("../../common/serializers");
class BaseRepositoryORM {
    constructor(module) {
        this.module = module;
    }
    async all(where, relation) {
        return await this.module.findAll({
            where: where && (0, serializers_1.serializerWhereOptions)(where),
            include: relation && (0, serializers_1.serializerRelationOptions)(relation),
        });
    }
    async findBy(where, options = {}, relation) {
        return await this.module.findAll(Object.assign(Object.assign({}, (0, serializers_1.serializerFindOptions)(options)), { where: (0, serializers_1.serializerWhereOptions)(where), include: relation && (0, serializers_1.serializerRelationOptions)(relation) }));
    }
    async findByPk(id, options = {}, relation) {
        return await this.module.findByPk(id, Object.assign(Object.assign({}, (0, serializers_1.serializerFindOptions)(options)), { include: relation && (0, serializers_1.serializerRelationOptions)(relation) }));
    }
    async create(attributes, options = {}) {
        return await this.module.create(attributes, options);
    }
    async update(id, attributes, _a = { where: {} }) {
        var { where } = _a, options = __rest(_a, ["where"]);
        const [, modules] = await this.module.update(attributes, Object.assign(Object.assign({}, options), { returning: true, where: Object.assign({ id }, where) }));
        return modules;
    }
}
exports.BaseRepositoryORM = BaseRepositoryORM;
//# sourceMappingURL=model.repository-orm.js.map