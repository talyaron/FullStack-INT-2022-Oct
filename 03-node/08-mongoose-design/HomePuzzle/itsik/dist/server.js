"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var express_1 = require("express");
var dotenv = require("dotenv");
dotenv.config();
var app = express_1["default"]();
var PORT = 3000;
var uri = process.env.MONGODB_URI;
mongoose_1["default"].connect(uri).then(function () {
    console.log("DB connected");
});
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
var uRouter_1 = require("./API/routes/uRouter");
app.use('/', uRouter_1["default"]);
app.listen(PORT, function () {
    console.log("the server run on PORT:" + PORT);
});
