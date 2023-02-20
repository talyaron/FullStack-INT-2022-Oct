"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentProviders = void 0;
const student_entity_1 = require("./entities/student.entity");
const constants_1 = require("../../common/constants");
const class_entity_1 = require("../classes/entities/class.entity");
exports.studentProviders = [
    {
        provide: constants_1.STUDENT,
        useValue: student_entity_1.Student,
    },
    {
        provide: constants_1.CLASS,
        useValue: class_entity_1.Class,
    },
];
//# sourceMappingURL=students.providers.js.map