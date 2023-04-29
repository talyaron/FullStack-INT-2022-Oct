"use strict";
exports.__esModule = true;
exports.StudentGradesModel = exports.GradesByStudentSchema = exports.StudentSchema = void 0;
var mongoose_1 = require("mongoose");
var gradesModel_1 = require("../grades/gradesModel");
exports.StudentSchema = new mongoose_1.Schema({
    name: String,
    lastName: String,
    grades: gradesModel_1.GradeSchema
});
exports.GradesByStudentSchema = new mongoose_1.Schema({
    name: String,
    grades: gradesModel_1.GradeSchema,
    student: exports.StudentSchema
});
var StudentModel = mongoose_1["default"].model("students", exports.StudentSchema);
exports.StudentGradesModel = mongoose_1["default"].model("student-Grades", exports.GradesByStudentSchema);
exports["default"] = StudentModel;
