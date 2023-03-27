"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var PORT = 3000;
var articles = [
    {
        name: "Filip Petrusev",
        article: "https://www.euroleaguebasketball.net/euroleague/news/filip-petrusev-zvezda-this-is-where-i-feel-comfortable/?pageTitle=Homepage&historyUrl=/euroleague/",
        id: 1
    },
    {
        name: "Vasilije Micic",
        article: "https://www.euroleaguebasketball.net/euroleague/news/rememberthewhy-with-vasilije-micic-i-wanted-to-create-something-from-the-bottom-from-zero/?pageTitle=Homepage&historyUrl=/euroleague/",
        id: 2
    },
    {
        name: "Lorenzo Brown",
        article: "https://www.euroleaguebasketball.net/euroleague/news/lorenzo-brown-hops-aboard-the-crossover/?pageTitle=Homepage&historyUrl=/euroleague/",
        id: 3
    }
];
app.get("/articles", function (req, res) {
    res.send({ articles: articles });
});
app.use(express_1["default"].static('./public'));
app.listen(PORT, function () {
    console.log("server run at:" + PORT);
});
