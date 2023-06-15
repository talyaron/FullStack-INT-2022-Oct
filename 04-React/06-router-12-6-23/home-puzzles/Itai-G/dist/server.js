"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var dotenv = require("dotenv");
dotenv.config();
app.use(express_1["default"].json());
var mongoose_1 = require("mongoose");
require('dotenv').config();
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("DB connected!");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No URI to DB");
}
app.use(express_1["default"].static("./client"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
