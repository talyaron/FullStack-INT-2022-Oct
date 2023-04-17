"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv = require("dotenv");
dotenv.config();
var app = express_1["default"]();
var Port = 3030;
app.use(express_1["default"].json());
app.use(express_1["default"].static("./public"));
app.listen(Port, function () {
    console.log(Port);
});
