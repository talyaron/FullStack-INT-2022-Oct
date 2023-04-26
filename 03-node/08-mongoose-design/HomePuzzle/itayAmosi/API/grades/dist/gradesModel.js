"use strict";
exports.__esModule = true;
exports.GradeSchema = void 0;
var mongoose_1 = require("mongoose");
exports.GradeSchema = new mongoose_1.Schema({
    // student: StudentSchema,
    // exam: ExamSchema,
    // course: CourseSchema,
    grade: Number
});
var GradeModel = mongoose_1["default"].model("grades", exports.GradeSchema);
exports["default"] = GradeModel;
