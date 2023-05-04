"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();
var cookie_parser_1 = require("cookie-parser");
var uri = process.env.MONGO_URI;
//to be able to get data from client add this line
app.use(cookie_parser_1["default"]());
app.use(express_1["default"].json());
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
var userRoutes_1 = require("./API/user/userRoutes");
var productRoutes_1 = require("./API/product/productRoutes");
app.use("/api/user", userRoutes_1["default"]);
app.use("/api/product", productRoutes_1["default"]);
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
