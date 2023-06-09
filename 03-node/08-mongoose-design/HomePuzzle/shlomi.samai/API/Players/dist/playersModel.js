"use strict";
exports.__esModule = true;
exports.PlayerSchema = void 0;
var mongoose_1 = require("mongoose");
//schema
exports.PlayerSchema = new mongoose_1.Schema({
    name: String,
    src: String
});
var PlayerModel = mongoose_1["default"].model("players", exports.PlayerSchema);
exports["default"] = PlayerModel;
