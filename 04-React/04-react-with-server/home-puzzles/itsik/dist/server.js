"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
require("./Data/data");
var cors_1 = require("cors");
app.use(express_1["default"].json, cors_1["default"]());
app.use(express_1["default"].static('./client'));
var ballonRoutes_1 = require("./APi/ballons/ballonRoutes");
app.use('/api/ballons', ballonRoutes_1["default"]);
app.listen(3000, function () {
    console.log("3000");
});
