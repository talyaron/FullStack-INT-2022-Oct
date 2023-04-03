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
    setTimeout(function () {
        res.send({ images: Math.floor(Math.random() * image.length) });
    });
});
// app.get("/random-image", (req, res) => {
//   const randomIndex = Math.floor(Math.random() * image.length);
//   const randomImageUrl = image[randomIndex];
//   res.json({ imageUrl: randomImageUrl });
//   // res.send({ imageUrl: Math.round(Math.random() * image.length) });
// });
app.listen(3000, function () {
    console.log("Server listening on port 3000");
});
