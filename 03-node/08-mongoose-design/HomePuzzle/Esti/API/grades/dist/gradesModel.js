"use strict";
exports.__esModule = true;
exports.GradesSchema = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
var teachersModel_1 = require("../teachers/teachersModel");
exports.GradesSchema = new mongoose_1.Schema({
    studentName: String,
    courseName: coursesModel_1.CoursesSchema,
    teacherName: teachersModel_1.TeachersSchema,
    couresName: String,
    score: Number,
    date: String
});
var GradesModel = mongoose_1["default"].model("grades", exports.GradesSchema);
exports["default"] = GradesModel;
