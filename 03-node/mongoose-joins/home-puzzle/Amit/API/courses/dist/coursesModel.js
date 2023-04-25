"use strict";
exports.__esModule = true;
exports.CourseStudentModel = exports.GradeModel = exports.CourseStudentSchema = exports.CourseSchema = void 0;
var mongoose_1 = require("mongoose");
var gradesModel_1 = require("../grades/gradesModel");
var studentsModel_1 = require("../students/studentsModel");
exports.CourseSchema = new mongoose_1.Schema({
    name: String
});
exports.CourseStudentSchema = new mongoose_1.Schema({
    student: studentsModel_1.StudentSchema,
    course: exports.CourseSchema
});
exports.GradeModel = mongoose_1["default"].model('grades', gradesModel_1.GradeSchema);
exports.CourseStudentModel = mongoose_1["default"].model("course-students", exports.CourseStudentSchema);
var CourseModel = mongoose_1["default"].model("courses", exports.CourseSchema);
exports["default"] = CourseModel;
