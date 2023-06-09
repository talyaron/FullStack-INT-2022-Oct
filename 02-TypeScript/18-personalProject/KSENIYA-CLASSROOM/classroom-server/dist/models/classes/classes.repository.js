"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRepository = void 0;
const class_entity_1 = require("./entities/class.entity");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const student_entity_1 = require("../students/entities/student.entity");
const constants_1 = require("../../common/constants");
let ClassRepository = class ClassRepository {
    constructor(classModel) {
        this.classModel = classModel;
    }
    async findAll() {
        return this.classModel.findAll({
            include: [
                {
                    model: student_entity_1.Student,
                },
            ],
        });
    }
    async findOne(classId) {
        return this.classModel.findByPk(classId);
    }
    incrementSeats(classId) {
        class_entity_1.Class.increment('availableSeats', {
            by: 1,
            where: { classId }
        });
    }
    decrementSeats(classId) {
        class_entity_1.Class.decrement('availableSeats', {
            by: 1,
            where: { classId }
        });
    }
    availableClasses() {
        return this.classModel.findAll({
            where: {
                availableSeats: { [sequelize_1.Op.gt]: 0 },
            },
        });
    }
    removeOne(classId) {
        return this.classModel.destroy({
            where: {
                classId,
            },
        });
    }
};
ClassRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.CLASS)),
    __metadata("design:paramtypes", [Object])
], ClassRepository);
exports.ClassRepository = ClassRepository;
//# sourceMappingURL=classes.repository.js.map