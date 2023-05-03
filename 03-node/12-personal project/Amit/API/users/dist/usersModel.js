"use strict";
exports.__esModule = true;
exports.UserSeatModel = exports.UserMovieModel = exports.UserSeatSchema = exports.UserMovieSchema = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
var moviesModel_1 = require("../movies/moviesModel");
var seatsModel_1 = require("../seats/seatsModel");
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    password: String,
    loggedIn: Boolean
});
exports.UserMovieSchema = new mongoose_1.Schema({
    user: exports.UserSchema,
    movie: moviesModel_1.MovieSchema
});
exports.UserSeatSchema = new mongoose_1.Schema({
    user: exports.UserSchema,
    seat: seatsModel_1.SeatSchema
});
var UserModel = mongoose_1["default"].model("users", exports.UserSchema);
exports["default"] = UserModel;
exports.UserMovieModel = mongoose_1["default"].model("user-movies", exports.UserMovieSchema);
exports.UserSeatModel = mongoose_1["default"].model("user-seats", exports.UserSeatSchema);
// User(m:m)Movie
// User(1:m)Seat
// Movie(1:m)Seat 
