"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var uuid_1 = require("uuid");
var app = express_1["default"]();
app.use(express_1["default"].static('./public'));
app.use(express_1["default"].json());
var student = /** @class */ (function () {
    function student(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.uid = uuid_1.v4();
        this.grades = [];
    }
    return student;
}());
var students = [];
app.get('/', function (req, res) {
    var index = fs_1["default"].readFileSync('index.html', { encoding: 'utf8', flag: 'r' });
    res.send(index);
});
app.get('/api/get-students', function (req, res) {
    res.send({ students: students });
});
app.post('/api/add-student', function (req, res) {
    try {
        var newStudent = req.body;
        var userExists = false;
        if (students.length > 0) {
            for (var i = 0; i < students.length; i++) {
                if (students[i].name == newStudent.name && students[i].lastName == newStudent.lastName) {
                    userExists = true;
                    res.status(400).send({ ok: false, status: 'User already exists' });
                }
            }
            if (userExists == false) {
                students.push(new student(newStudent.name, newStudent.lastName));
                res.status(201).send({ ok: true });
            }
        }
        else {
            students.push(new student(newStudent.name, newStudent.lastName));
            res.status(201).send({ ok: true });
        }
    }
    catch (error) {
        res.status(400).send({ ok: false });
        console.log(error);
    }
});
app.patch('/api/add-grade', function (req, res) {
    try {
        var gradeExist = false;
        var _a = req.body, uid = _a.uid, gradeName = _a.gradeName, gradePoints = _a.gradePoints;
        for (var i = 0; i < students.length; i++) {
            if (uid == students[i].uid) {
                for (var j = 0; j < students[i].grades.length; j++) {
                    if (students[i].grades[j].gradeName == gradeName) {
                        students[i].grades[j].gradePoints = gradePoints;
                        gradeExist = true;
                        res.status(201).send({ ok: true });
                    }
                }
                if (!gradeExist) {
                    students[i].grades.push({ gradeName: gradeName, gradePoints: gradePoints });
                    res.status(201).send({ ok: true });
                }
                console.log(students[i]);
            }
        }
    }
    catch (error) {
        res.status(400).send({ ok: false });
        console.log(error);
    }
});
app.listen(5000, function () {
    console.log("Server is running on port 5000");
});
