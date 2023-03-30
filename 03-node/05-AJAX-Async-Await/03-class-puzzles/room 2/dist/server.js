"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var app = express_1["default"]();
var PORT = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static("public"));
var Joke = /** @class */ (function () {
    function Joke(joke) {
        this.joke = joke;
        this.uid = uuidv4_1.uuid();
    }
    return Joke;
}());
var jokes = [];
jokes.push(new Joke("Why don't scientists trust atoms? Because they make up everything."));
jokes.push(new Joke("Why did the tomato turn red? Because it saw the salad dressing!."));
jokes.push(new Joke("Why did the coffee file a police report? It got mugged."));
jokes.push(new Joke("Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels."));
jokes.push(new Joke("What do you call an alligator wearing a vest? An investigator."));
jokes.push(new Joke("Why don't scientists trust atoms? Because they make up everything."));
app.get('/api/jokes', function (req, res) {
    try {
        res.status(200).send({ succuss: true, jokes: jokes });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(PORT, function () {
    console.log("the server on PORT :" + PORT);
});
