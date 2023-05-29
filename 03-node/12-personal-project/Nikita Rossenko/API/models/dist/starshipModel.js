"use strict";
exports.__esModule = true;
exports.StarshipModel = exports.starshipSchema = void 0;
var mongoose_1 = require("mongoose");
exports.starshipSchema = new mongoose_1.Schema({
    starshipName: String,
    starshipModel: String,
    starshipDescription: String,
    starshipPrice: Number,
    itemType: { type: String, "default": "starship" }
});
exports.StarshipModel = mongoose_1.model("Items", exports.starshipSchema);
exports["default"] = exports.StarshipModel;
