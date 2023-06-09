"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();
//connecting DB//
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
//getting data from public
app.use(express_1["default"].json());
//connecting to entities routes//
var studentsRoute_1 = require("./API/students/studentsRoute");
app.use('/api/students', studentsRoute_1["default"]);
var coursesRoute_1 = require("./API/courses/coursesRoute");
app.use('/api/courses', coursesRoute_1["default"]);
var gradesRoute_1 = require("./API/grades/gradesRoute");
app.use('/api/grades', gradesRoute_1["default"]);
//static file
app.use(express_1["default"].static("./public"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
