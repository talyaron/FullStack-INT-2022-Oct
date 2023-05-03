"use strict";
exports.__esModule = true;
exports.MovieSeatModel = exports.MovieSeatSchema = exports.UserType = exports.MovieSchema = void 0;
var mongoose_1 = require("mongoose");
var seatsModel_1 = require("../seats/seatsModel");
exports.MovieSchema = new mongoose_1.Schema({
    name: String
});
var UserType;
(function (UserType) {
    UserType["FREE"] = "free";
    UserType["TAKEN"] = "taken";
    UserType["PICKED"] = "picked";
})(UserType = exports.UserType || (exports.UserType = {}));
exports.MovieSeatSchema = new mongoose_1.Schema({
    movie: exports.MovieSchema,
    seat: seatsModel_1.SeatSchema,
    seatStatus: {
        type: String,
        "enum": UserType,
        "default": UserType.FREE
    }
});
var MovieModel = mongoose_1["default"].model("movies", exports.MovieSchema);
exports["default"] = MovieModel;
exports.MovieSeatModel = mongoose_1["default"].model("movie-seat", exports.MovieSeatSchema);
