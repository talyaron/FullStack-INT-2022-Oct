"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].json());
var news = [
    {
        heading: "aaaaaa",
        content: "lorem ipsum jfnuvnfbvgfbvn jnvuirgnv jhviugnvb ugnb guvnkugv unvjf vnfvj fuivvnr vurv giuv",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhAwdq2y0xEktRHo-rtSn5w7FLuxIXLn_AA&usqp=CAU"
    },
    {
        heading: "bbbbb",
        content: "lorem ipsum jfnuvnfbvgfbvn jnvuirgnv jhviugnvb ugnb guvnkugv unvjf vnfvj fuivvnr vurv giuv",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhAwdq2y0xEktRHo-rtSn5w7FLuxIXLn_AA&usqp=CAU"
    },
    {
        heading: "E-T",
        content: "lorem ipsum jfnuvnfbvgfbvn jnvuirgnv jhviugnvb ugnb guvnkugv unvjf vnfvj fuivvnr vurv giuv",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79byLfksM62GRGdcN94bU41I8nN25dL17mw&usqp=CAU"
    }
];
app.get("/api/get-news", function (req, res) {
    try {
        res.send({ news: news });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.post("/api/add-news", function (req, res) {
    try {
        var data = req.body;
        console.log(data);
        news.push(data);
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.use(express_1["default"].static("./public"));
app.listen(4000, function () {
    console.log("server listen on port 4000");
});
