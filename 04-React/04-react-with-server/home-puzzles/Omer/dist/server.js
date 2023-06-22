"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
//static file
app.use(express_1["default"].static('./client'));
var balloon1 = { width: '30', height: '40', color: "blue" };
var balloon2 = { width: '20', height: '50', color: "red" };
var balloon3 = { width: '10', height: '30', color: "green" };
var balloon4 = { width: '25', height: '60', color: "yellow" };
var balloons = [balloon1, balloon2, balloon3, balloon4];
app.get("/api/get-balloons", function (req, res) {
    try {
        res.status(200).send({ balloons: balloons });
    }
    catch (error) {
        res.status(500).send({ error: error });
    }
});
app.listen(2000, function () {
    console.log("server listen on port 2000");
});
