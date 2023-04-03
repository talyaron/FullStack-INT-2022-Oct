"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuid_1 = require("uuid");
var app = express_1["default"]();
//to be able to get data from client add this line
app.use(express_1["default"].json());
//static file+ listen
app.use(express_1["default"].static("./client"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
//data
var soccerPlayer = /** @class */ (function () {
    function soccerPlayer(name, src) {
        this.name = name;
        this.src = src;
        this.uid = uuid_1.v4();
    }
    soccerPlayer.prototype.getSimplePlayer = function () {
        return { uid: this.uid, name: this.name, src: this.src };
    };
    return soccerPlayer;
}());
var players = [
    new soccerPlayer("messi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgAfkK8-xTO0RMfSgdlfwJ20KBI3rqVPs6RQ&usqp=CAU"),
    new soccerPlayer("pele", "data:image/jpeg;base64,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"),
];
//get (from srever)
app.get("/api/get-players", function (req, res) {
    try {
        res.send({ players: players });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//add
app.post("/api/add-players", function (req, res) {
    try {
        var _a = req.body, name = _a.name, url = _a.url;
        players.push(new soccerPlayer(name, url));
        res.status(201).send({ ok: true });
        console.log(players);
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app["delete"]("/api/delete-player", function (req, res) {
    try {
        var uid_1 = req.body.uid;
        if (!uid_1)
            throw new Error("no uid in data");
        var index = players.findIndex(function (player) { return player.uid === uid_1; });
        if (index === -1)
            throw new Error("couldnt find player in players, with ID " + uid_1);
        players.splice(index, 1);
        var _players = players.map(function (player) { return player.getSimplePlayer(); });
        res.send({ ok: true, players: _players });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
// transodrm enetiy
app.patch("/api/update-player-name", function (req, res) {
    try {
        var _a = req.body, name = _a.name, uid_2 = _a.uid;
        if (!name)
            throw new Error("No name in data");
        if (!uid_2)
            throw new Error("No uid in data");
        var user = players.find(function (user) { return user.uid === uid_2; });
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
