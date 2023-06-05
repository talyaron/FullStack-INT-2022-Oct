"use strict";
exports.__esModule = true;
exports.CartModel = exports.CartSchema = exports.CartStatus = void 0;
var mongoose_1 = require("mongoose");
var CartStatus;
(function (CartStatus) {
    CartStatus["Open"] = "open";
    CartStatus["Closed"] = "closed";
})(CartStatus = exports.CartStatus || (exports.CartStatus = {}));
exports.CartSchema = new mongoose_1.Schema({
    userId: String,
    productIds: { required: true, type: [String], "default": [] },
    status: { require: true, "enum": CartStatus, type: String, "default": CartStatus.Open }
});
exports.CartModel = mongoose_1["default"].model("carts", exports.CartSchema);