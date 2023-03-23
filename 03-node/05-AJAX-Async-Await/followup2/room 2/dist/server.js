"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].json());
var bots = [
    {
        name: "J-M",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhAwdq2y0xEktRHo-rtSn5w7FLuxIXLn_AA&usqp=CAU"
    },
    {
        name: "D-U",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhMCXUoL-8HULCFPFbNiCmbw2r-LWVIXNsw&usqp=CAU"
    },
    {
        name: "E-T",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79byLfksM62GRGdcN94bU41I8nN25dL17mw&usqp=CAU"
    }
];
app.get("/api/get-bots", function (req, res) {
    try {
        res.send({ bots: bots });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
