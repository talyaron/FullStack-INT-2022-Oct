"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
<<<<<<< HEAD
var PORT = 3000;
app.get("/", function (req, res) {
    res.send("hello");
});
app.use(express_1["default"].static('./public'));
app.listen(PORT, function () {
    console.log("server listen at: " + PORT);
=======
var PORT = 5000;
var artic = [
    {
        name: "",
        src: "",
        article: ""
    },
    {
        name: "Micic",
        src: "https://media-cdn.incrowdsports.com/aa5e7932-e91f-4385-9c07-f4304331a665.jpg?crop=1920%3A1080%3Anowe%3A0%3A0&width=1920&resizeType=fill&format=webp",
        article: "   "
    },
    {
        name: "",
        src: "",
        article: ""
    },
];
app.get("/", function (req, res) {
    res.send("test");
});
app.use(express_1["default"].static("./public"));
app.listen(PORT, function () {
    console.log("server run at:" + PORT);
>>>>>>> 8216187d183022878479cd2eb7a3927b167fdfe3
});
