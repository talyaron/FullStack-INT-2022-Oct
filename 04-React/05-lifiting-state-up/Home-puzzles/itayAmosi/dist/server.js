"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var dotenv = require("dotenv");
dotenv.config();
app.use(express_1["default"].json());
var mongoose_1 = require("mongoose");
require('dotenv').config();
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
// app.post("/api/add-user", async (req, res) => {
//   try {
//    const {username, password} = req.body;
//    console.log(username, password)
//    //register
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(password, salt);
//     console.log(hash);
//     //login
//     const isOriginalPasssword = bcrypt.compareSync(password, hash); // true
//     console.log("is it the user password? password:",isOriginalPasssword)
//     res.status(201).send({ ok: true, login:isOriginalPasssword });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
var playersRouter_1 = require("./API/players/playersRouter");
app.use('/api/players', playersRouter_1["default"]);
//static file
app.use(express_1["default"].static("./client"));
app.listen(3000, function () {
    console.log("server listen on port 3000");
});
