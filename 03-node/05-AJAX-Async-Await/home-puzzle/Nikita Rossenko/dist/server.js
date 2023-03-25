"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
app.use(express_1["default"].static('./public'));
app.get('/', function (req, res) {
    var index = fs_1["default"].readFileSync('index.html', { encoding: 'utf8', flag: 'r' });
    res.send(index);
});
app.listen(5000, function () {
    console.log("Server is running on port 5000");
});
