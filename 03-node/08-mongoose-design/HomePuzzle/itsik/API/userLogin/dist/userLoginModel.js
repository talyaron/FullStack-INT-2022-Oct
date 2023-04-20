"use strict";
exports.__esModule = true;
exports.userLoginSchema = void 0;
var mongoose_1 = require("mongoose");
exports.userLoginSchema = new mongoose_1.Schema({
    name: String,
    password: String,
    email: String
});
var userRegister = mongoose_1["default"].model("userlogins", exports.userLoginSchema);
exports["default"] = userRegister;
