"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var consumers_1 = require("stream/consumers");
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
var students = fs_1.readFileSync('studentList.json', 'utf-8');
console.log(consumers_1.json(students));
