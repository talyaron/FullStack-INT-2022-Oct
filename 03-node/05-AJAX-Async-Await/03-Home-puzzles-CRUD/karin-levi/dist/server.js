"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var app = express_1["default"]();
app.use(express_1["default"].json());
var Joke = /** @class */ (function () {
    function Joke(value) {
        this.value = value;
        this.uid = uuidv4_1.uuid();
    }
    return Joke;
}());
var jokes = [
    new Joke("What do you call a boomerang that won’t come back? A stick."),
    new Joke("What time is it when the clock strikes 13? Time to get a new clock."),
    new Joke("How does a cucumber become a pickle? It goes through a jarring experience."),
];
app.get("/jokes", function (req, res) {
    try {
        res.send({ jokes: jokes });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.post("/joke", function (req, res) {
    try {
        var value = req.body.value;
        jokes.push(new Joke(value));
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.patch("/joke", function (req, res) {
    try {
        console.log(req.body);
        var _a = req.body, value = _a.value, uid_1 = _a.uid;
        if (!value)
            throw new Error("No value in data");
        if (!uid_1)
            throw new Error("No uid in data");
        var joke = jokes.find(function (joke) { return joke.uid === uid_1; });
        if (!joke)
            throw new Error("No joke in array");
        joke.value = value;
        console.log(jokes);
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app["delete"]("/joke", function (req, res) {
    try {
        console.log(req.body);
        var uid_2 = req.body.uid;
        if (!uid_2)
            throw new Error("no uid in data");
        var index = jokes.findIndex(function (joke) { return joke.uid === uid_2; });
        if (index === -1)
            throw new Error("couldnt find joke in jokes, with ID " + uid_2);
        jokes.splice(index, 1);
        res.send({ ok: true, jokes: jokes });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.use(express_1["default"].static("./public"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
