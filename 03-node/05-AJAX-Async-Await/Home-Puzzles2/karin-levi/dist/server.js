"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
//to be able to get data from client add this line
app.use(express_1["default"].json());
var Article = /** @class */ (function () {
    function Article(title, imgSrc, content) {
        this.title = title;
        this.imgSrc = imgSrc;
        this.content = content;
    }
    return Article;
}());
var ar1 = new Article("Many schoolchildren among Indonesia quake dead", "https://ichef.bbci.co.uk/news/976/cpsprodpb/3555/production/_127735631_workbuilding.png.webp", "he death toll from Monday's earthquake on Java island soars to 268, with many people still missing");
var ar2 = new Article("Germany v Japan", "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2022/11/23/32740a78-8df9-4d72-bf06-96be139dcbff.jpg", "Germany have to be 'very focused from the first moment");
var ar3 = new Article("BBC News, Wilhelmshaven", "https://ichef.bbci.co.uk/news/976/cpsprodpb/1F4E/production/_127741080_cea81bbc297aa74d5903115be346f2625651aa160_0_5456_36371000x667.jpg.webp", "Many in Germany were bracing for a tough winter after Russia slashed supplies of gas");
var ar4 = new Article("China Covid: Angry protests at giant iPhone factory in Zhengzhou", "https://ichef.bbci.co.uk/news/976/cpsprodpb/11751/production/_127750517_china_iphone_factory.jpg.webp", "Workers told the BBC they weren't being paid their promised wages");
var ar5 = new Article("BBC News", "https://ichef.bbci.co.uk/news/976/cpsprodpb/109F3/production/_127738086_9.11.22lng-terminal11.jpg.webp", "Russia slashed its supplies of gas to Europe following the invasion of Ukraine");
var articles = [ar1, ar2, ar3, ar4, ar5];
app.get("/api/get-articles", function (req, res) {
    try {
        res.send({ articles: articles });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//static file
app.use(express_1["default"].static("./public"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
