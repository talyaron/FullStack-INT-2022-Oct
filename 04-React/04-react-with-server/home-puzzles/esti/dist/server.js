"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].static('./client'));
var balloons = [
    {
        img: "https://e7.pngegg.com/pngimages/429/227/png-clipart-balloon-balloon-heart-balloon-thumbnail.png"
    },
    {
        img: "https://e7.pngegg.com/pngimages/960/385/png-clipart-balloon-gold-powder-balloon-balloon-gold-powder-balloon-thumbnail.png"
    },
    {
        img: "https://e7.pngegg.com/pngimages/102/589/png-clipart-balloon-single-purple-balloon-purple-balloon-violet-photography-thumbnail.png"
    },
    {
        img: "https://e7.pngegg.com/pngimages/407/460/png-clipart-balloon-balloon-blue-balloon-thumbnail.png"
    },
    {
        img: "https://e7.pngegg.com/pngimages/220/707/png-clipart-yellow-balloon-illustration-yellow-balloon-font-yellow-balloon-orange-balloon-thumbnail.png"
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
