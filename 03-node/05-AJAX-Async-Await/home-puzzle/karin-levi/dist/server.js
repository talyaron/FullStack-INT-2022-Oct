"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
//data route
app.get("/random-picture", function (req, res) {
    console.log("lala");
    res.send({ pic: "bla" });
});
//static file
app.use(express_1["default"].static("./public"));
app.listen(3001, function () {
    console.log("server listen on port 3000");
});
