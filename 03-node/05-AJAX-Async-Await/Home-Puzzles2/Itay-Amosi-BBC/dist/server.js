"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var app = express_1["default"]();
app.use(express_1["default"].static("./public"));
var Admin = /** @class */ (function () {
    function Admin(name, lastName, password) {
        this.name = name;
        this.lastName = lastName;
        this.password = password;
    }
    return Admin;
}());
var Article = /** @class */ (function () {
    function Article(tital, src, paregraph) {
        this.tital = tital;
        this.src = src;
        this.paregraph = paregraph;
    }
    return Article;
}());
var articles = [
    {
        tital: "Many schoolchildren among Indonesia quake dead!",
        src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/3555/production/_127735631_workbuilding.png.webp",
        paregraph: "the death toll from monday's earthquake on java island soars to 268 with many people stiendi sit rerum magni"
    },
    {
        tital: "Follow World Cup: France v Australia",
        src: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/vivo/live/images/2022/11/22/a648fbb4-d9f7-41fd-8213-f6d6186bafe2.jpg",
        paregraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ratione"
    },
    {
        tital: "Follow World Cup: France v Australia",
        src: "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/150EE/production/_127745268_tv080112965.jpg",
        paregraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ratione"
    },
];
var admins = [
    {
        name: "itai",
        lastName: "gelberg",
        password: "123123"
    },
    {
        name: "itay",
        lastName: "amosi",
        password: "1235"
    },
];
app.get("/api/get-articles", function (req, res) {
    try {
        res.send({ articles: articles });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.get("/admin", function (req, res) {
    var admin = fs_1["default"].readFileSync("./public/admin.html", {
        encoding: "utf8",
        flag: "r"
    });
    res.send(admin);
});
app.post("/admin", function (req, res) {
    fs_1["default"].readFileSync("./public/admin.html", {
        encoding: "utf8",
        flag: "r"
    });
});
app.listen(3000, function () { console.log("server listening on port 3000"); });
