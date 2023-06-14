"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
//static file
app.use(express_1["default"].static('./client'));
var balloon1 = { width: 10, height: 10, color: "blue" };
var balloon2 = { width: 6, height: 10, color: "red" };
var balloon3 = { width: 8, height: 10, color: "green" };
var balloon4 = { width: 12, height: 10, color: "yellow" };
var balloons = [balloon1, balloon2, balloon3, balloon4];
app.get("/api/get-balloons", function (req, res) {
    try {
        res.status(200).send({ balloons: balloons });
    }
    catch (error) {
        res.status(500).send({ error: error });
    }
});
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
