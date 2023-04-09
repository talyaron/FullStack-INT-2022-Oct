"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
app.get('/', function (req, res) {
    var webPage = fs_1["default"].readFileSync('./index.html', { encoding: 'utf8', flag: 'r' });
    res.send(webPage);
});
app.get('/about', function (req, res) {
    var webPage = fs_1["default"].readFileSync('./about.html', { encoding: 'utf8', flag: 'r' });
    res.send(webPage);
});
app.get('/contact', function (req, res) {
    var webPage = fs_1["default"].readFileSync('./contact.html', { encoding: 'utf8', flag: 'r' });
    res.send(webPage);
});
app.listen(5000, function () {
    console.log('Server is listening on port 5000');
});
