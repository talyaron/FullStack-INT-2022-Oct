"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
// import v4 from 'uuid';
var module_1 = require("./public/module");
var PORT = 3000;
var app = express_1["default"]();
app.use(express_1["default"].static("./public"));
app.get("/", function (req, res) {
    res.sendFile(path_1["default"].resolve(__dirname, "index.html"));
});
app.get('/foodTips', function (req, res) {
    var jsonData = JSON.stringify(module_1.foodTips);
    res.send(jsonData);
});
app.listen(PORT, function () {
    console.log("Server lister on port: " + PORT);
});
