"use strict";
exports.__esModule = true;
// import mongoose from "mongoose"
var express_1 = require("express");
var dotenv = require("dotenv");
var mongoose_1 = require("mongoose");
var coursesRoute_1 = require("./API/courses/coursesRoute");
var gradeRoute_1 = require("./API/grades/gradeRoute");
var studentsRoute_1 = require("./API/student/studentsRoute");
var teachersRoute_1 = require("./API/teachers/teachersRoute");
dotenv.config();
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"].connect(uri).then(function () {
        console.log("DB connected");
    })["catch"](function (err) { return console.error(err); });
}
else {
    console.log("no founded uri MongoDB");
}
var app = express_1["default"]();
var PORT = 3002;
app.use(express_1["default"].json());
app.use(express_1["default"].static('./public'));
app.use('/api/courses', coursesRoute_1["default"]);
app.use('/api/grades', gradeRoute_1["default"]);
app.use('/api/student', studentsRoute_1["default"]);
app.use('/api/teacher', teachersRoute_1["default"]);
app.listen(PORT, function () {
    console.log("the server run on PORT:" + PORT);
});
