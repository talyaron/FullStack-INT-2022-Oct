"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userMiddlware_1 = require("./API/users/userMiddlware");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
var cookie_parser_1 = require("cookie-parser");
var uri = process.env.MONGODB_URI;
//to be able to get data from client add this line
app.use(cookie_parser_1["default"]());
app.use(userMiddlware_1.userDetails);
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
app.use(express_1["default"].json());
app.use(express_1["default"].static("./client"));
var usersRoute_1 = require("./API/users/usersRoute");
app.use('/api/users', usersRoute_1["default"]);
var courseRoutes_1 = require("./API/courses/courseRoutes");
app.use('/api/courses', courseRoutes_1["default"]);
//static file
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
