"use strict";
exports.__esModule = true;
var express_1 = require("express");
// import bodyParser from "body-parser";
var app = express_1["default"]();
var students_1 = require("./routes/students");
//Middleware
app.use(express_1["default"].static("./public"));
app.use(express_1["default"].json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
//routes
app.use("/api/v1/students", students_1.router);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is listening on port " + PORT + "...");
});
