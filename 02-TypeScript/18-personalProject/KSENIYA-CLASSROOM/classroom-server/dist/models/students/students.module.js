"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsModule = void 0;
const common_1 = require("@nestjs/common");
const students_service_1 = require("./students.service");
const students_controller_1 = require("./students.controller");
const students_repository_1 = require("./students.repository");
const students_providers_1 = require("./students.providers");
const classes_service_1 = require("../classes/classes.service");
const classes_repository_1 = require("../classes/classes.repository");
const class_providers_1 = require("../classes/class.providers");
let StudentsModule = class StudentsModule {
};
StudentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [students_controller_1.StudentsController],
        providers: [students_service_1.StudentsService, students_repository_1.StudentRepository, ...students_providers_1.studentProviders,
            classes_service_1.ClassesService,
            classes_repository_1.ClassRepository,
            ...class_providers_1.classProviders,],
    })
], StudentsModule);
exports.StudentsModule = StudentsModule;
//# sourceMappingURL=students.module.js.map