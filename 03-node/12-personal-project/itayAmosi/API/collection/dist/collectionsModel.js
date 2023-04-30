"use strict";
exports.__esModule = true;
exports.collectionsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.collectionsSchema = new mongoose_1.Schema({
    src: String,
    name: String,
    price: String,
    descriptions: String
});
var CollectionModel = mongoose_1["default"].model("collections", exports.collectionsSchema);
exports["default"] = CollectionModel;
