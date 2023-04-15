"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var teamsModel_1 = require("../Teams/teamsModel");
//schema
var PlayerSchema = new mongoose_1.Schema({
    name: String,
    src: String,
    pastTeams: [teamsModel_1.teamsSchema]
});
var PlayerModel = mongoose_1["default"].model("players", PlayerSchema);
exports["default"] = PlayerModel;
