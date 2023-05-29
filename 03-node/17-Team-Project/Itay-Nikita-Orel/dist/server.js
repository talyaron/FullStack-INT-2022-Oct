"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
var cookie_parser_1 = require("cookie-parser");
var userRouter_1 = require("./API/users/userRouter");
var enemyRouter_1 = require("./API/enemy/enemyRouter");
var towerRouter_1 = require("./API/towers/towerRouter");
var gameRouter_1 = require("./API/game/gameRouter");
var app = express_1["default"]();
dotenv.config();
app.use(cookie_parser_1["default"]());
app.use(express_1["default"].json());
var uri = process.env.MONGO_DB;
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
app.use(express_1["default"].static("./public"));
app.use(express_1["default"].static("./public/pages"));
app.use('/api/users', userRouter_1["default"]);
app.use('/api/enemy', enemyRouter_1["default"]);
app.use('/api/tower', towerRouter_1["default"]);
app.use('/api/game', gameRouter_1["default"]);
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
