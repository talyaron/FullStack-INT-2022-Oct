"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
//todo : render unique username
var UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });
var UserModel = mongoose_1["default"].model("users", UserSchema);
exports["default"] = UserModel;
