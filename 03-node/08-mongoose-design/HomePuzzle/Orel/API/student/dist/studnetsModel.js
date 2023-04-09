"use strict";
exports.__esModule = true;
exports.StudentSchema = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
var gradesModel_1 = require("../grades/gradesModel");
exports.StudentSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    address: String,
    phoneNumber: Number,
    courses: [coursesModel_1.CourseSchema],
    grades: [gradesModel_1.GradeSchema]
});
var StudentModel = mongoose_1["default"].model("students", exports.StudentSchema);
exports["default"] = StudentModel;
