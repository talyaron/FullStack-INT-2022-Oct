"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardRouter = void 0;
const express_1 = __importDefault(require("express"));
const boardRouter = express_1.default.Router();
exports.boardRouter = boardRouter;
const boardController_1 = require("../controller/boardController");
boardRouter.route("/").post(boardController_1.createBoard);
boardRouter.route("/updateBoard").patch(boardController_1.updateBoard);
boardRouter.route("/deleteBoards").delete(boardController_1.deleteAllBoards);
