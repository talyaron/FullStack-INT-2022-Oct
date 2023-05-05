"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
var cookie_parser_1 = require("cookie-parser");
var uri = process.env.MONGODB_URI;
//to be able to get data from client add this line
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
//static file
app.use(express_1["default"].json());
app.use(express_1["default"].static("./public"));
var userRoutes_1 = require("./API/user/userRoutes");
app.use("/api/user", userRoutes_1["default"]);
var productRoutes_1 = require("./API/product/productRoutes");
app.use("/api/product", productRoutes_1["default"]);
var user_productRoutes_1 = require("./API/user-product/user-productRoutes");
app.use("/api/user-product", user_productRoutes_1["default"]);
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
