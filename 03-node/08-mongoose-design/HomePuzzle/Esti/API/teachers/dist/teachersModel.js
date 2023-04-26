"use strict";
exports.__esModule = true;
exports.TeachersSchema = void 0;
var mongoose_1 = require("mongoose");
exports.TeachersSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String
});
var TeachersModel = mongoose_1["default"].model("teachers", exports.TeachersSchema);
exports["default"] = TeachersModel;
