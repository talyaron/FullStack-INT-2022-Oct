"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cookieParser = require('cookie-parser');
var app = express_1["default"]();
app.use(cookieParser());
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
app.use(express_1["default"].json());
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
var usersRoute_1 = require("./API/user/usersRoute");
app.use('/api/users', usersRoute_1["default"]);
var collectionsRoute_1 = require("./API/collection/collectionsRoute");
app.use('/api/collections', collectionsRoute_1["default"]);
var CartRoute_1 = require("./API/cart/CartRoute");
app.use('/api/cart', CartRoute_1["default"]);
app.use(express_1["default"].static("./public"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
