"use strict";
exports.__esModule = true;
exports.Student = void 0;
// import util from "util";
var uuidv4_1 = require("uuidv4");
var Student = /** @class */ (function () {
    function Student(name, grades) {
        this.name = name;
        this.grades = grades;
        this.uuid = uuidv4_1.uuid();
    }
    Student.prototype.addGrade = function (grade) {
        this.grades.push(grade);
    };
    return Student;
}());
exports.Student = Student;
