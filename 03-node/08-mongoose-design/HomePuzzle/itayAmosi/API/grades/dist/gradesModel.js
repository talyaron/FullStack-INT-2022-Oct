"use strict";
exports.__esModule = true;
exports.GradeSchema = void 0;
var mongoose_1 = require("mongoose");
var studentsModel_1 = require("../students/studentsModel");
var examsModel_1 = require("../exams/examsModel");
var coursesModel_1 = require("../courses/coursesModel");
exports.GradeSchema = new mongoose_1.Schema({
    student: studentsModel_1.StudentSchema,
    exam: examsModel_1.ExamSchema,
    course: coursesModel_1.CourseSchema,
    grade: Number,
    studentId: String,
    courseId: String
});
var GradeModel = mongoose_1["default"].model("grades", exports.GradeSchema);
exports["default"] = GradeModel;
