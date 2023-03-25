"use strict";
////////////////model//////////////////
exports.__esModule = true;
var Article = /** @class */ (function () {
    function Article(title, paragraph, imageUrl, date) {
        this.title = title;
        this.paragraph = paragraph;
        this.imageUrl = imageUrl;
        this.date = date;
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
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].static("./public"));
// app.get("/api/login", (req, res) => {
//     try {
// console.log("activeAdmin.name", activeAdmin.name)
//       res.send({ activeAdmin });
//     } catch (error: any) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   });
app.post("/api/login", function (req, res) {
    try {
        console.log("server test");
        var data = req.body;
        console.log(data);
        admins.push(data);
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("server listen on " + port);
});
