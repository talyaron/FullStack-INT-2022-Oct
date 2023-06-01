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
exports.getDeckInGame = exports.deleteAllDecks = exports.updateDeck = exports.createDeck = exports.getAllDecks = void 0;
const deckModel_1 = __importDefault(require("../model/deckModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const gameModel_1 = __importDefault(require("../model/gameModel"));
const secret = process.env.JWT_SECRET;
const getAllDecks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decks = yield deckModel_1.default.find({});
        res.status(200).json({ decks });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllDecks = getAllDecks;
const createDeck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { deck, _id } = req.body;
        const newDeck = yield deckModel_1.default.create({ deck, _id });
        res.send({ ok: true, newDeck });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: "error.message" });
    }
});
exports.createDeck = createDeck;
const updateDeck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { deckId, deck } = req.body;
        yield deckModel_1.default.findByIdAndUpdate(deckId, { deck });
        const findDeck = yield deckModel_1.default.findById(deckId);
        res.status(200).json({ findDeck });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.updateDeck = updateDeck;
const deleteAllDecks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedDecks = yield deckModel_1.default.deleteMany({});
        res.status(200).send({ deletedDecks });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.deleteAllDecks = deleteAllDecks;
const getDeckInGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gamdId } = req.cookies;
        if (!secret)
            throw new Error("No secret");
        if (!gamdId)
            throw new Error("No player found");
        const decodedGamdId = jwt_simple_1.default.decode(gamdId, secret);
        const game = yield gameModel_1.default.findById(decodedGamdId).populate("deck");
        if (!game)
            return;
        const deck = game.deck;
        res.send({ deck });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.getDeckInGame = getDeckInGame;
