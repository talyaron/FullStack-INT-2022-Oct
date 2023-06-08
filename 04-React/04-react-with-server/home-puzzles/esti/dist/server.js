"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].static('./client'));
var balloons = [
    {
        img: "https://image.pngaaa.com/310/991310-small.png"
    },
    {
        img: "https://s.pngkit.com/png/small/8-80252_sweet-birthday-free-balloon-transparent-background-purple-balloon.png"
    },
    {
        img: "https://s.pngkit.com/png/small/44-446923_green-balloon-png-image-transparent-background-green-balloon.png"
    },
    {
        img: "https://s.pngkit.com/png/small/118-1186105_red-balloon-png-transparent-background-red-balloon-png.png"
    },
];
app.get("/api/get-word", function (req, res) {
    res.send({ ok: true });
});
app.get("/api/get-balloons", function (req, res) {
    res.send({ balloons: balloons });
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("server listen on port " + PORT);
});
