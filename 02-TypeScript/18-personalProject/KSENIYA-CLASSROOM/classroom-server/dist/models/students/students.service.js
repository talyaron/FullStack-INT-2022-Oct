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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const classes_service_1 = require("../classes/classes.service");
const students_repository_1 = require("./students.repository");
let StudentsService = class StudentsService {
    constructor(studentRepository, classService) {
        this.studentRepository = studentRepository;
        this.classService = classService;
    }
    async findAll() {
        const students = await this.studentRepository.findAll();
        if (!students.length)
            throw new common_1.NotFoundException('Classes not found');
        return students;
    }
    unAssignStudent(id, classId) {
        return this.studentRepository.unAssignStudent(id, classId);
    }
    getAssignedStudents(classId) {
        return this.studentRepository.getAssignedStudents(classId);
    }
    assignStudent(id, classId) {
        this.classService.decrementSeats(classId);
        return this.studentRepository.assignStudent(id, classId);
    }
    removeOne(id) {
        return this.studentRepository.removeOne(id);
    }
};
StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [students_repository_1.StudentRepository,
        classes_service_1.ClassesService])
], StudentsService);
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map