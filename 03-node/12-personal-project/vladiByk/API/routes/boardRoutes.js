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
const cookieJwtAuthintication_1 = require("../middleware/cookieJwtAuthintication");
const removeCookie_1 = require("../middleware/removeCookie");
const setCookieJWT_1 = require("../middleware/setCookieJWT");
boardRouter.route("/").get(boardController_1.getAllBoards).post(boardController_1.createBoard, setCookieJWT_1.setBoardCookie);
boardRouter.route("/removeCookie").delete(removeCookie_1.removeBoardCookie);
boardRouter.route("/getBoard").get(cookieJwtAuthintication_1.boardCookieAuthentication, boardController_1.getBoard);
boardRouter.route("/getlists/:id").get(boardController_1.getLists);
boardRouter.route("/addList").patch(boardController_1.addListToBoard);
boardRouter
    .route("/:id")
    .get(boardController_1.getAllUserBoards)
    .post(setCookieJWT_1.setBoardCookie)
    .patch(boardController_1.updateBoard)
    .delete(boardController_1.deleteBoard);
