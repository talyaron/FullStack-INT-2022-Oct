"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerRouter = void 0;
const express_1 = __importDefault(require("express"));
const playerRouter = express_1.default.Router();
exports.playerRouter = playerRouter;
const playerController_1 = require("../controller/playerController");
playerRouter.route("/").get(playerController_1.getAllPlayers).post(playerController_1.createPlayer);
playerRouter.route("/getGamePlayers").get(playerController_1.getAllPlayersInGame);
playerRouter.route("/deletePlayers").delete(playerController_1.deleteAllPlayers);
playerRouter.route("/updatePlayer").patch(playerController_1.updatePlayer);
