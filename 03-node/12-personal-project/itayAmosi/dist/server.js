"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
var uri = process.env.MONGODB_URI;
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
var usersRoute_1 = require("./API/user/usersRoute");
app.use('/api/users', usersRoute_1["default"]);
var collectionsRoute_1 = require("./API/collection/collectionsRoute");
app.use('/api/collections', collectionsRoute_1["default"]);
var favouritesRoute_1 = require("./API/favourites/favouritesRoute");
app.use('/api/favourites', favouritesRoute_1["default"]);
// import gradesRouter from './API/grades/gradesRoute';
// app.use('/api/grades', gradesRouter);
// import examRouter from './API/exams/examsRoute';
// app.use('/api/exams', examRouter);
app.use(express_1["default"].static("./public"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
