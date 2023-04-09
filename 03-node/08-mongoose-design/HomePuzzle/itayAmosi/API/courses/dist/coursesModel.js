"use strict";
exports.__esModule = true;
exports.CourseSchema = exports.Course = void 0;
var mongoose_1 = require("mongoose");
var uuid_1 = require("uuid");
var gradesModel_1 = require("../grades/gradesModel");
//schema
var Course = /** @class */ (function () {
    function Course(name, teachers) {
        this.name = name;
        this.teachers = teachers;
        this.uid = uuid_1.v4();
    }
    return Course;
}());
exports.Course = Course;
exports.CourseSchema = new mongoose_1.Schema({
    uid: String,
    name: String,
    grades: [gradesModel_1.GradeSchema]
});
var CourseModel = mongoose_1["default"].model("courses", exports.CourseSchema);
exports["default"] = CourseModel;
