"use strict";
exports.__esModule = true;
exports.getCoursesByIdsSchema = exports.CourseSchema = void 0;
var mongoose_1 = require("mongoose");
var teachersModel_1 = require("../teachers/teachersModel");
var studentsModel_1 = require("../students/studentsModel");
exports.CourseSchema = new mongoose_1.Schema({
    name: String,
    teacher: teachersModel_1.TeacherSchema,
    student: studentsModel_1.StudentSchema
});
exports.getCoursesByIdsSchema = new mongoose_1.Schema({
    course: exports.CourseSchema
});
var CourseModel = mongoose_1["default"].model("courses", exports.CourseSchema);
exports["default"] = CourseModel;
