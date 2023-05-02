"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();
var uri = process.env.MONGODB_URI;
//to be able ger data from cliesnt, add this line:
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log('DB connected!');
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log('No URI to DB');
}
app.use(express_1["default"].json());
app.use(express_1["default"].static("./public"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
