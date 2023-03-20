"use strict";
exports.__esModule = true;
var express_1 = require("express");
var file_system_1 = require("file-system");
var app = express_1["default"]();
app.use(express_1["default"].static(__dirname + '/public'));
app.get('/', function (req, res) {
    var indexFile = file_system_1["default"].readFileSync("./index.html", {
        encoding: "utf8",
        flag: "r"
    });
    res.send(indexFile);
});
app.get('/login', function (req, res) {
    var loginFile = file_system_1["default"].writeFile("./login.html", {
        encoding: "utf8",
        flag: "r"
    });
    res.send(loginFile);
    res.send("<h1>group 4 login</h1>");
});
app.listen(5000);
