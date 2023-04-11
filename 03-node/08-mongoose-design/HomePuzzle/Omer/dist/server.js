"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();
var uri = process.env.MONGOOSE_URI;
app.use(express_1["default"].static('./public'));
//to be able to get data from client add this line
app.use(express_1["default"].json());
try {
    if (!uri)
        throw new Error("uri not defined");
    mongoose_1["default"].connect(uri).then(function () {
        console.log('Data base connected');
    })["catch"](function (error) {
        console.error(error);
    });
}
catch (error) {
    console.error(error);
}
var studentRoutes_1 = require("./API/students/studentRoutes");
var courseRoutes_1 = require("./API/course/courseRoutes");
app.use("/api/student", studentRoutes_1["default"]);
app.use("/api/course", courseRoutes_1["default"]);
app.listen(3000, function () { return console.log("server is listening on port 3000"); });
