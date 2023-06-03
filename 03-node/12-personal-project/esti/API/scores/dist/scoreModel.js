"use strict";
exports.__esModule = true;
exports.ScoreModel = exports.ScoreSchema = void 0;
var mongoose_1 = require("mongoose");
var userModel_1 = require("../users/userModel");
;
exports.ScoreSchema = new mongoose_1.Schema({
    user: userModel_1.UserSchema,
    score: Number,
    competitionPlace: Number
});
exports.ScoreModel = mongoose_1["default"].model("score", exports.ScoreSchema);
exports["default"] = exports.ScoreModel;
