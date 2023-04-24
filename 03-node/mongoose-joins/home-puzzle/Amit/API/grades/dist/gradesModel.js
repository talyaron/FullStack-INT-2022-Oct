"use strict";
exports.__esModule = true;
exports.GradeSchema = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
var studentsModel_1 = require("../students/studentsModel");
exports.GradeSchema = new mongoose_1.Schema({
    student: studentsModel_1.StudentSchema,
    course: coursesModel_1.CourseSchema,
    grade: Number
});
var GradeModel = mongoose_1["default"].model("grades", exports.GradeSchema);
exports["default"] = GradeModel;
