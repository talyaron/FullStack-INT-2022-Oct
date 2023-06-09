"use strict";
exports.__esModule = true;
exports.CartModel = exports.CartItemSchema = exports.CartSchema = void 0;
var mongoose_1 = require("mongoose");
var starshipModel_1 = require("./starshipModel");
exports.CartSchema = new mongoose_1.Schema({
    user: { type: String, required: true }
});
exports.CartItemSchema = new mongoose_1.Schema({
    product: starshipModel_1.starshipSchema,
    quantity: { type: Number, "default": 1 },
    cart: exports.CartSchema
});
exports.CartModel = mongoose_1.model("Cart", exports.CartItemSchema);
