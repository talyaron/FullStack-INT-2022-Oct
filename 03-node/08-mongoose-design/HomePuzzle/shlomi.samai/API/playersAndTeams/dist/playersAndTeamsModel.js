"use strict";
exports.__esModule = true;
exports.playerTeamModel = exports.playerTeamShema = void 0;
var mongoose_1 = require("mongoose");
var playersModel_1 = require("../Players/playersModel");
var teamsModel_1 = require("../Teams/teamsModel");
exports.playerTeamShema = new mongoose_1.Schema({
    team: teamsModel_1.TeamSchema,
    player: playersModel_1.PlayerSchema
});
exports.playerTeamModel = mongoose_1["default"].model("player-team", exports.playerTeamShema);
