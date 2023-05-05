"use strict";
exports.__esModule = true;
exports.UserProductSchema = void 0;
var mongoose_1 = require("mongoose");
var productModel_1 = require("../product/productModel");
exports.UserProductSchema = new mongoose_1.Schema({
    userName: String,
    userId: String,
    productId: String,
    product: productModel_1.productSchema
});
var UserProductModel = mongoose_1["default"].model("user-product", exports.UserProductSchema);
exports["default"] = UserProductModel;
