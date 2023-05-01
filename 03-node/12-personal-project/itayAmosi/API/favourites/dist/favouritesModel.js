"use strict";
exports.__esModule = true;
exports.FavouriteSchema = void 0;
var mongoose_1 = require("mongoose");
exports.FavouriteSchema = new mongoose_1.Schema({
    src: String,
    name: String,
    price: String
});
var FavouriteModel = mongoose_1["default"].model("favourites", exports.FavouriteSchema);
exports["default"] = FavouriteModel;
