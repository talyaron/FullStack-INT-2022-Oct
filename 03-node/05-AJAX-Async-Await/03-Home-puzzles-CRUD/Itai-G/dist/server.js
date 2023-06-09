"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("DB connected!");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No URI to DB");
}
app.use(express_1["default"].static("./public"));
app.use(express_1["default"].json());
app.post("/api/add-student-grades", studentController_1.addStudentGrads);
app.post("/api/add-mock-student", studentController_1.addMockStudents);
app.get("/api/get-students", studentController_1.getStudents);
app["delete"]("/api/delete-student", studentController_1.deleteStudent);
app.patch("/api/update-student-name", studentController_1.updateUserName);
var studentsRouter_1 = require("./API/students/studentsRouter");
var studentController_1 = require("./API/students/studentController");
app.use('/api/students', studentsRouter_1["default"]);
app.listen(4000, function () {
    console.log("server listen on port 4000");
});
