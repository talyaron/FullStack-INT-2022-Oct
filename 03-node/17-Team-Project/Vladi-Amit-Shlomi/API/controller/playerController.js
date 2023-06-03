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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlayer = exports.deleteAllPlayers = exports.getAllPlayersInGame = exports.createPlayer = exports.getAllPlayers = void 0;
const playerModel_1 = __importDefault(require("../model/playerModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const gameModel_1 = __importDefault(require("../model/gameModel"));
const secret = process.env.JWT_SECRET;
const getAllPlayers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const players = yield playerModel_1.default.find({});
        res.status(200).json({ players });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: "error.message" });
    }
});
exports.getAllPlayers = getAllPlayers;
const createPlayer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, hand, _id, active } = req.body;
        const player = yield playerModel_1.default.create({ name, hand, _id, active });
        res.status(200).json({ player });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.createPlayer = createPlayer;
const getAllPlayersInGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gamdId } = req.cookies;
        if (!secret)
            throw new Error("No secret");
        if (!gamdId)
            throw new Error("No player found");
        const decodedGamdId = jwt_simple_1.default.decode(gamdId, secret);
        const game = yield gameModel_1.default.findById(decodedGamdId).populate("players");
        if (!game)
            return;
        const players = [game.players];
        res.send({ players });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: "error.message" });
    }
});
exports.getAllPlayersInGame = getAllPlayersInGame;
const deleteAllPlayers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedPlayers = yield playerModel_1.default.deleteMany({});
        res.status(200).send({ deletedPlayers });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.deleteAllPlayers = deleteAllPlayers;
const updatePlayer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { playerId, hand, active } = req.body;
        yield playerModel_1.default.findByIdAndUpdate(playerId, { hand, active });
        const findPlayer = yield playerModel_1.default.findById(playerId);
        res.status(200).send({ findPlayer });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.updatePlayer = updatePlayer;
