"use strict";
exports.__esModule = true;
exports.OrderSchema = void 0;
var mongoose_1 = require("mongoose");
exports.OrderSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    product: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        "default": 1
    },
    createdAt: {
        type: Date,
        "default": Date.now
    },
    updatedAt: {
        type: Date,
        "default": Date.now
    }
});
var OrderModel = mongoose_1["default"].model("orders", exports.OrderSchema);
exports["default"] = OrderModel;
