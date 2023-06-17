"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var gameSchema = new mongoose_1.Schema({
    Games: String,
    day: String
});
var GameModel = mongoose_1["default"].model("game", gameSchema);
exports["default"] = GameModel;
