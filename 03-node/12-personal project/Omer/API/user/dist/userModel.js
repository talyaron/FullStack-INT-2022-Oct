"use strict";
exports.__esModule = true;
exports.logInSchema = void 0;
var mongoose_1 = require("mongoose");
exports.logInSchema = new mongoose_1.Schema({
    name: String,
    password: String,
    products: [String]
});
var logInModel = mongoose_1["default"].model("log-in", exports.logInSchema);
exports["default"] = logInModel;
