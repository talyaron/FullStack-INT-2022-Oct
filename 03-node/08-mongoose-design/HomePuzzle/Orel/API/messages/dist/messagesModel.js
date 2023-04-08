"use strict";
exports.__esModule = true;
exports.MessageSchema = void 0;
var mongoose_1 = require("mongoose");
var coursesModel_1 = require("../courses/coursesModel");
exports.MessageSchema = new mongoose_1.Schema({
    text: String,
    sender: String,
    course: [coursesModel_1["default"]]
});
var MessageModel = mongoose_1["default"].model("message", exports.MessageSchema);
exports["default"] = MessageModel;
