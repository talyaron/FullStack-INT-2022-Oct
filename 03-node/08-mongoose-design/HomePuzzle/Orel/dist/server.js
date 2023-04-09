"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var express_1 = require("express");
var dotenv = require("dotenv");
var coursesRoute_1 = require("./API/courses/coursesRoute");
var gradeRouter_1 = require("./API/grades/gradeRouter");
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
var PORT = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
app.use('/courses', coursesRoute_1["default"]);
app.use('/grades', gradeRouter_1["default"]);
app.listen(PORT, function () {
    console.log("the server run on PORT:" + PORT);
});
