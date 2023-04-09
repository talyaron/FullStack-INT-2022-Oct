"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].static('../client'));
var helpers_1 = require("./helpers");
app.get("/randomPicture", function (req, res) {
    res.send(JSON.stringify(helpers_1.randomPic()));
});
app.get("/", function (req, res) {
    // res.send(`<img src="${randomPic()}" alt="">`)
});
app.listen(3000, function () {
    console.log("server listenes on port 3000");
});
