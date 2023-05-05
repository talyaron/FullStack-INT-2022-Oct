"use strict";
exports.__esModule = true;
exports.ProductSchema = exports.ProductType = void 0;
var mongoose_1 = require("mongoose");
var ProductType;
(function (ProductType) {
    ProductType["SHOES"] = "shoes";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
exports.ProductSchema = new mongoose_1.Schema({
    src: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    detail: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    productType: {
        type: String,
        "enum": ProductType,
        "default": ProductType.SHOES
    }
});
var ProductModel = mongoose_1["default"].model("products", exports.ProductSchema);
exports["default"] = ProductModel;
