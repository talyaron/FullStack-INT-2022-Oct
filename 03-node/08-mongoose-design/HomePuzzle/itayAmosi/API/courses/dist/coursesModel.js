"use strict";
exports.__esModule = true;
exports.getCoursesByIdsSchema = exports.CourseSchema = void 0;
var mongoose_1 = require("mongoose");
var examsModel_1 = require("../exams/examsModel");
exports.CourseSchema = new mongoose_1.Schema({
    name: String,
    // teacher:TeacherSchema,
    // student:StudentSchema,
    exam: examsModel_1.ExamSchema
});
exports.getCoursesByIdsSchema = new mongoose_1.Schema({
    course: exports.CourseSchema
});
var CourseModel = mongoose_1["default"].model("courses", exports.CourseSchema);
exports["default"] = CourseModel;
