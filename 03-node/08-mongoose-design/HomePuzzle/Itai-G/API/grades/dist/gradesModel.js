"use strict";
exports.__esModule = true;
exports.GradeSchema = void 0;
var mongoose_1 = require("mongoose");
exports.GradeSchema = new mongoose_1.Schema({
    studentId: String,
    courseId: String,
    grade: Number
});
var Grademodel = mongoose_1.model('grade', exports.GradeSchema);
exports["default"] = Grademodel;
