"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var app = express_1["default"]();
app.use(express_1["default"].json());
//data
var Joke = /** @class */ (function () {
    function Joke(content) {
        this.content = content;
        this.uid = uuidv4_1.uuid();
    }
    Joke.prototype.getSimpleJoke = function () {
        return { uid: this.uid, content: this.content };
    };
    return Joke;
}());
var jokes = [
    new Joke("why did the chicken cross the street?"),
    new Joke("What’s the best thing about Switzerland? I don’t know, but the flag is a big plus"),
    new Joke("Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.")
];
app.get("/api/get-jokes", function (req, res) {
    try {
        res.send({ jokes: jokes });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//add
app.post("/api/add-joke", function (req, res) {
    try {
        var content = req.body.content;
        console.log(content);
        jokes.push(new Joke(content));
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//update
app.patch("/api/update-joke", function (req, res) {
    try {
        var _a = req.body, content = _a.content, uid_1 = _a.uid;
        if (!content)
            throw new Error("No content in data");
        var joke = jokes.find(function (joke) { return joke.uid === uid_1; });
        if (!joke)
            throw new Error("No joke in array");
        joke.content = content;
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app["delete"]("/api/delete-joke", function (req, res) {
    try {
        var uid_2 = req.body.uid;
        if (!uid_2)
            throw new Error("no uid in data");
        var index = jokes.findIndex(function (user) { return user.uid === uid_2; });
        if (index === -1)
            throw new Error("couldnt find user in jokes, with ID " + uid_2);
        jokes.splice(index, 1);
        var _jokes = jokes.map(function (user) { return user.getSimpleJoke(); });
        res.send({ ok: true, jokes: _jokes });
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
