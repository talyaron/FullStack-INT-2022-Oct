"use strict";
exports.__esModule = true;
exports.UserSchema = exports.ROLE = void 0;
var mongoose_1 = require("mongoose");
var ROLE;
(function (ROLE) {
    ROLE["PUBLIC"] = "public";
    ROLE["ADMIN"] = "admin";
})(ROLE = exports.ROLE || (exports.ROLE = {}));
exports.UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    highScore: {
        type: Number,
        require: false,
        "default": 0
    },
    gamesPlayed: {
        type: Number,
        require: false,
        "default": 0
    },
    resolution: {
        type: Number,
        require: true,
        "default": 1
    },
    ROLE: {
        type: String,
        "enum": ROLE,
        "default": ROLE.PUBLIC
    },
    src: String
});
var UserModel = mongoose_1["default"].model("users", exports.UserSchema);
exports["default"] = UserModel;
