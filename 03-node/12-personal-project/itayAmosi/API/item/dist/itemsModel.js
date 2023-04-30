"use strict";
exports.__esModule = true;
exports.ItemsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ItemsSchema = new mongoose_1.Schema({
    src: String,
    name: String,
    price: String,
    descriptions: String
});
var ItemsModel = mongoose_1["default"].model("Items", exports.ItemsSchema);
exports["default"] = ItemsModel;
