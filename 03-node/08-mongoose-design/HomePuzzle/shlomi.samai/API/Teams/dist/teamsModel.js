"use strict";
exports.__esModule = true;
exports.TeamSchema = void 0;
var mongoose_1 = require("mongoose");
//schema
exports.TeamSchema = new mongoose_1.Schema({
    name: String,
    src: String
});
var TeamModel = mongoose_1["default"].model("teams", exports.TeamSchema);
exports["default"] = TeamModel;
