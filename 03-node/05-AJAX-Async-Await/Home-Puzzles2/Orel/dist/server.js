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
var Admin = /** @class */ (function () {
    function Admin(Fname, email, password) {
        this.Fname = Fname;
        this.email = email;
        this.password = password;
        this.uuid = uuid_1.v4().trim();
    }
    return Admin;
}());
app.use(express_1["default"].static("public"));
app.use(express_1["default"].json());
var admins = [
    {
        Fname: "Orel Karako",
        email: "orekarako@gmail.com",
        password: "123456",
        uuid: uuid_1.v4().trim()
    },
    {
        Fname: "Tal Dev",
        email: "tal@gmail.com",
        password: "123465",
        uuid: uuid_1.v4().trim()
    }
];
var articles = [
    {
        title: " Bordeaux town hall set on fire in France pension protests",
        des: " More than a million people took to the streets across France on Thursday, with 119,000 in Paris according to figures from the interior ministry",
        src: "https://ichef.bbci.co.uk/news/800/cpsprodpb/101BC/production/_129108956_b77b0e44fa3fbe9eeea591fe9a1ef4c34909d5c70_193_5500_30961000x563.jpg.webp",
        uuid: "article" + uuid_1.v4()
    },
    {
        title: " France pension protests: Mounds of rubbish and e-scooters set on fire",
        des: " Large crowds have been protesting across France, on a ninth day of nationwide demonstrations and strikes over legislation to raise the retirement age from 62 to 64.",
        src: "https://media.cnn.com/api/v1/images/stellar/prod/230316133043-france-pension-protest-031623-restricted.jpg?c=16x9&q=h_720,w_1280,c_fill",
        uuid: "article" + uuid_1.v4()
    },
    {
        title: " Ukraine war: The front line where Russian eyes are always watching",
        des: " The line of trees appears to fragment and disappear as it winds its way towards the Russian positions on the outskirts of the small town of Velyka Novosilka.",
        src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/48B7/production/_129051681_1200-dima---as-shell-is-coming-in.jpg.webp",
        uuid: "article" + uuid_1.v4()
    },
    {
        title: " Kane's record-breaking goal helps 10-man England beat Italy - reaction",
        des: "Fire engulfs the building's front as violence flares in several cities during pension reform protests.",
        src: "https://ichef.bbci.co.uk/live-experience/cps/1440/cpsprodpb/2378/production/_129108090_gettyimages-1475622803.jpg",
        uuid: "article" + uuid_1.v4()
    },
    {
        title: " Jeremy Strong and Hollywood's most extreme actors",
        des: "As hit HBO drama Succession returns, star Jeremy Strong's \"method acting\" has been making headlines",
        src: "https://ychef.files.bbci.co.uk/1600x900/p0fb8hpf.webp",
        uuid: "article" + uuid_1.v4()
    },
    {
        title: "The leader of Indian's opposition Congress party Rahul Gandhi has said his disqualification by parliament was politically motivated.",
        des: " On Friday, India's parliament stripped Mr Gandhi of his MP status a day after he was sentenced to two years in prison in a defamation .",
        src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/3A1A/production/_129047841_gettyimages-1248465831-594x594.jpg.webp",
        uuid: "article" + uuid_1.v4()
    },
    {
        title: " France pension protests: Mounds of rubbish and e-scooters set on fire",
        des: " Large crowds have been protesting across France, on a ninth day of nationwide demonstrations and strikes over legislation to raise the retirement age from 62 to 64.",
        src: "https://media.cnn.com/api/v1/images/stellar/prod/230316133043-france-pension-protest-031623-restricted.jpg?c=16x9&q=h_720,w_1280,c_fill",
        uuid: "article" + uuid_1.v4()
    },
    {
        title: " Ukraine war: The front line where Russian eyes are always watching",
        des: " The line of trees appears to fragment and disappear as it winds its way towards the Russian positions on the outskirts of the small town of Velyka Novosilka.",
        src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/48B7/production/_129051681_1200-dima---as-shell-is-coming-in.jpg.webp",
        uuid: "article" + uuid_1.v4()
    },
    {
        title: " Kane's record-breaking goal helps 10-man England beat Italy - reaction",
        des: "Fire engulfs the building's front as violence flares in several cities during pension reform protests.",
        src: "https://ichef.bbci.co.uk/live-experience/cps/1440/cpsprodpb/2378/production/_129108090_gettyimages-1475622803.jpg",
        uuid: "article" + uuid_1.v4()
    },
    {
        title: " Jeremy Strong and Hollywood's most extreme actors",
        des: "As hit HBO drama Succession returns, star Jeremy Strong's \"method acting\" has been making headlines",
        src: "https://ychef.files.bbci.co.uk/1600x900/p0fb8hpf.webp",
        uuid: "article" + uuid_1.v4()
    }
];
app.patch('/api/articles/edit', function (req, res) {
    try {
        // const title = req.body.name;
        // const subtitle = req.body.des;
        // const uid = req.body.uuid;
        var _a = req.body, title = _a.name, subtitle = _a.des, uid_1 = _a.uuid;
        var curArticle = articles.find(function (a) { return a.uuid === uid_1; });
        if (!curArticle)
            throw new Error("the article not founded");
        curArticle.title = title,
            curArticle.des = subtitle,
            res.status(200).send({ succuss: true, articles: articles });
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
});
app["delete"]('/api/articles', function (req, res) {
    try {
        var data_1 = req.body.name;
        var index = articles.findIndex(function (a) { return a.uuid === data_1; });
        if (!index && index !== 0)
            throw new Error("no index founds in article");
        articles.splice(index, 1);
        res.status(200).send({ succuss: true, articles: articles });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.post('/api/articles/add', function (req, res) {
    try {
        var data = req.body;
        var name = data.name, des = data.des, img = data.img;
        articles.push(new Article(name, des, img));
        res.status(201).send({ succuss: true, articles: articles });
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
app.get('/api/admins', function (req, res) {
    try {
        if (!admins)
            throw new Error("no Found Admins array");
        res.send(admins);
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(PORT, function () {
    console.log("The Server Listen to PORT:" + PORT);
});
