"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
dotenv.config();
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("DB connected!");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No URI to DB");
}
app.use(express_1["default"].static("./client"));
var ballons = [
    {
        img: "https://cdn.shopify.com/s/files/1/0257/6718/2416/products/Pink-Balloon-NZ-The-Party-Room.jpg?v=1629034351",
        name: "ballon1"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0003/0893/6713/products/Fashion_Red_1024x1024.jpg?v=1561617204",
        name: "ballon2"
    },
    {
        img: "https://partywarehouse.co.nz/image/cache/data/balloon-orange-500x500.jpg",
        name: "ballon3"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0016/7506/7507/products/Metallic_Gold_Latex_Balloons_x_10_x_450_fd08dbd5-64b9-408a-a341-9e5a7f432014_600x.jpg?v=1575917171",
        name: "ballon4"
    },
];
app.get("/api/get-word", function (req, res) {
    res.send({ ok: true });
});
app.get("/api/get-ballons", function (req, res) {
    res.send({ ok: true, ballons: ballons });
});
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
