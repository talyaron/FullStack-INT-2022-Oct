"use strict";
exports.__esModule = true;
//server
var dotenv = require("dotenv");
dotenv.config();
//express
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].json());
//mongoose
var mongoose_1 = require("mongoose");
var uri = process.env.MONGODB_URI;
//connecting to the DB
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
// schema
var UserSchema = new mongoose_1.Schema({
    name: String,
    src: String
});
var UserModel = mongoose_1["default"].model('users', UserSchema);
