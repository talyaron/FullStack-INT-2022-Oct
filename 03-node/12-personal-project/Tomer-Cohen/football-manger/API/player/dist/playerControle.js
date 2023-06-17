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
exports.getPlayer = exports.updatePlayerType = exports.deletePlayer = exports.addPlayer = exports.getPlayers = void 0;
var playerModel_1 = require("./playerModel");
var jwt_simple_1 = require("jwt-simple");
var mongoose_1 = require("mongoose");
var secret = process.env.JWT_SECRET;
exports.getPlayers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Players, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, playerModel_1["default"].find({})];
            case 1:
                Players = _a.sent();
                res.send({ Players: Players });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).send({ Error: mongoose_1.Error.Messages });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addPlayer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, position, positionType, playerDB, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, userName = _a.userName, position = _a.position, positionType = _a.positionType;
                console.log(userName, position, positionType);
                return [4 /*yield*/, playerModel_1["default"].create({ userName: userName, position: position, positionType: positionType })];
            case 1:
                playerDB = _b.sent();
                console.log(playerDB);
                res.status(201).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).send({ Error: mongoose_1.Error.Messages });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deletePlayer = function (res, req) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, deleteplayer, Players, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.body._id;
                return [4 /*yield*/, playerModel_1["default"].deleteOne({ _id: _id })];
            case 1:
                deleteplayer = _a.sent();
                return [4 /*yield*/, playerModel_1["default"].find({})];
            case 2:
                Players = _a.sent();
                res.status(201).send({ ok: true });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send({ Error: mongoose_1.Error.Messages });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updatePlayerType = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, playerId, PositionType, playerDB, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, playerId = _a.playerId, PositionType = _a.PositionType;
                return [4 /*yield*/, playerModel_1["default"].updateOne({ PositionType: PositionType })];
            case 1:
                playerDB = _b.sent();
                res.status(201).send({ ok: true, playerDB: playerDB });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                console.error(error_4);
                res.status(500).send({ Error: mongoose_1.Error.Messages });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getPlayer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var player, decoded, playerId, role, playerDB, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                player = req.cookies.player;
                console.log(player);
                if (!secret)
                    throw new mongoose_1.Error("No secret");
                decoded = jwt_simple_1["default"].decode(player, secret);
                console.log(decoded);
                playerId = decoded.playerId, role = decoded.role;
                if (role === "admin")
                    console.log("Full access");
                return [4 /*yield*/, playerModel_1["default"].findById(playerId)];
            case 1:
                playerDB = _a.sent();
                res.send({ ok: true, player: playerDB });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error(error_5);
                res.status(500).send({ Error: mongoose_1.Error.Messages });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
