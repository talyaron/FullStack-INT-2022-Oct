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
exports.StudentRepository = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../common/constants");
const class_entity_1 = require("../classes/entities/class.entity");
let StudentRepository = class StudentRepository {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async findAll() {
        return this.studentModel.findAll({
            include: [
                {
                    model: class_entity_1.Class,
                },
            ],
        });
    }
    getAssignedStudents(classId) {
        return this.studentModel.findAll({ where: { classId } });
    }
    assignStudent(tz, classId) {
        return this.studentModel.update({ classId }, { where: { tz } });
    }
    unAssignStudent(tz, classId) {
        return this.studentModel.update({ classId: null }, { where: { tz } });
    }
    removeOne(tz) {
        return this.studentModel.destroy({
            where: {
                tz,
            },
        });
    }
};
StudentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.STUDENT)),
    __metadata("design:paramtypes", [Object])
], StudentRepository);
exports.StudentRepository = StudentRepository;
//# sourceMappingURL=students.repository.js.map