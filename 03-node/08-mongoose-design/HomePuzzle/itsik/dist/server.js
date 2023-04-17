"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();
var app = express_1["default"]();
var Port = 3030;
// db connect
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("our db is connected");
    });
}
// imports
// server json/static file's
app.use(express_1["default"].json());
app.use(express_1["default"].static("./public"));
app.listen(Port, function () {
    console.log(Port);
});
