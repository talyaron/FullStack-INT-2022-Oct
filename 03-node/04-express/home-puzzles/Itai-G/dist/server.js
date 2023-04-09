"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
app.use(express_1["default"].static(__dirname + '/public'));
app.get('/index.html', function (req, res) {
    var indexFile = fs_1["default"].readFileSync("./index.html", {
        encoding: "utf8",
        flag: "r"
    });
    res.send(indexFile);
});
app.get('/myWork.html', function (req, res) {
    res.sendFile(__dirname + "/" + "myWork.html");
});
app.listen(5000, function () {
    console.log("Server is listening on port 5000...");
});
