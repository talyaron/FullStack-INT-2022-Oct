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
exports.ClassesService = void 0;
const common_1 = require("@nestjs/common");
const classes_repository_1 = require("./classes.repository");
let ClassesService = class ClassesService {
    constructor(classRepository) {
        this.classRepository = classRepository;
    }
    async findAll() {
        const classes = await this.classRepository.findAll();
        if (!classes.length)
            throw new common_1.NotFoundException('Classes not found');
        return classes;
    }
    incrementSeats(classId) {
        this.classRepository.incrementSeats(classId);
    }
    decrementSeats(classId) {
        this.classRepository.incrementSeats(classId);
    }
    findOne(classId) {
        return this.classRepository.findOne(classId);
    }
    availableClasses() {
        return this.classRepository.availableClasses();
    }
    async removeOne(classId) {
        const currClass = await this.findOne(classId);
        if (currClass.availableSeats > 0)
            throw new Error('Class has assigned students');
        return this.classRepository.removeOne(classId);
    }
};
ClassesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [classes_repository_1.ClassRepository])
], ClassesService);
exports.ClassesService = ClassesService;
//# sourceMappingURL=classes.service.js.map