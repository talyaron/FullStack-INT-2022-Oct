"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var app = express_1["default"]();
//to be able to get data from client add this line
app.use(express_1["default"].json());
//data
var User = /** @class */ (function () {
    function User(name, src) {
        this.name = name;
        this.src = src;
        this.uid = uuidv4_1.uuid();
    }
    return User;
}());
var users = [
    new User("Moshe", "https://www.kipa.co.il/userFiles/296342_46e5aff9328a26cb3257ce4f81a1abd3.jpg"),
    new User("Aharon", "https://www.daat.ac.il/encyclopedia/images/aharon.jpg"),
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
        var _a = req.body, name = _a.name, src = _a.src;
        console.log(name, src);
        users.push(new User(name, src));
        res.status(201).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
//update
//update whole entity
app.put("/api/update-user", function (req, res) {
    try {
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
// transodrm enetiy
app.patch("/api/update-user-name", function (req, res) {
    try {
        var _a = req.body, name = _a.name, uid_1 = _a.uid;
        if (!name)
            throw new Error("No name in data");
        if (!uid_1)
            throw new Error("No uid in data");
        var user = users.find(function (user) { return user.uid === uid_1; });
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
app["delete"]('/api/delete-user', function (req, res) {
    try {
        var uid_2 = req.body.uid;
        if (!uid_2)
            throw new Error("no uid in data");
        var index = users.findIndex(function (user) { return user.uid === uid_2; });
        if (index === -1)
            throw new Error("couldn find user in users, with ID " + uid_2);
        users.splice(index, 1);
        res.status(204).send({ ok: true, users: users });
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
