"use strict";
exports.__esModule = true;
exports.CourseStudentModel = exports.GradeModel = exports.ExamModel = exports.GradeSchema = exports.ExamSchema = exports.CourseStudentSchema = exports.CourseSchema = void 0;
var mongoose_1 = require("mongoose");
var usersModel_1 = require("../users/usersModel");
exports.CourseSchema = new mongoose_1.Schema({
    name: String,
    teacher: usersModel_1.UserSchema
});
exports.CourseStudentSchema = new mongoose_1.Schema({
    student: usersModel_1.UserSchema,
    course: exports.CourseSchema
});
exports.ExamSchema = new mongoose_1.Schema({
    name: String,
    topic: String,
    questions: Object,
    course: exports.CourseSchema
});
exports.GradeSchema = new mongoose_1.Schema({
    student: usersModel_1.UserSchema,
    exam: exports.ExamSchema,
    course: exports.CourseSchema,
    grade: Number
});
exports.ExamModel = mongoose_1["default"].model('exams', exports.ExamSchema);
exports.GradeModel = mongoose_1["default"].model('grades', exports.GradeSchema);
exports.CourseStudentModel = mongoose_1["default"].model("course-students", exports.CourseStudentSchema);
var CourseModel = mongoose_1["default"].model("courses", exports.CourseSchema);
exports["default"] = CourseModel;
