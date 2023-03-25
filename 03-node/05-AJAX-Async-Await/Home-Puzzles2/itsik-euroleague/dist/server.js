"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
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
});
