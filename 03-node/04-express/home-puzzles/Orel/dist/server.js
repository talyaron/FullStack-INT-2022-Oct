"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
app.use(express_1["default"].static('public'));
app.use(express_1["default"].json());
app.get('/', function (req, res) {
    var indexFile = fs_1["default"].readFileSync("./public/index.html", {
        encoding: "utf8",
        flag: "r"
    });
    res.send(indexFile);
});
app.listen(3000, function () {
    console.log("port On ");
});
