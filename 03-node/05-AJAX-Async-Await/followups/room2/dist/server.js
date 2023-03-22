"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
//data route
app.get("/getuid", function (req, res) {
    setTimeout(function () {
        res.send({ uid: Math.random().toString(16).slice(2) });
    }, 0.1);
});
//static file
app.use(express_1["default"].static("./client"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
