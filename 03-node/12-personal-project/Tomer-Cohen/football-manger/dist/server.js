"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();
var cookie_parser_1 = require("cookie-parser");
var uri = process.env.MONGODB_URI;
app.use(cookie_parser_1["default"]());
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
app.use(express_1["default"].static("./public"));
var userRoute_1 = require("./API/user/userRoute");
app.use('/api/user', userRoute_1["default"]);
var playerRoute_1 = require("./API/player/playerRoute");
app.use('/api/player', playerRoute_1["default"]);
var gameRoute_1 = require("./API/game/gameRoute");
app.use('/api/game', gameRoute_1["default"]);
app.listen(4000, function () {
    console.log("server listen on port 4000");
});
