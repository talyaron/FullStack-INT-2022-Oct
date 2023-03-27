"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuid_1 = require("uuid");
var app = express_1["default"]();
app.use(express_1["default"].static("./public"));
var Joke = /** @class */ (function () {
    function Joke(titel, subtext) {
        this.titel = titel;
        this.subtext = subtext;
        this.uid = uuid_1.v4();
    }
    return Joke;
}());
var jokes = [
    new Joke("Son of a programmer", "son asks his programmer father son: Dad, why does the sun rise in the east and set in the west? Father: If it works, don't touch it"),
    new Joke("nak nak joke", 'Knock knock!.who is there?. The stay is very long…. JAVA.'),
    new Joke("Question", "How many Microsoft programmers does it take to change a light bulb? Answer: Not one. They will make darkness the standard and force everyone to work according to it."),
    new Joke("lights bulb", "How many developers do you need to change a bulb, none of this is a hardware problem"),
];
app.get("/random-joke", function (req, res) {
    // res.send({randomjokes: Math.floor(Math.random()*16777215).toString(16)});
});
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
