"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
var uri = process.env.MONGODB_URI;
app.use(express_1["default"].json());
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
var studentsRoute_1 = require("./API/students/studentsRoute");
app.use('/api/students', studentsRoute_1["default"]);
var teachersRoute_1 = require("./API/teachers/teachersRoute");
app.use('/api/teachers', teachersRoute_1["default"]);
var coursesRoute_1 = require("./API/courses/coursesRoute");
app.use('/api/courses', coursesRoute_1["default"]);
var gradesRoute_1 = require("./API/grades/gradesRoute");
app.use('/api/grades', gradesRoute_1["default"]);
var examsRoute_1 = require("./API/exams/examsRoute");
app.use('/api/exams', examsRoute_1["default"]);
app.use(express_1["default"].static("./public"));
app.listen(4000, function () {
    console.log("server listen on port 4000");
});
