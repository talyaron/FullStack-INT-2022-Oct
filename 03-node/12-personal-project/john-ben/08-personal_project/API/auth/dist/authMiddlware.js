"use strict";
exports.__esModule = true;
exports.isConnected = void 0;
var jwt_simple_1 = require("jwt-simple");
exports.isConnected = function (req, res, next) {
    try {
        var user = req.cookies.user;
        var secret = process.env.JWT_SECRET;
        if (!secret)
            throw new Error("Missing jwt secret");
        var _a = jwt_simple_1["default"].decode(user, secret), userId = _a.userId, username = _a.username;
        req.user = { userId: userId, username: username };
        next();
    }
    catch (err) {
        res.status(401).send({
            message: "Unauthorized"
        });
    }
};
