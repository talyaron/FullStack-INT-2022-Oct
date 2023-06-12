"use strict";
exports.__esModule = true;
exports.BalloonSchema = void 0;
var mongoose_1 = require("mongoose");
exports.BalloonSchema = new mongoose_1.Schema({
    name: String,
    src: {
        type: String,
        require: true
    },
    score: {
        type: Number,
        "default": 0
    }
});
var BalloonModel = mongoose_1["default"].model("balloons", exports.BalloonSchema);
exports["default"] = BalloonModel;
