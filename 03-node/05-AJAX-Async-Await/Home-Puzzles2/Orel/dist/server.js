"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuid_1 = require("uuid");
var app = express_1["default"]();
var PORT = 3000;
var Article = /** @class */ (function () {
    function Article(title, des, src) {
        this.title = title;
        this.des = des;
        this.src = src;
        this.uuid = uuid_1.v4().trim();
    }
    return Article;
}());
app.use(express_1["default"].static("public"));
app.use(express_1["default"].json());
var articles = [
    {
        title: " Bordeaux town hall set on fire in France pension protests",
        des: " More than a million people took to the streets across France on Thursday, with 119,000 in Paris according to figures from the interior ministry",
        src: "https://ichef.bbci.co.uk/news/800/cpsprodpb/101BC/production/_129108956_b77b0e44fa3fbe9eeea591fe9a1ef4c34909d5c70_193_5500_30961000x563.jpg.webp",
        uuid: uuid_1.v4()
    },
    {
        title: " France pension protests: Mounds of rubbish and e-scooters set on fire",
        des: " Large crowds have been protesting across France, on a ninth day of nationwide demonstrations and strikes over legislation to raise the retirement age from 62 to 64.",
        src: "https://media.cnn.com/api/v1/images/stellar/prod/230316133043-france-pension-protest-031623-restricted.jpg?c=16x9&q=h_720,w_1280,c_fill",
        uuid: uuid_1.v4()
    },
    {
        title: " Ukraine war: The front line where Russian eyes are always watching",
        des: " The line of trees appears to fragment and disappear as it winds its way towards the Russian positions on the outskirts of the small town of Velyka Novosilka.",
        src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/48B7/production/_129051681_1200-dima---as-shell-is-coming-in.jpg.webp",
        uuid: uuid_1.v4()
    },
    {
        title: " Kane's record-breaking goal helps 10-man England beat Italy - reaction",
        des: "Fire engulfs the building's front as violence flares in several cities during pension reform protests.",
        src: "https://ichef.bbci.co.uk/live-experience/cps/1440/cpsprodpb/2378/production/_129108090_gettyimages-1475622803.jpg",
        uuid: uuid_1.v4()
    },
    {
        title: " Jeremy Strong and Hollywood's most extreme actors",
        des: "As hit HBO drama Succession returns, star Jeremy Strong's \"method acting\" has been making headlines",
        src: "https://ychef.files.bbci.co.uk/1600x900/p0fb8hpf.webp",
        uuid: uuid_1.v4()
    }
];
// push new Article to the Array 
app.get('/', function (req, res) {
    try {
        res.send("Orel");
    }
    catch (error) {
        console.error(error);
    }
});
app.post('/api/articles', function (req, res) {
    try {
        var data = req.body;
        console.log(data);
        res.status(201).send({ succuss: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.get('/api/articles', function (req, res) {
    try {
        if (!articles)
            throw new Error("no Found Articles array");
        res.send(articles);
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(PORT, function () {
    console.log("The Server Listen to PORT:" + PORT);
});
