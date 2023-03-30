"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var app = express_1["default"]();
app.use(express_1["default"].json());
var Joke = /** @class */ (function () {
    function Joke(name, subtext) {
        this.name = name;
        this.subtext = subtext;
        this.uid = uuidv4_1.uuid();
    }
    Joke.prototype.getSimpleUser = function () {
        return { uid: this.uid, name: this.name, subtext: this.subtext };
    };
    return Joke;
}());
var jokes = [
    new Joke("Son of a programmer", "son asks his programmer father son: Dad, why does the sun rise in the east and set in the west? Father: If it works, don't touch it"),
    new Joke("nak nak joke", 'Knock knock!.who is there?. The stay is very long…. JAVA.'),
    new Joke("Question", "How many Microsoft programmers does it take to change a light bulb? Answer: Not one. They will make darkness the standard and force everyone to work according to it."),
    new Joke("lights bulb", "How many developers do you need to change a bulb, none of this is a hardware problem"),
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
app.post("/api/add-joke", function (req, res) {
    try {
        var _a = req.body, name = _a.name, subtext = _a.subtext;
        console.log(name, subtext);
        jokes.push(new Joke(name, subtext));
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.put("/api/update-joke", function (req, res) {
    try {
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app.patch("/api/update-user-joke", function (req, res) {
    try {
        var _a = req.body, name = _a.name, uid_1 = _a.uid;
        if (!name)
            throw new Error("No name in data");
        if (!uid_1)
            throw new Error("No uid in data");
        var user = jokes.find(function (user) { return user.uid === uid_1; });
        if (!user)
            throw new Error("No user in array");
        user.name = name;
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
        var _jokes = jokes.map(function (user) { return user.getSimpleUser(); });
        res.send({ ok: true, jokes: _jokes });
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
