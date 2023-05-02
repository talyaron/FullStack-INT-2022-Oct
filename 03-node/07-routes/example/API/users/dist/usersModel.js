"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: String,
    src: String
});
var UserModel = mongoose_1["default"].model("users", UserSchema);
exports["default"] = UserModel;
