"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
app.use(express_1["default"].static(__dirname + "/public"));
app.get('/', function (req, res) {
    var indexsit = fs_1["default"].readFileSync("./index.html", {
        encoding: "utf8",
        flag: "r"
    });
    res.send(indexsit);
});
app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});
