"use strict";
exports.__esModule = true;
exports.CourseSchema = void 0;
var mongoose_1 = require("mongoose");
var gradesModel_1 = require("../grades/gradesModel");
exports.CourseSchema = new mongoose_1.Schema({
    name: String,
    grades: [gradesModel_1.GradeSchema]
});
var CourseModel = mongoose_1["default"].model("courses", exports.CourseSchema);
exports["default"] = CourseModel;
