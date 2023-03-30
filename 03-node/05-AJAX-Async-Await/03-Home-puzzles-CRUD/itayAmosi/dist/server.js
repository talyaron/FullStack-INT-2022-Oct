"use strict";
exports.__esModule = true;
exports.Teacher = exports.Student = void 0;
var express_1 = require("express");
// import path from "path";
var uuid_1 = require("uuid");
var app = express_1["default"]();
app.use(express_1["default"].static("./public"));
app.use(express_1["default"].json());
var Student = /** @class */ (function () {
    function Student(name, englishClass, mathClass, sportsClass, historyClass) {
        this.name = name;
        this.englishClass = englishClass;
        this.mathClass = mathClass;
        this.sportsClass = sportsClass;
        this.historyClass = historyClass;
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
var students = [new Student("Moshe", 68, 59, 95, 75)];
// console.log(students);
var Teacher = /** @class */ (function () {
    function Teacher(name, password) {
        this.name = name;
        this.password = password;
        this.uid = uuid_1.v4();
    }
    Teacher.prototype.getSimple = function () {
        return {
            uid: this.uid,
            name: this.name,
            password: this.password
        };
    };
    return Teacher;
}());
exports.Teacher = Teacher;
var teachers = [new Teacher("tal", 1235)];
app.post("/api/add-student-grades", function (req, res) {
    var _a = req.body, name = _a.name, englishClass = _a.englishClass, mathClass = _a.mathClass, sportsClass = _a.sportsClass, historyClass = _a.historyClass;
    console.log(req.body);
    if (!name || !englishClass || !mathClass || !sportsClass || !historyClass) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    var newStudent = new Student(name, englishClass, mathClass, sportsClass, historyClass);
    students.push(newStudent);
    res.status(200).send({ ok: true, newStudent: newStudent });
});
app.get("/api/get-students", function (req, res) {
    try {
        res.send({ students: students });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.listen(4000, function () {
    console.log("server listen on port 4000");
});
