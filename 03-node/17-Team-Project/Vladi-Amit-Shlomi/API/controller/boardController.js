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
exports.getBoardInGame = exports.deleteAllBoards = exports.updateBoard = exports.createBoard = exports.getAllBoards = void 0;
const boardModel_1 = __importDefault(require("../model/boardModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const gameModel_1 = __importDefault(require("../model/gameModel"));
const secret = process.env.JWT_SECRET;
const getAllBoards = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const boards = yield boardModel_1.default.find({});
        res.status(200).json({ boards });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllBoards = getAllBoards;
const createBoard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tileArr, _id } = req.body;
        const board = yield boardModel_1.default.create({ tileArr, _id });
        res.send({ ok: true, board });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: "error.message" });
    }
});
exports.createBoard = createBoard;
const updateBoard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { boardId, tileArr } = req.body;
        yield boardModel_1.default.findByIdAndUpdate(boardId, { tileArr });
        const board = yield boardModel_1.default.findById(boardId);
        res.status(200).json({ board });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.updateBoard = updateBoard;
const deleteAllBoards = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBoards = yield boardModel_1.default.deleteMany({});
        res.status(200).send({ deletedBoards });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.deleteAllBoards = deleteAllBoards;
const getBoardInGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gamdId } = req.cookies;
        if (!secret)
            throw new Error("No secret");
        if (!gamdId)
            throw new Error("No player found");
        const decodedGamdId = jwt_simple_1.default.decode(gamdId, secret);
        const game = yield gameModel_1.default.findById(decodedGamdId).populate("board");
        if (!game)
            return;
        const board = game.board;
        res.send({ board });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.getBoardInGame = getBoardInGame;
