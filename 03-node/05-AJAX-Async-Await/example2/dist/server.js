"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
//to be able to get data from client add this line
app.use(express_1["default"].json());
var users = [
    {
        name: "Moshe",
        src: "https://www.kipa.co.il/userFiles/296342_46e5aff9328a26cb3257ce4f81a1abd3.jpg"
    },
    {
        name: "Aharon",
        src: "https://www.daat.ac.il/encyclopedia/images/aharon.jpg"
    },
];
//data route
//get (from server)
app.get("/api/get-users", function (req, res) {
    try {
        res.send({ users: users });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//add
app.post("/api/add-user", function (req, res) {
    try {
        var data = req.body;
        console.log(data);
        users.push(data);
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//static file
app.use(express_1["default"].static("./client"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
