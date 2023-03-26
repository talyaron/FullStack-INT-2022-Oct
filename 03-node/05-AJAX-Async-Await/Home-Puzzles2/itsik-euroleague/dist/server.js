"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var PORT = 3000;
app.get("/articles", function (req, res) {
    res.send("hello");
});
app.use(express_1["default"].static('./public'));
var artic = [
    {
        name: "",
        src: "",
        article: ""
    },
    {
        name: "Micic",
        src: "https://media-cdn.incrowdsports.com/aa5e7932-e91f-4385-9c07-f4304331a665.jpg?crop=1920%3A1080%3Anowe%3A0%3A0&width=1920&resizeType=fill&format=webp",
        article: " Vasilije Micic of Anadolu Efes Istanbul steps into the spotlight for the first episode of the Euroleague Basketball and Adidas collaboration in which Turkish Airlines EuroLeague stars discuss their personal journeys.   The two-time EuroLeague champion and Final Four MVP was interviewed about the key moments of his career that propelled his path to stardom and the lessons he learned along the way,  The two-time EuroLeague champion and Final Four MVP was interviewed about the key moments of his career that propelled his path to stardom and the lessons he learned along the way. Micic emphasized that some of his biggest decisions didn't seem  logical to others: leaving the EuroLeague to sign for Tofas Bursa at age 22 in a quest to fulfil his potential; moving to Zalgiris Kaunas the next season with a backup role under coach Sarunas Jasikevicius; and, most successfully, joining an Efes team that had ranked dead last in the EuroLeague before he signed in the summer of 2018. "
    },
    {
        name: "lorenzo brown",
        src: "https://i.ytimg.com/vi/Gw0lwgepuf4/hq720.jpg",
        article: " Lorenzo Brown is in the midst of his best Turkish Airlines EuroLeague season to date. The combo guard seems to have found a home with Maccabi Playtika Tel Aviv, which recently signed him to a three-year extension. Now at home on the Mediterranean coast in Israel, Brown spoke about his upbringing and the challenges along the way that led to him becoming a EuroLeague star."
    },
];
app.listen(PORT, function () {
    console.log("server run at:" + PORT);
});
