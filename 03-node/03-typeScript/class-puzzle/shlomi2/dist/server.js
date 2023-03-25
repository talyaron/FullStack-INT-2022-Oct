"use strict";
// cmd
// nodemon Server.ts
exports.__esModule = true;
console.log("read");
console.log(__dirname);
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].static(__dirname + '/public'));
app.get('/', function (req, res) {
});
app.get('/login', function (req, res) {
    res.send("shlomiLogin");
});
app.listen(3000);
