"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
app.get('/', function (req, res) {
    var data = fs_1["default"].readFileSync('./index.html', { encoding: 'utf8', flag: 'r' });
    console.log(data);
    res.send(data);
});
app.get('/login', function (req, res) {
    res.send('Login');
});
app.listen(3000, function () { return console.log("server listens on port 3000"); });
