"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var cookie_parser_1 = require("cookie-parser");
var dotenv = require("dotenv");
dotenv.config();
var taskRoute_1 = require("./API/task/taskRoute");
var userRoute_1 = require("./API/user/userRoute");
var authRoute_1 = require("./API/auth/authRoute");
var historyRoute_1 = require("./API/history/historyRoute");
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("DB connected!");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No uri to DB");
}
app.use(express_1["default"].json());
app.use(cookie_parser_1["default"]());
app.use("/api/tasks", taskRoute_1["default"]);
app.use("/api/users", userRoute_1["default"]);
app.use("/api/auth", authRoute_1["default"]);
app.use("/api/histories", historyRoute_1["default"]);
app.use(express_1["default"].static("./client"));
app.listen(3010, function () {
    console.log("server listen on port 3010");
});
