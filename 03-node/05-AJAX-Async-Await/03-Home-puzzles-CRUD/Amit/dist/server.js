"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var app = express_1["default"]();
app.use(express_1["default"].json());
////////data//////////////
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        this.uid = uuidv4_1.uuid();
        this.grades = [];
    }
    Student.prototype.getSimpleStudent = function () {
        return { uid: this.uid, name: this.name, grades: this.grades };
    };
    return Student;
}());
var Grade = /** @class */ (function () {
    function Grade(test, value) {
        this.test = test;
        this.value = value;
        this.uid = uuidv4_1.uuid();
    }
    Grade.prototype.getSimpleGrade = function () {
        return { uid: this.uid, test: this.test, grades: this.value };
    };
    return Grade;
}());
var amit = new Student("amit");
amit.grades = [new Grade("css", 88)];
var students = [
    (amit)
];
//data route
//get (from server)
app.get("/api/get-students", function (req, res) {
    try {
        res.send({ students: students });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//add student
app.post("/api/add-students", function (req, res) {
    try {
        var name = req.body.name;
        students.push(new Student(name));
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//add grade to student
app.post("/api/add-students/add-grade", function (req, res) {
    try {
        var _a = req.body, name = _a.name, uid_1 = _a.uid;
        if (!name)
            throw new Error("No name in data");
        if (!uid_1)
            throw new Error("No uid in data");
        var student = students.find(function (user) { return user.uid === uid_1; });
        if (!student)
            throw new Error("No student in data");
        var _b = req.body, test = _b.test, value = _b.value;
        student.grades.push(new Grade(test, value));
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//update
// //update whole entity
// app.put("/api/update-user", (req, res) => {
//   try {
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
// // transodrm enetiy
// app.patch("/api/update-user-name", (req, res) => {
//   try {
//     const { name, uid } = req.body;
//     if (!name) throw new Error("No name in data");
//     if (!uid) throw new Error("No uid in data");
//     const user = users.find((user) => user.uid === uid);
//     if (!user) throw new Error("No user in array");
//     user.name = name;
//     res.send({ok:true})
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
// app.delete("/api/delete-user", (req, res) => {
//   try {
//     const { uid } = req.body;
//     if (!uid) throw new Error("no uid in data");
//     const index = users.findIndex((user) => user.uid === uid);
//     if (index === -1)
//       throw new Error(`couldnt find user in users, with ID ${uid}`);
//       users.splice(index, 1);
//     const _users = users.map((user) => user.getSimpleUser());
//     res.send({ ok: true,users:_users });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
//static file
app.use(express_1["default"].static("./public"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
