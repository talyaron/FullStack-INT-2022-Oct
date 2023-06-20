"use strict";
exports.__esModule = true;
exports.CartSchema = void 0;
var mongoose_1 = require("mongoose");
exports.CartSchema = new mongoose_1.Schema({
    userId: String,
    productIds: { required: true, type: [String], "default": [] }
});
var CartModel = mongoose_1["default"].model("carts", exports.CartSchema);
exports["default"] = CartModel;
