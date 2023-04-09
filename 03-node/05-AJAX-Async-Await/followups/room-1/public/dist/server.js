"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var PORT = 3000;
app.get("/random-number", function (req, res) {
    res.send({ number: Math.round(Math.random() * 100) });
});
app.use(express_1["default"].static("./public"));
app.listen(PORT, function () {
    console.log("server listen on port " + PORT);
});
