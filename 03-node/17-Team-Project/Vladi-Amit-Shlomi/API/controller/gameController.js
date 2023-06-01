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
exports.deleteGameAndAllRelatedToIt = exports.updateGame = exports.deleteAllGames = exports.createGame = exports.getUserGames = exports.getGame = exports.removeGameCookie = exports.saveGameCookie = exports.getAllGames = void 0;
const gameModel_1 = __importDefault(require("../model/gameModel"));
const playerModel_1 = __importDefault(require("../model/playerModel"));
const boardModel_1 = __importDefault(require("../model/boardModel"));
const deckModel_1 = __importDefault(require("../model/deckModel"));
const userModel_1 = __importDefault(require("../model/userModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const secret = process.env.JWT_SECRET;
const getAllGames = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield gameModel_1.default.find({});
        res.status(200).json({ games });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllGames = getAllGames;
const saveGameCookie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gameId } = req.body;
        if (!gameId)
            throw new Error("gameId not found");
        if (!secret)
            throw new Error("Missing jwt secret");
        const token = jwt_simple_1.default.encode(gameId, secret);
        res.cookie("gameId", token, {
            maxAge: 60 * 60 * 1000,
            httpOnly: true,
        });
        res.status(200).json({ ok: true });
    }
    catch (error) {
        console.error(error);
    }
});
exports.saveGameCookie = saveGameCookie;
const removeGameCookie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie("gameId");
        res.status(200).json({ ok: true });
    }
    catch (error) {
        console.error(error);
    }
});
exports.removeGameCookie = removeGameCookie;
const getGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gameId } = req.cookies;
        if (!secret)
            throw new Error("No secret");
        if (!gameId)
            throw new Error("No user found");
        const decodedGameId = jwt_simple_1.default.decode(gameId, secret);
        const game = yield gameModel_1.default.findById(decodedGameId).populate("user players board deck");
        res.status(200).json({ game });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getGame = getGame;
const getUserGames = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.cookies;
        if (!secret)
            throw new Error("No secret");
        if (!userId)
            throw new Error("No user found");
        const decoded = jwt_simple_1.default.decode(userId, secret);
        const user = yield userModel_1.default.findById(decoded);
        const games = yield gameModel_1.default.find({ user: decoded }).populate("user players board deck");
        res.status(200).json({ games });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getUserGames = getUserGames;
const createGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, players, boardId, deckId } = req.body;
        const user = yield userModel_1.default.findById(userId);
        if (!user)
            return "User not found";
        const game = yield gameModel_1.default.create({
            user: userId,
            players: [...players],
            board: boardId,
            deck: deckId,
        });
        res.send({ ok: true, gameId: game._id });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: "error.message" });
    }
});
exports.createGame = createGame;
const deleteAllGames = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedGames = yield gameModel_1.default.deleteMany({});
        res.status(200).send({ deletedGames });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.deleteAllGames = deleteAllGames;
const updateGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gameId, hand } = req.body;
        yield gameModel_1.default.findByIdAndUpdate(gameId, { hand });
        const findGame = yield gameModel_1.default.findById(gameId);
        res.status(200).send({ findGame });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.updateGame = updateGame;
const deleteGameAndAllRelatedToIt = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gameId } = req.cookies;
        if (!secret)
            throw new Error("No secret");
        if (!gameId)
            throw new Error("No gameId found");
        const decoded = jwt_simple_1.default.decode(gameId, secret);
        const game = yield gameModel_1.default.findById(decoded);
        if (!game)
            return;
        game.players.forEach((player) => __awaiter(void 0, void 0, void 0, function* () { return yield playerModel_1.default.findByIdAndDelete(player); }));
        yield boardModel_1.default.findByIdAndDelete(game.board);
        yield deckModel_1.default.findByIdAndDelete(game.deck);
        const deleteGame = yield gameModel_1.default.findByIdAndDelete(decoded);
        res.status(200).send({ deleteGame });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.deleteGameAndAllRelatedToIt = deleteGameAndAllRelatedToIt;
