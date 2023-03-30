"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var PORT = 3001;
var app = express_1["default"]();
app.use(express_1["default"].static("./public"));
app.use(express_1["default"].json());
var Student = /** @class */ (function () {
    function Student(name, email) {
        this.name = name;
        this.email = email;
        this.uid = uuidv4_1.uuid();
    }
    Student.prototype.getSimpleSudent = function () {
        return { uid: this.uid, name: this.name, email: this.email };
    };
    return Student;
}());
var student = [
    new Student("Liron", "liron@gmail.com"),
    new Student("Fani", "fani@gmail.com"),
    new Student("Yarden", "yarden@gmail.com"),
    new Student("Zohar", "zohar@gmail.com"),
];
//data route
//get (from server)
app.get("/api/get-student", function (req, res) {
    try {
        res.send({ student: student });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//add
app.post("/api/add-student", function (req, res) {
    try {
        var _a = req.body, name = _a.name, email = _a.email;
        console.log(name, email);
        student.push(new Student(name, email));
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//update
//update whole entity
app.put("/api/update-student", function (req, res) {
    try {
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
// transodrm enetiy
app.patch("/api/update-student-name", function (req, res) {
    try {
        var _a = req.body, name = _a.name, uid_1 = _a.uid;
        if (!name)
            throw new Error("No name in data");
        if (!uid_1)
            throw new Error("No uid in data");
        var studentName = student.find(function (students) { return students.uid === uid_1; });
        if (!student)
            throw new Error("No student in array");
        students.name = name;
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app["delete"]("/api/delete-student", function (req, res) {
    try {
        var uid_2 = req.body.uid;
        if (!uid_2)
            throw new Error("no uid in data");
        var index = student.findIndex(function (students) { return student.uid === uid_2; });
        if (index === -1)
            throw new Error("couldnt find student in students, with ID " + uid_2);
        students.splice(index, 1);
        var _students = students.map(function (student) { return student.getSimplestudent(); });
        res.send({ ok: true, students: _students });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.listen(PORT, function () {
    console.log("The server litster port: HTTP://locallhost:" + PORT + " ");
});
