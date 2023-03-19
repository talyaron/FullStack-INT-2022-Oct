"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].static("public"));
app.use(express_1["default"].json());
app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/public/dist/style.css");
});
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/project1.html', function (req, res) {
    res.sendFile(__dirname + "/public//projects/" + "Prolist/index.html");
});
app.listen(port, function () {
    console.log("Port On " + port);
});
