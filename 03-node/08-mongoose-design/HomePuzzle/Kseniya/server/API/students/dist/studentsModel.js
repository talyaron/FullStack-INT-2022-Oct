"use strict";
exports.__esModule = true;
exports.StudentSchema = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
exports.StudentSchema = new mongoose_1.Schema({
    name: String,
    courses: [coursesModel_1.CourseSchema],
    id: Number
});
var StudentModel = mongoose_1["default"].model("students", exports.StudentSchema);
exports["default"] = StudentModel;
