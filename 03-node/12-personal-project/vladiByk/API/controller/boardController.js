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
exports.getLists = exports.updateBoard = exports.addListToBoard = exports.deleteBoard = exports.getAllUserBoards = exports.getBoard = exports.createBoard = exports.getAllBoards = void 0;
const BoardModel_1 = __importDefault(require("../model/BoardModel"));
const ListModel_1 = __importDefault(require("../model/ListModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const secret = process.env.JWT_SECRET;
const getAllBoards = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBoards = yield BoardModel_1.default.find({});
        res.status(200).json({ allBoards });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllBoards = getAllBoards;
const createBoard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { boardName, imageSrc, userId } = req.body;
        const board = yield BoardModel_1.default.create({
            boardName,
            imageSrc,
            userArray: [userId],
        });
        // const createNotification = await Notification.create({
        //   message: `Board by the name "${boardName}" is created.`,
        // });
        // await User.findByIdAndUpdate(userId, {
        //   $push: { notifications: createNotification._id },
        // });
        if (!secret)
            throw new Error("Missing jwt secret");
        const boardId = board._id;
        const token = jwt_simple_1.default.encode({ boardId, role: "public" }, secret);
        if (!token)
            throw new Error("Missing token...");
        res.cookie("board", token, {
            maxAge: 60 * 60 * 1000,
            httpOnly: true,
        });
        res.status(200).json({ board });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.createBoard = createBoard;
const getBoard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const boardId = req.body;
        const board = yield BoardModel_1.default.findById(boardId);
        res.status(200).json({ board });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getBoard = getBoard;
const getAllUserBoards = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: userId } = req.params;
        // const user = await User.findById(userId);
        const boards = yield BoardModel_1.default.find({ userArray: userId });
        res.status(200).send({ boards });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.getAllUserBoards = getAllUserBoards;
const deleteBoard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: boardId } = req.params;
        const { userId } = req.body;
        const findBoard = yield BoardModel_1.default.findById(boardId);
        if (findBoard) {
            findBoard.listArray.forEach((list) => __awaiter(void 0, void 0, void 0, function* () { return yield ListModel_1.default.findByIdAndDelete(list); }));
        }
        yield BoardModel_1.default.deleteOne({ _id: boardId });
        res.status(200).send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.deleteBoard = deleteBoard;
const addListToBoard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { boardId, listId } = req.body;
        yield BoardModel_1.default.findByIdAndUpdate(boardId, {
            $push: { listArray: listId },
        });
        const board = yield BoardModel_1.default.findById(boardId);
        res.status(201).json({ board });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.addListToBoard = addListToBoard;
const updateBoard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: boardId } = req.params;
        const { boardName, imageSrc, listArray } = req.body;
        yield BoardModel_1.default.findByIdAndUpdate(boardId, { boardName, imageSrc, listArray });
        const board = yield BoardModel_1.default.findById(boardId);
        res.status(201).json({ board });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.updateBoard = updateBoard;
const getLists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: boardId } = req.params;
        const board = yield BoardModel_1.default.findById(boardId).populate("listArray");
        res.status(201).json({ board });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});
exports.getLists = getLists;
