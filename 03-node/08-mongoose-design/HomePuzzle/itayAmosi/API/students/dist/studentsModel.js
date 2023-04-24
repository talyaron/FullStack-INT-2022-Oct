"use strict";
exports.__esModule = true;
exports.StudentSchema = void 0;
var mongoose_1 = require("mongoose");
var examsModel_1 = require("../exams/examsModel");
exports.StudentSchema = new mongoose_1.Schema({
    name: String,
    lastName: String,
    exams: examsModel_1.ExamSchema
});
var StudentModel = mongoose_1["default"].model("students", exports.StudentSchema);
exports["default"] = StudentModel;
