"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var app = express_1["default"]();
var PORT = 5000;
app.use(cors_1["default"]);
app.use(express_1["default"].static('./public'));
app.get("/", function (req, res) {
});
app.listen(PORT, function () {
    console.log("server listen at: " + PORT);
});
