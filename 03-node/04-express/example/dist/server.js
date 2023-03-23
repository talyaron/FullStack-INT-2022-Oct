"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var helpers_1 = require("./helpers");
//static file
app.use(express_1["default"].static('./client'));
//routes
//data routes
app.get("/login", function (req, res) {
    res.send("<h1>Login 3</h1><h2>Welcome to our sit. you got this id " + helpers_1.uid() + "</h2>");
});
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
