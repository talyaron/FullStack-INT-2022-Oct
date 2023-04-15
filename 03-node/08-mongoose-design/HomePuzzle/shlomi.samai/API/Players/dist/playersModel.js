"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
//schema
var PlayerSchema = new mongoose_1.Schema({
    name: String,
    src: String
});
var PlayerModel = mongoose_1["default"].model("players", PlayerSchema);
exports["default"] = PlayerModel;
