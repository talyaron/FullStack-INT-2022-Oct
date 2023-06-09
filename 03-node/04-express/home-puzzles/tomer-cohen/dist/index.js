"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
app.use(express_1["default"].static(__dirname + '/public'));
app.get('/', function (req, res) {
    var indexFile = fs_1["default"].readFileSync("./index.html", {
        encoding: "utf8",
        flag: "r"
    });
    res.send(indexFile);
});
app.get('/imge', function (req, res) {
    var indexFile = fs_1["default"].readFileSync("./index2.html", {
        encoding: "utf8",
        flag: "r"
    });
    res.send(indexFile);
});
app.listen(3000);
