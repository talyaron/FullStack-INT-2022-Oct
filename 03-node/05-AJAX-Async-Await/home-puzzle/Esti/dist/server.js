"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
var PORT = 3000;
app.use(express_1["default"].static("./public"));
var text = fs_1["default"].readFileSync("./public/textfile.txt", "utf8");
app.get("/esti", function (req, res) {
    res.send(text);
});
app.listen(PORT, function () {
    console.log("Server lister on port: " + PORT);
});
