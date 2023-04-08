"use strict";
exports.__esModule = true;
exports.GradeSchema = exports.Grade = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
var studentsModel_1 = require("../students/studentsModel");
//schema
var Grade = /** @class */ (function () {
    function Grade() {
    }
    return Grade;
}());
exports.Grade = Grade;
exports.GradeSchema = new mongoose_1.Schema({
    grade: Number,
    user: studentsModel_1.studentSchema,
    course: coursesModel_1.CourseSchema
});
var GradeModel = mongoose_1["default"].model("student", exports.GradeSchema);
exports["default"] = GradeModel;
