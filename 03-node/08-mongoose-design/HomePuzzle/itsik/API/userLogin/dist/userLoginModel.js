"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userLoginSchema = new mongoose_1.Schema({
    name: String,
    password: Number
});
var userRegister = mongoose_1["default"].model("userLogin", userLoginSchema);
exports["default"] = userRegister;
