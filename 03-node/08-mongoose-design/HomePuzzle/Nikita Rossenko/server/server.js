"use strict";
exports.__esModule = true;
// express
var express_1 = require("express");
var app = express_1["default"]();
// DB
var mongoose_1 = require("mongoose");
var serverPort = 5000;
// dotenv
var dotenv = require("dotenv");
dotenv.config();
mongoose_1["default"]
    .connect("" + process.env.MONGO_DB)
    .then(function () { return console.log("DB connected!"); });
// express USE
app.use(express_1["default"].static('public/index'));
app.use(express_1["default"].static('public'));
app.use(express_1["default"].json());
app.post("/api/v1/add-teacher", function (req, res) {
    var newTeacher = req.body;
    console.log(newTeacher);
});
app.listen(serverPort, function () {
    console.log("Server Started at port " + serverPort);
});
