"use strict";
exports.__esModule = true;
exports.studentSchema = void 0;
var mongoose_1 = require("mongoose");
var courseModel_1 = require("../course/courseModel");
var gradeModel_1 = require("../grade/gradeModel");
exports.studentSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    courses: [courseModel_1.courseSchema],
    grades: [gradeModel_1.gradeScheme]
});
var studentModel = mongoose_1["default"].model("student", exports.studentSchema);
exports["default"] = studentModel;
