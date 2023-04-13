"use strict";
exports.__esModule = true;
exports.GradeSchema = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
exports.GradeSchema = new mongoose_1.Schema({
    grade: Number,
    gradeCourse: coursesModel_1.CourseSchema
});
var GradeModel = mongoose_1["default"].model("grades", exports.GradeSchema);
exports["default"] = GradeModel;
