"use strict";
exports.__esModule = true;
exports.StudentSchema = exports.Student = void 0;
var mongoose_1 = require("mongoose");
var uuid_1 = require("uuid");
var coursesModel_1 = require("../courses/coursesModel");
var gradesModel_1 = require("../grades/gradesModel");
var Student = /** @class */ (function () {
    function Student(name, lastName, englishClass, mathClass, sportsClass, historyClass, avg) {
        this.name = name;
        this.lastName = lastName;
        this.englishClass = englishClass;
        this.mathClass = mathClass;
        this.sportsClass = sportsClass;
        this.historyClass = historyClass;
        this.avg = avg;
        this.uid = uuid_1.v4();
    }
    return Student;
}());
exports.Student = Student;
exports.StudentSchema = new mongoose_1.Schema({
    uid: String,
    name: String,
    lastName: String,
    course: [coursesModel_1.CourseSchema],
    grades: [gradesModel_1.GradeSchema]
});
var StudentModel = mongoose_1["default"].model("students", exports.StudentSchema);
exports["default"] = StudentModel;
