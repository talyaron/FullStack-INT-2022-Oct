"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].static("./public"));
app.get("/random-colors", function (req, res) {
    res.send({ randomColors: Math.floor(Math.random() * 16777215).toString(16) });
});
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
