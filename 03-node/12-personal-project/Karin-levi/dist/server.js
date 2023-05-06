"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.use(express_1["default"].json());
//todo
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var users = [];
app.post('/login', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (username === 'myusername' && password === 'mypassword') {
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
