"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
require("./Data/data");
app.use(express_1["default"].json);
app.use(express_1["default"].static('./client'));
app.listen(3000, function () {
    console.log("3000");
});
