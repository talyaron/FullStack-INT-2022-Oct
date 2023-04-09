"use strict";
exports.__esModule = true;
exports.GradeSchema = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
var studnetsModel_1 = require("../student/studnetsModel");
exports.GradeSchema = new mongoose_1.Schema({
    grade: Number,
    student: studnetsModel_1.StudentSchema,
    course: coursesModel_1.CourseSchema
});
var GradeModel = mongoose_1["default"].model("users", exports.GradeSchema);
exports["default"] = GradeModel;
