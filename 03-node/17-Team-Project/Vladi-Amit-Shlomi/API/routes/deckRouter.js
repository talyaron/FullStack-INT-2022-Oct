"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deckRouter = void 0;
const express_1 = __importDefault(require("express"));
const deckRouter = express_1.default.Router();
exports.deckRouter = deckRouter;
const deckController_1 = require("../controller/deckController");
deckRouter.route("/").post(deckController_1.createDeck);
deckRouter.route("/updateDeck").patch(deckController_1.updateDeck);
deckRouter.route("/deleteDecks").delete(deckController_1.deleteAllDecks);
