"use strict";
exports.__esModule = true;
exports.GradeSchema = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
var teachersModel_1 = require("../teachers/teachersModel");
exports.GradeSchema = new mongoose_1.Schema({
    studentName: String,
    courseName: coursesModel_1.CourseSchema,
    teacherName: teachersModel_1.TeacherSchema,
    assignmentName: String,
    score: Number,
    date: String
});
var GradeModel = mongoose_1["default"].model("grades", exports.GradeSchema);
exports["default"] = GradeModel;
