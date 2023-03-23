"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var PORT = 5000;
app.get("/", function (req, res) {
    res.send("hello");
});
app.use(express_1["default"].static('./public'));
app.listen(PORT, function () {
    console.log("server listen at: " + PORT);
});
