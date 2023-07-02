"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
app.use(express_1["default"].static(__dirname + "/public"));
app.get("/", function (req, res) {
    var indexFile = fs_1["default"].readFileSync("./myStory.html", {
        encoding: "utf8",
        flag: "r"
    });
    res.send(indexFile);
});
app.get("/myContact", function (req, res) {
    var indexfile2 = fs_1["default"].readFileSync("./myContact.html", {
        encoding: "utf8",
        flag: "r"
    });
    res.send(indexfile2);
});
app.listen(3000);
