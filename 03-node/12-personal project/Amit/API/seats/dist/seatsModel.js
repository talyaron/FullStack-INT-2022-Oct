"use strict";
exports.__esModule = true;
exports.SeatSchema = void 0;
var mongoose_1 = require("mongoose");
exports.SeatSchema = new mongoose_1.Schema({
    rowNumber: String,
    seatNumber: String
});
var SeatModel = mongoose_1["default"].model("seats", exports.SeatSchema);
exports["default"] = SeatModel;
