"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].static('public'));
app.get("/random", function (req, res) {
    var random = Math.round(Math.random() * 10);
    res.send({ number: random.toString() });
});
app.listen(port, function () {
    console.log("The server on port " + port);
});
