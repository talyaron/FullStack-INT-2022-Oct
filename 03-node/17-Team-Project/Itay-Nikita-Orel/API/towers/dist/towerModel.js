"use strict";
exports.__esModule = true;
exports.TowerSchema = void 0;
var mongoose_1 = require("mongoose");
// Define interface for Tower document with Mongoose document methods
// Define Mongoose schema for Tower document
exports.TowerSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    damage: { type: Number, required: true },
    radius: { type: Number, required: true },
    cost: { type: Number, required: true },
    level: { type: Number, required: true }
});
var TowerModel = mongoose_1["default"].model("tower", exports.TowerSchema);
exports["default"] = TowerModel;
