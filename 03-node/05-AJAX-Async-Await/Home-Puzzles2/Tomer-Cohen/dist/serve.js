"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
//to be able to get data from client add this line
app.use(express_1["default"].json());
//data
var Article = /** @class */ (function () {
    function Article(name, content, pic) {
        this.name = name;
        this.content = content;
        this.pic = pic;
    }
    return Article;
}());
var articles = [];
articles.push(new Article('World Cup', '15,000 dead for 5760 minutes of football. Shame on you', 'https://e0.365dm.com/21/10/2048x1152/skysports-world-cup-trophy_5555593.jpg'));
articles.push(new Article('disgrace', 'Iran players decline to sing national anthem', 'https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/11D8F/production/_127730137_cc9b297c676b631c5964fe023542e959cf848ccf.jpg'));
articles.push(new Article('Indonesia', 'quake kills 162 and injures hundreds', 'https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/14F3F/production/_127732858_javaearthquake-index2-reuters.jpg'));
//data route
//get (from server)
app.get("/api/get-articles", function (req, res) {
    try {
        res.send({ articles: articles });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//add
// app.post("/api/add-articles", (req, res) => {
//   try {
//     const data = req.body;
//     console.log(data);
//     users.push(data);
//     res.status(201).send({ ok: true });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
//static file
app.use(express_1["default"].static("./public"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
