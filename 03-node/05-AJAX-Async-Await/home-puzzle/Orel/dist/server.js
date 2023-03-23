"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuid_1 = require("uuid");
var app = express_1["default"]();
var PORT = 3000;
app.use(express_1["default"].static("public"));
app.get('/randomPic', function (req, res) {
    res.send(uuid_1.v4());
});
app.listen(PORT, function () {
    console.log("The Server Run on PORT:" + PORT);
});
