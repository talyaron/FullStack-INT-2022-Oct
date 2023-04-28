"use strict";
exports.__esModule = true;
exports.getStudentsInExamSchema = exports.ExamSchema = void 0;
var mongoose_1 = require("mongoose");
var studentModel_1 = require("../students/studentModel");
exports.ExamSchema = new mongoose_1.Schema({
    name: String,
    topic: String,
    questions: Object,
    student: studentModel_1.StudentSchema
});
exports.getStudentsInExamSchema = new mongoose_1.Schema({
    exam: exports.ExamSchema,
    students: studentModel_1.StudentSchema
});
var ExamModel = mongoose_1["default"].model("exams", exports.ExamSchema);
exports["default"] = ExamModel;
