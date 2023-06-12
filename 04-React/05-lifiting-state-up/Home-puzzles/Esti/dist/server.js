"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();
var app = express_1["default"]();
var uri = process.env.MONGODB_URI;
console.log(uri);
app.use(express_1["default"].json());
// req.header = 'dsjfkhsdkjfhskjdfh' -> req.body
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
var footballPlayersRouter_1 = require("./API/footballPlayers/footballPlayersRouter");
app.use('/api/footballPlayers', footballPlayersRouter_1["default"]);
//static file
app.use(express_1["default"].static("./client"));
var PORT = 3000;
app.listen(PORT, function () {
    console.log("server listen on port " + PORT);
});
