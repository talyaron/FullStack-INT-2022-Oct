"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classProviders = void 0;
const class_entity_1 = require("./entities/class.entity");
const constants_1 = require("../../common/constants");
const student_entity_1 = require("../students/entities/student.entity");
exports.classProviders = [
    {
        provide: constants_1.CLASS,
        useValue: class_entity_1.Class,
    },
    {
        provide: constants_1.STUDENT,
        useValue: student_entity_1.Student,
    },
];
//# sourceMappingURL=class.providers.js.map