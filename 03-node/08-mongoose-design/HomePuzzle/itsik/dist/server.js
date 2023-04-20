"use strict";
exports.__esModule = true;
var body_parser_1 = require("body-parser");
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
var cors_1 = require("cors");
dotenv.config();
var app = express_1["default"]();
var Port = 3000;
app.use(cors_1["default"]());
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.use(body_parser_1["default"].json());
// db connect
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"].connect(uri)
        .then(function () {
        console.log("our db is connected");
    });
}
// imports
var userLoginRoutes_1 = require("./API/userLogin/userLoginRoutes");
app.use('/API/userLogin', userLoginRoutes_1["default"]);
// server json/static file's
app.use(express_1["default"].json());
app.use(express_1["default"].static("./public"));
app.listen(Port, function () {
    console.log(Port);
});
