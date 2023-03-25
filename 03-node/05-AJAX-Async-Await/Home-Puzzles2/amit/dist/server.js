"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].static("./public"));
app.listen(port, function () {
    console.log("server listen on " + port);
});
