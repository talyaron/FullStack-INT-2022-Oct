"use strict";
exports.__esModule = true;
var express_1 = require("express");
// import path from "path";
// import v4 from 'uuid';
// import { foodTips } from "./public/module";
var mongoose_1 = require("mongoose");
// import { error } from "console";
var dotenv = require("dotenv");
dotenv.config();
var uri = process.env.MONGODB_URI;
if (!uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("DB connected");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No Uri DB");
}
var PORT = 3000;
var app = express_1["default"]();
app.use(express_1["default"].static("./public"));
// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "index.html"));
//   });
//   app.get('/foodTips', (req, res) => {
//     const jsonData = JSON.stringify(foodTips);
//     res.send(jsonData);
//   });
app.listen(PORT, function () {
    console.log("Server lister on port: " + PORT);
});
