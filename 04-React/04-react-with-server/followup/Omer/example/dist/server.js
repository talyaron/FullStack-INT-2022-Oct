"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
//static file
app.use(express_1["default"].static('./client'));
var user1 = { name: "Omer", age: 25 };
var user2 = { name: "Guy", age: 22 };
var user3 = { name: "Ben", age: 28 };
var users = [user1, user2, user3];
app.get("/api/get-users", function (req, res) {
    try {
        res.status(200).send(users);
    }
    catch (error) {
        res.status(500).send({ error: error });
    }
});
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
