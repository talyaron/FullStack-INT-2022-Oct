"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
app.use(express_1["default"].static(__dirname + "/public"));
app.get('/main', function (req, res) {
    var data = fs_1["default"].readFileSync('./main.html', { encoding: 'utf8', flag: 'r' });
    res.send(data);
});
app.get('/second', function (req, res) {
    var data = fs_1["default"].readFileSync('./second.html', { encoding: 'utf8', flag: 'r' });
    res.send(data);
});
app.listen(3000, function () { return console.log("server listens on port 3000/main"); });
