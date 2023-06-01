import express from "express";
const deckRouter = express.Router();

import {
  createDeck,
  deleteAllDecks,
  updateDeck,
} from "../controller/deckController";

deckRouter.route("/").post(createDeck);
deckRouter.route("/updateDeck").patch(updateDeck);
deckRouter.route("/deleteDecks").delete(deleteAllDecks);

export { deckRouter };
