"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
app.use(express_1["default"].static(__dirname + '/dist'));
app.get('/', function (req, res) {
    var indexFile = fs_1["default"].readFileSync("./index.html", {
        encoding: "utf8",
        flag: "r"
    });
    res.send(indexFile);
});
app.get('/login', function (req, res) {
    res.send("<h1> lyy688gin</h1>");
});
app.listen(3000);
