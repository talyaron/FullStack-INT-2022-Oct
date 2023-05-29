"use strict";
exports.__esModule = true;
exports.productSchema = void 0;
var mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.Schema({
    name: String,
    type: String,
    price: Number,
    img: String
});
var productModel = mongoose_1["default"].model("product", exports.productSchema);
exports["default"] = productModel;
