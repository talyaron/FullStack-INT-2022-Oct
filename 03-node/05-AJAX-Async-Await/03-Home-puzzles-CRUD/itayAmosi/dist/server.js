"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuid_1 = require("uuid");
var app = express_1["default"]();
app.use(express_1["default"].static("./public"));
app.use(express_1["default"].json());
//data
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
var students = [
    new Student("Moshe", 68, 59, 95, 75),
];
console.log(students);
// data route
//get (from server)
// app.get("/", (req, res) => {
//   try {
//     res.send({ students });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
// //add
// app.post("/api/add-user", (req, res) => {
//   try {
//     const { name, src } = req.body;
//     console.log(name, src);
//     users.push(new User(name, src));
//     res.status(201).send({ ok: true });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
//update
//update whole entity
// app.put("/api/update-user", (req, res) => {
//   try {
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
// transodrm enetiy
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
// app.post(`/teacher.html`, (req, res) => {
//     fs.readFileSync("./teacher.html", {
//     encoding: "utf8",
//     flag: "r",
//   });
// });
app.listen(4000, function () {
    console.log("server listen on port 4000");
});
