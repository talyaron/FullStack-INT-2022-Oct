"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].json());
//todo
var users = new Map();
users.set("1", "1");
app.post('/login', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (users.has(username) && users.get(username) === password) {
        res.json({ success: true });
    }
    else {
        res.json({ success: false });
    }
});
app.use(express_1["default"].static("./public"));
app.listen(3001, function () {
    console.log("server listen on port 3001");
});
