"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var app = express_1["default"]();
app.use(express_1["default"].json());
//data
var Teacher = /** @class */ (function () {
    function Teacher(name, password, subject) {
        this.name = name;
        this.password = password;
        this.subject = subject;
        this.uid = uuidv4_1.uuid();
    }
    return Teacher;
}());
var Student = /** @class */ (function () {
    function Student(name, password, grades) {
        this.name = name;
        this.password = password;
        this.grades = grades;
        this.uid = uuidv4_1.uuid();
    }
    return Student;
}());
var Subject = /** @class */ (function () {
    function Subject(name) {
        this.name = name;
        this.uid = uuidv4_1.uuid();
    }
    return Subject;
}());
var Grade = /** @class */ (function () {
    function Grade(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
        this.uid = uuidv4_1.uuid();
    }
    Grade.prototype.getSimpleGrade = function () {
        return { uid: this.uid, subject: this.subject, grade: this.grade, student: this.student };
    };
    return Grade;
}());
var subjects = [
    new Subject("Math"),
    new Subject("Biology"),
    new Subject("English")
];
var teachers = [
    new Teacher("Yariv Edri", "yariv", subjects[0]),
    new Teacher("Ruti Gabay", "ruti", subjects[1]),
    new Teacher("Ofra Zror", "ofra", subjects[2])
];
var grades = [];
var students = [
    new Student("Noa Meillet", "noa", grades),
    new Student("Sagiv Kelly", "sagiv", grades),
    new Student("Amit Vaknin", "amit", grades)
];
//data route
/*
//get (from server)
app.get("/api/get-users", (req, res) => {
  try {
    res.send({ users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//add
app.post("/api/add-user", (req, res) => {
  try {
    const { name, src } = req.body;
    console.log(name, src);
    users.push(new User(name, src));
    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//update

//update whole entity
app.put("/api/update-user", (req, res) => {
  try {
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// transodrm enetiy
app.patch("/api/update-user-name", (req, res) => {
  try {
    const { name, uid } = req.body;

    if (!name) throw new Error("No name in data");
    if (!uid) throw new Error("No uid in data");

    const user = users.find((user) => user.uid === uid);
    if (!user) throw new Error("No user in array");
    user.name = name;

    res.send({ok:true})
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.delete("/api/delete-user", (req, res) => {
  try {
    const { uid } = req.body;
    if (!uid) throw new Error("no uid in data");
    
    const index = users.findIndex((user) => user.uid === uid);
    if (index === -1)
      throw new Error(`couldnt find user in users, with ID ${uid}`);
    
      users.splice(index, 1);

    const _users = users.map((user) => user.getSimpleUser());
    
    res.send({ ok: true,users:_users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//static file
app.use(express.static("./client"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
*/ 
