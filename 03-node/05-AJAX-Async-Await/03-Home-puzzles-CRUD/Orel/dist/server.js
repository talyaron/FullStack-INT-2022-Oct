"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuid_1 = require("uuid");
var Grade = /** @class */ (function () {
    function Grade(courseName, assignmentName, score, date) {
        this.courseName = courseName;
        this.assignmentName = assignmentName;
        this.score = score;
        this.date = date;
        this.uid = "grade-" + uuid_1.v4();
    }
    return Grade;
}());
var Student = /** @class */ (function () {
    function Student(Fname, Lname) {
        this.Fname = Fname;
        this.Lname = Lname;
        this.uid = "student-" + uuid_1.v4();
        this.grades = [];
    }
    return Student;
}());
//   ARRAY
var students = [];
// ADD students
students.push(new Student("Orel", "Karako"));
students.push(new Student("Yoram", "Carmeli"));
students.push(new Student("Osher", "Ohayon"));
students.push(new Student("Sagiv", "Ifrah"));
var app = express_1["default"]();
var PORT = 3000;
function findMe(Fname, Lname) {
    try {
        var findMe_1 = students.find(function (s) { return s.Fname === Fname && s.Lname === Lname; });
        if (!findMe_1)
            throw new Error('no find you in the server');
        return findMe_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
var me = findMe("Orel", "Karako");
me.grades.push(new Grade("react", "Components", 100));
app.use(express_1["default"].static("public"));
app.use(express_1["default"].json());
app.get('/api/students', function (req, res) {
    try {
        if (!students)
            throw new Error('the Students Array not founded');
        res.status(201).send({ success: true, students: students });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ success: false });
    }
});
app.get('/api/students/courses', function (req, res) {
    try {
        if (!students)
            throw new Error('the Students grades Array not founded');
        var courseNames_1 = [];
        var gradesAll = students.forEach(function (s) {
            s.grades.forEach(function (g) {
                courseNames_1.push(g.courseName);
            });
        });
        res.status(201).send({ success: true, courseNames: courseNames_1 });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ success: false });
    }
});
app.listen(PORT, function () {
    console.log("the Server Listen to PORT :" + PORT);
});
