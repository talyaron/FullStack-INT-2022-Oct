"use strict";
exports.__esModule = true;
exports.ScoreModel = exports.ScoreSchema = void 0;
var mongoose_1 = require("mongoose");
;
exports.ScoreSchema = new mongoose_1.Schema({
    userId: String,
    playerName: String,
    score: Number,
    competitionPlace: Number
});
exports.ScoreModel = mongoose_1["default"].model("score", exports.ScoreSchema);
exports["default"] = exports.ScoreModel;
