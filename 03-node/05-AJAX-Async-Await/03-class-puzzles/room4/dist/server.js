"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var app = express_1["default"]();
//to be able to get data from client add this line
app.use(express_1["default"].json());
var Jokes = /** @class */ (function () {
    function Jokes(name, jokes) {
        this.name = name;
        this.jokes = jokes;
        this.uid = uuidv4_1.uuid();
    }
    return Jokes;
}());
var jokes = [
    new Jokes("Joke#1", "Why do bananas have to put on sunscreen before they go to the beach? Because they might peel!"),
    new Jokes("Joke#2", "My boss told me to have a good day. So I went home."),
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
app.use(express_1["default"].static('./public'));
app.listen(3001, function () {
    console.log("server listen on port 3000");
});
