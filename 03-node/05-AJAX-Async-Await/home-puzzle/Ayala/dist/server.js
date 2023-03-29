"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].static("./client"));
var image = [
    'images1.jpg',
    "images2.jpg",
    "images3.jpg",
    "images4.jpg",
    "images5.jpg",
    "images6.jpg",
    "images7.jpg",
];
app.get("/random-image", function (req, res) {
    var randomIndex = Math.floor(Math.random() * image.length);
    var randomImageUrl = "/images/" + image[randomIndex];
    res.json({ imageUrl: randomImageUrl });
});
app.listen(3000, function () {
    console.log("Server listening on port 3000");
});
