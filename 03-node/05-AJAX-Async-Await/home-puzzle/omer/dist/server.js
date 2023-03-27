"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].static("./public"));
app.listen(3000, function () {
    console.log("server is listening on port 3000");
});
