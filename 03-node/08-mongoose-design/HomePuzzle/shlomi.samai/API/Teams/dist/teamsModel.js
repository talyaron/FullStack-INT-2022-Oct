"use strict";
exports.__esModule = true;
exports.teamsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.teamsSchema = new mongoose_1.Schema({
    pastTeamsName: String,
    src: String
});
var teamsModel = mongoose_1["default"].model("teams", exports.teamsSchema);
exports["default"] = teamsModel;
