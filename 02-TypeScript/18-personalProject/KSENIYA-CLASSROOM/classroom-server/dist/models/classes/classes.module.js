"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesModule = void 0;
const common_1 = require("@nestjs/common");
const classes_service_1 = require("./classes.service");
const classes_controller_1 = require("./classes.controller");
const classes_repository_1 = require("./classes.repository");
const class_providers_1 = require("./class.providers");
let ClassesModule = class ClassesModule {
};
ClassesModule = __decorate([
    (0, common_1.Module)({
        controllers: [classes_controller_1.ClassesController],
        providers: [
            classes_service_1.ClassesService,
            classes_repository_1.ClassRepository,
            ...class_providers_1.classProviders,
        ],
    })
], ClassesModule);
exports.ClassesModule = ClassesModule;
//# sourceMappingURL=classes.module.js.map