"use strict";
exports.__esModule = true;
// imports
var express_1 = require("express");
// set the server
var app = express_1["default"]();
var PORT = 5000;
// convert to json
app.use(express_1["default"].json());
// use file in the lab
app.use(express_1["default"].static("./public"));
app.use(express_1["default"].static("./routes"));
app.listen(PORT, function () {
    console.log("server listen at: http://localhost:" + PORT);
});
