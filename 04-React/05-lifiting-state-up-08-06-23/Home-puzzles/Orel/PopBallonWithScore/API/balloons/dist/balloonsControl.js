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
exports.resetScores = exports.getScoreByIdAndUpdateByOne = exports.createBalloon = exports.getBalloons = void 0;
var balloonsModel_1 = require("./balloonsModel");
exports.getBalloons = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var balloons, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, balloonsModel_1["default"].find({})];
            case 1:
                balloons = _a.sent();
                if (!balloons)
                    return [2 /*return*/, res.status(401)];
                res.status(201).send({ ok: true, balloons: balloons });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).send({ ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createBalloon = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, src, newBalloon, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, src = _a.src;
                if (!name)
                    throw new Error("no found name");
                if (!src)
                    throw new Error("no found src");
                console.log(name, src);
                return [4 /*yield*/, balloonsModel_1["default"].create({ name: name, src: src })];
            case 1:
                newBalloon = _b.sent();
                if (!newBalloon)
                    return [2 /*return*/, res.status(401)];
                res.status(201).send({ ok: true, newBalloon: newBalloon });
                console.log(newBalloon);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).send({ ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getScoreByIdAndUpdateByOne = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, balloon, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.body.id;
                if (!id)
                    throw new Error("No balloon id");
                return [4 /*yield*/, balloonsModel_1["default"].findByIdAndUpdate(id, { $inc: { score: 1 } }, { "new": true })];
            case 1:
                balloon = _a.sent();
                if (!balloon)
                    throw new Error("No balloon found with this id in the DB");
                res.status(200).send({ ok: true, scoreNow: balloon.score });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send({ ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.resetScores = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var balloons, updatePromises, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, balloonsModel_1["default"].find({})];
            case 1:
                balloons = _a.sent();
                if (!balloons || balloons.length === 0) {
                    throw new Error("No balloons found");
                }
                console.log(balloons);
                updatePromises = balloons.map(function (balloon) { return __awaiter(void 0, void 0, void 0, function () {
                    var _id, updatedBalloon;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _id = balloon._id;
                                console.log(_id);
                                return [4 /*yield*/, balloonsModel_1["default"].findByIdAndUpdate(_id, { score: 0 })];
                            case 1:
                                updatedBalloon = _a.sent();
                                return [2 /*return*/, updatedBalloon];
                        }
                    });
                }); });
                return [4 /*yield*/, Promise.all(updatePromises)];
            case 2:
                _a.sent();
                res.status(200).send({ ok: true, message: "Reset succeeded" });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.error(error_4);
                res.status(500).send({ ok: false });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
