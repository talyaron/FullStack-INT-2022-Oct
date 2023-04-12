"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var cors = require('cors');
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
app.use(express_1["default"].json(), cors());
//connecting to entities routes//
var studentsRoute_1 = require("./API/students/studentsRoute");
app.use('/students', studentsRoute_1["default"]);
// import coursesRouter from './API/courses/coursesRoute';
// app.use('/api/courses', coursesRouter);
// import gradesRouter from './API/grades/gradesRoute';
// app.use('/api/grades', gradesRouter);
app.listen(3001, function () {
    console.log("server listen on port 3000");
});
