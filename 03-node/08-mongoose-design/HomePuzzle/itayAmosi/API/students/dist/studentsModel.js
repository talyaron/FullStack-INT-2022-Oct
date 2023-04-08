"use strict";
exports.__esModule = true;
exports.studentSchema = exports.Student = void 0;
var mongoose_1 = require("mongoose");
var uuid_1 = require("uuid");
var coursesModel_1 = require("../courses/coursesModel");
var Student = /** @class */ (function () {
    function Student(name, lastname, englishClass, mathClass, sportsClass, historyClass, avg) {
        this.name = name;
        this.lastname = lastname;
        this.englishClass = englishClass;
        this.mathClass = mathClass;
        this.sportsClass = sportsClass;
        this.historyClass = historyClass;
        this.avg = avg;
        this.uid = uuid_1.v4();
    }
    Student.prototype.getSimple = function () {
        return {
            uid: this.uid,
            name: this.name,
            englishClass: this.englishClass,
            mathClass: this.mathClass,
            sportsClass: this.sportsClass,
            historyClass: this.historyClass
        };
    };
    return Student;
}());
exports.Student = Student;
exports.studentSchema = new mongoose_1.Schema({
    uid: String,
    name: String,
    lastname: String,
    englishClass: Number,
    mathClass: Number,
    sportsClass: Number,
    historyClass: Number,
    avg: Number,
    course: [coursesModel_1.CourseSchema]
});
var StudentModel = mongoose_1["default"].model("students", exports.studentSchema);
exports["default"] = StudentModel;
