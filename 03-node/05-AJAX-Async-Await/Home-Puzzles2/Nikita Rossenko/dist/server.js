"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var uuid_1 = require("uuid");
var app = express_1["default"]();
app.use(express_1["default"].static('./public'));
app.use(express_1["default"].json());
var articale = /** @class */ (function () {
    function articale(name, articleDesctiption, imageURL) {
        this.name = name;
        this.articleDesctiption = articleDesctiption;
        this.imageURL = imageURL;
        this.uid = uuid_1.v4();
    }
    return articale;
}());
var articales = [];
app.get('/', function (req, res) {
    var index = fs_1["default"].readFileSync('index.html', { encoding: 'utf8', flag: 'r' });
    res.send(index);
});
app.get('/api/get-articales', function (req, res) {
    res.send({ articales: articales });
});
app.post('/api/add-articale', function (req, res) {
    try {
        var newArticale = req.body;
        var articaleExists = false;
        if (articales.length > 0) {
            for (var i = 0; i < articales.length; i++) {
                if (articales[i].name == newArticale.name && articales[i].articleDesctiption == newArticale.articleDesctiption) {
                    articaleExists = true;
                    res.status(400).send({ ok: false, status: 'Articale already exists' });
                }
            }
            if (articaleExists == false) {
                articales.push(new articale(newArticale.name, newArticale.articleDesctiption, newArticale.imageURL));
                res.status(201).send({ ok: true });
            }
        }
        else {
            articales.push(new articale(newArticale.name, newArticale.articleDesctiption, newArticale.imageURL));
            res.status(201).send({ ok: true });
        }
    }
    catch (error) {
        res.status(400).send({ ok: false });
        console.log(error);
    }
});
app.listen(5000, function () {
    console.log("Server is running on port 5000");
});
