"use strict";
exports.__esModule = true;
exports.OrderSchema = void 0;
var mongoose_1 = require("mongoose");
var moviesModel_1 = require("../movies/moviesModel");
var usersModel_1 = require("../users/usersModel");
exports.OrderSchema = new mongoose_1.Schema({
    user: usersModel_1.UserSchema,
    seatsInMovie: [moviesModel_1.MovieSeatSchema]
});
var OrderModel = mongoose_1["default"].model("orders", exports.OrderSchema);
exports["default"] = OrderModel;
