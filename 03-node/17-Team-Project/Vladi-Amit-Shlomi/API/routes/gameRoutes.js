"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRouter = void 0;
const express_1 = __importDefault(require("express"));
const gameRouter = express_1.default.Router();
exports.gameRouter = gameRouter;
const gameController_1 = require("../controller/gameController");
gameRouter.route("/").post(gameController_1.createGame);
gameRouter.route("/getUserGames").get(gameController_1.getUserGames);
gameRouter.route("/saveGameCookie").post(gameController_1.saveGameCookie);
gameRouter.route("/removeGameCookie").delete(gameController_1.removeGameCookie);
gameRouter.route("/getGame").get(gameController_1.getGame);
gameRouter.route("/updateGame").patch(gameController_1.updateGame);
gameRouter.route("/deleteThisGame").delete(gameController_1.deleteGameAndAllRelatedToIt);
gameRouter.route("/deleteGames").delete(gameController_1.deleteAllGames);
