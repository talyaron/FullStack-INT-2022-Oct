"use strict";
exports.__esModule = true;
exports.CourseSchema = void 0;
var mongoose_1 = require("mongoose");
var examsModel_1 = require("../exams/examsModel");
exports.CourseSchema = new mongoose_1.Schema({
    name: String,
    exam: examsModel_1.ExamSchema
});
var CourseModel = mongoose_1.model('Course', exports.CourseSchema);
exports["default"] = CourseModel;
