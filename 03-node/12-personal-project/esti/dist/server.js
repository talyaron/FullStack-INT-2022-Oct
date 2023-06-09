"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
var cookie_parser_1 = require("cookie-parser");
var uri = process.env.MONGODB_URI;
//static file
app.use(express_1["default"].static("./public"));
//to be able to get data from client add this line
app.use(cookie_parser_1["default"]());
if (uri) {
    mongoose_1["default"].connect(uri)
        .then(function () {
        console.log("DB connected!");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No URI to DB");
}
app.use(express_1["default"].json());
var usersRoute_1 = require("./API/users/usersRoute");
app.use('/', usersRoute_1["default"]);
var scoreRoute_1 = require("./API/scores/scoreRoute");
app.use('/', scoreRoute_1["default"]);
var PORT = 3100;
app.listen(PORT, function () {
    console.log("server listen on port " + PORT);
});
