"use strict";
exports.__esModule = true;
exports.productSchema = void 0;
var mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.Schema({
    src: String,
    name: String,
    price: String,
    description: String
});
var ProductModel = mongoose_1["default"].model("collections", exports.productSchema);
exports["default"] = ProductModel;
