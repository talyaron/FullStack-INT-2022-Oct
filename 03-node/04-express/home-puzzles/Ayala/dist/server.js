"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
app.use(express_1["default"].static(__dirname + '/public'));
// app.use(express.static('/public'));
//routes
app.get('/', function (req, res) {
    var indexFile = fs_1["default"].readFileSync('./index.html', { encoding: 'utf8', flag: 'r' });
    // console.log(indexFile)
    res.send(indexFile);
});
app.get('/login', function (req, res) {
    // console.log(req)
    res.send('<h1>l</h1>');
});
app.get('./app.html', function (req, res) {
    // console.log(req)
    res.send('<h1>ghjkl</h1>');
});
app.listen(3000);
