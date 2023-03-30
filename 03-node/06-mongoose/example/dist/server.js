"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("DB connected!");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No URI to DB");
}
//to be able to get data from client add this line
app.use(express_1["default"].json());
//connect to DB;
var users = [];
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
        // const { name, src } = req.body;
        // console.log(name, src);
        // users.push(new User(name, src));
        // res.status(201).send({ ok: true });
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
        // const { name, uid } = req.body;
        // if (!name) throw new Error("No name in data");
        // if (!uid) throw new Error("No uid in data");
        // const user = users.find((user) => user.uid === uid);
        // if (!user) throw new Error("No user in array");
        // user.name = name;
        // res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
app["delete"]("/api/delete-user", function (req, res) {
    try {
        // const { uid } = req.body;
        // if (!uid) throw new Error("no uid in data");
        // const index = users.findIndex((user) => user.uid === uid);
        // if (index === -1)
        //   throw new Error(`couldnt find user in users, with ID ${uid}`);
        // users.splice(index, 1);
        // const _users = users.map((user) => user.getSimpleUser());
        // res.send({ ok: true, users: _users });
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
