"use strict";
exports.__esModule = true;
exports.ProductSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.Schema({
    name: String,
    descreption: String,
    price: String,
    imgUrl: String
});
var ProductModel = mongoose_1["default"].model("products", exports.ProductSchema);
exports["default"] = ProductModel;
