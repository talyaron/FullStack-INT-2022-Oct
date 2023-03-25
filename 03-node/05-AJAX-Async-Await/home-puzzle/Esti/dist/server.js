"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var app = express_1["default"]();
var PORT = 3000;
app.use(express_1["default"].static("./public"));
app.get("/", function (req, res) {
    res.sendFile(path_1["default"].resolve(__dirname, "index.html"));
});
app.listen(PORT, function () {
    console.log("Server lister on port: " + PORT);
});
