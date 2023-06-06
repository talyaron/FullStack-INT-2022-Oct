"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var myData = process.env.MD_MYD;
if (myData) {
    mongoose_1["default"]
        .connect(myData)
        .then(function () {
        console.log("My Db Connected");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No URI to DB");
}
