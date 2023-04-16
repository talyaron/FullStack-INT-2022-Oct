"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
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
var app = express_1["default"]();
//schema
var PlayerSchema = new mongoose_1.Schema({
    name: String,
    src: String
});
var PlayerModel = mongoose_1["default"].model("players", PlayerSchema);
//to be able to get data from client add this line
app.use(express_1["default"].json());
//static file+ listen
app.use(express_1["default"].static("./client"));
// app.use('/API/Players',playersRouts)
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
