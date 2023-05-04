"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getMovieSeats = exports.getPickedSeats = exports.pickOneSeat = exports.getSeats = void 0;
var moviesModel_1 = require("../movies/moviesModel");
var seatsModel_1 = require("./seatsModel");
exports.getSeats = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var seats, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, seatsModel_1["default"].find({})];
            case 1:
                seats = _a.sent();
                res.send({ seats: seats });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.pickOneSeat = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, seat, movie, seatDB, movieSeat, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, seat = _a.seat, movie = _a.movie;
                return [4 /*yield*/, seatsModel_1["default"].findOne({ rowNumber: seat.rowNumber, seatNumber: seat.seatNumber })];
            case 1:
                seatDB = _b.sent();
                if (!seatDB)
                    throw new Error("seat DB not found");
                return [4 /*yield*/, moviesModel_1.MovieSeatModel.findOne({ movie: movie, seat: seatDB })];
            case 2:
                movieSeat = _b.sent();
                if (!movieSeat)
                    throw new Error("movie seat DB not found");
                if (movieSeat.seatStatus === "free") {
                    movieSeat.seatStatus = "picked";
                }
                else if (movieSeat.seatStatus === "picked") {
                    movieSeat.seatStatus = "free";
                }
                movieSeat.save();
                res.send({ movieSeat: movieSeat });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getPickedSeats = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movieSeats, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, moviesModel_1.MovieSeatModel.find({ seatStatus: "picked" })];
            case 1:
                movieSeats = _a.sent();
                if (!movieSeats)
                    throw new Error("movie seats not found");
                movieSeats.map(function (movieSeat) {
                    movieSeat.seatStatus = "taken";
                    movieSeat.save();
                });
                res.send({ movieSeats: movieSeats });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getMovieSeats = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movie, movieSeats, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                movie = req.body.movie;
                if (!movie)
                    throw new Error("movie not found");
                return [4 /*yield*/, moviesModel_1.MovieSeatModel.find({ movie: movie })];
            case 1:
                movieSeats = _a.sent();
                if (!movieSeats)
                    throw new Error("movie seats not found");
                res.send({ movieSeats: movieSeats });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error(error_4);
                res.status(500).send({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
