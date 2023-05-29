"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var serverPort = 5000;
var dotenv = require("dotenv");
dotenv.config();
var cookie_parser_1 = require("cookie-parser");
// DB
var mongoose_1 = require("mongoose");
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("DB Connected!");
    })["catch"](function (err) {
        console.log(err);
    });
}
else {
    console.log("Invlaid DB URI!");
}
// Routes Import
var loginRoute_1 = require("./API/routes/loginRoutes/loginRoute");
var registerRoute_1 = require("./API/routes/registerRoutes/registerRoute");
var itemsRouter_1 = require("./API/routes/itemsRoutes/itemsRouter");
var cartRouter_1 = require("./API/routes/cartRoutes/cartRouter");
app.use(express_1["default"].static("public"));
app.use(express_1["default"].static("public/index"));
app.use(express_1["default"].static("public/login"));
app.use(express_1["default"].static("public/register"));
app.use(express_1["default"].static("public/ship-store"));
app.use(express_1["default"].static("public/style"));
app.use(express_1["default"].json());
app.use(cookie_parser_1["default"]());
// Routes Use
app.use("/api/v1.0/users", loginRoute_1["default"]);
app.use("/api/v1.0/users", registerRoute_1["default"]);
app.use("/api/v1.0/items", itemsRouter_1["default"]);
app.use("/api/v1.0/cart", cartRouter_1["default"]);
app.listen(serverPort, function () {
    console.log("Server started at port " + serverPort);
});
