"use strict";
exports.__esModule = true;
//express & mongoose//
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
//env//
var dotenv = require("dotenv");
dotenv.config();
//cookies//
var cookie_parser_1 = require("cookie-parser");
app.use(cookie_parser_1["default"]());
//connecting DB//
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
//getting data from public
app.use(express_1["default"].json());
//connecting to entities routes//
var usersRoute_1 = require("./API/users/usersRoute");
app.use('/api/users', usersRoute_1["default"]);
var moviesRoute_1 = require("./API/movies/moviesRoute");
app.use('/api/movies', moviesRoute_1["default"]);
var seatsRoute_1 = require("./API/seats/seatsRoute");
app.use('/api/seats', seatsRoute_1["default"]);
var ordersRoute_1 = require("./API/orders/ordersRoute");
app.use('/api/orders', ordersRoute_1["default"]);
//static file
app.use(express_1["default"].static("./public"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
