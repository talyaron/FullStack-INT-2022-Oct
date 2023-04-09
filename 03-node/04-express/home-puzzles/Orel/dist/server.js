"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].static("./public"));
app.use(express_1["default"].json());
app.get('/style.css', function (req, res) {
    res.sendFile(path_1["default"].resolve(__dirname + "/public/dist/style.css"));
});
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/project1.html', function (req, res) {
    res.sendFile(__dirname + "/public/projects/" + "Prolist/index.html");
});
app.get('/project2.html', function (req, res) {
    res.sendFile(__dirname + "/public/projects/" + "Ballon Games/Ballon Games/public/ballon.html");
});
app.get('/project3.html', function (req, res) {
    res.sendFile(__dirname + "/public/projects/" + "Bite-Away-group2-orel-amit-dor/intro/intro.html");
});
app.listen(port, function () {
    console.log("Port On " + port);
});
