"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var PORT = 3000;
app.use(express_1["default"].static('./public'));
app.use(express_1["default"].json());
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
var Article = /** @class */ (function () {
    function Article(header, subject, body) {
        this.header = header;
        this.subject = subject;
        this.body = body;
        this.id = uid();
    }
    return Article;
}());
var allArticles = [
    new Article("Test", "Test", "Hi, testing here"),
    new Article("Hello", "Greeting", "Formal way")
];
app.get('/all-articles', function (req, res) {
    try {
        res.send(allArticles);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
app.post('/articles-delete', function (req, res) {
    try {
        var data = req.body;
        console.log(data);
        allArticles.splice(parseInt(data), 1);
        res.status(200).send(true);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
app.post('/articles-data', function (req, res) {
    try {
        var data = req.body;
        allArticles.push(data);
        res.status(201).send(true);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
app.listen(PORT, function () { return console.log("server listen on port " + PORT); });
