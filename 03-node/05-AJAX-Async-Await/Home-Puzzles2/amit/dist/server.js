"use strict";
exports.__esModule = true;
////////////////model//////////////////
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Article = /** @class */ (function () {
    function Article(title, paragraph, imageUrl, date) {
        this.title = title;
        this.paragraph = paragraph;
        this.imageUrl = imageUrl;
        this.date = date;
        this.uid = "" + uid();
    }
    return Article;
}());
var articles = [];
articles.push(new Article("KIA MVP TRACKER: LATEST FROM CONTENDERS", "Stay up to date on the race for Kia NBA MVP with a look at the latest performances from the top candidates", "https://cdn.nba.com/manage/2023/03/giannis-embiid-jokic-split-2023.png?w=784&h=441"));
articles.push(new Article("REPORTS: LEBRON AIMS TO RETURN BEFORE END OF SEASON", "The Lakers have been without the NBA's all-time leading scorer since February.", "https://cdn.nba.com/manage/2023/03/lebron-james-iso-looks.jpg?w=735&h=413"));
articles.push(new Article("CAN THE WARRIORS OVERCOME BAD ROAD RECORD?", "Breaking down stats and history on the uphill path Golden State could face in the postseason.", "https://cdn.nba.com/manage/2023/03/USATSI_20257520-scaled-e1679586632244.jpg?w=735&h=413"));
articles.push(new Article("KIA ROOKIE LADDER: TOP 5 REMAINS INTACT", "Detroit's Jaden Ivey is embracing what comes at him in his 1st NBA season as we take stock of the Kia Rookie of the Year chase", "https://cdn.nba.com/manage/2023/03/jaden-ivey-looks-on-iso.jpg?w=735&h=413"));
var admins = [{ name: "amit", password: "123" }];
////////////////////////////// Server /////////////////////////
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: false }));
app.use(express_1["default"].static("./public"));
app.get("/api/articles", function (req, res) {
    try {
        res.send({ articles: articles });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.post("/api/login", function (req, res) {
    try {
        var data = req.body;
        admins.push(data);
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.post("/api/articles", function (req, res) {
    try {
        var data = req.body;
        articles.push(data);
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.patch("/api/articles/:uid", function (req, res) {
    try {
        var article = articles.find(function (article) { return article.uid === req.params.uid; });
        if (!article)
            return res.sendStatus(404);
        var data = req.body;
        article.title = data.title;
        article.paragraph = data.paragraph;
        console.log("articles in patch", articles);
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
var port = 3000;
app.listen(port, function () {
    console.log("server listen on " + port);
});
