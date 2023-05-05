"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv = require("dotenv");
var mongoose_1 = require("mongoose");
var pagesRouter_1 = require("./pagesRouter");
var usersRouters_1 = require("./API/users/usersRouters");
var cookie_parser_1 = require("cookie-parser");
var productsRouters_1 = require("./API/products/productsRouters");
dotenv.config();
var app = express_1["default"]();
var PORT = process.env.PORT;
var uri = process.env.MONGODB_URI;
app.use(cookie_parser_1["default"]());
app.use(express_1["default"].json());
app.use(express_1["default"].static("public"));
if (uri) {
    mongoose_1["default"].connect(uri).then(function () {
        console.log("DB connected");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("no found uri ");
}
app.use('/', pagesRouter_1["default"]);
app.use('/api/users', usersRouters_1["default"]);
app.use('/api/products', productsRouters_1["default"]);
if (!PORT)
    throw new Error("no found PORT number");
app.listen(PORT, function () {
    console.log("the server connect to PORT :" + PORT);
});
