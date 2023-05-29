"use strict";
exports.__esModule = true;
exports.EnemySchema = void 0;
var mongoose_1 = require("mongoose");
exports.EnemySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    health: { type: Number, required: true }
});
var EnemyModel = mongoose_1["default"].model("enemies", exports.EnemySchema);
exports["default"] = EnemyModel;
