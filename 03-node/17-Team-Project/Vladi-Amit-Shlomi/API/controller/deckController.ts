import { NextFunction, Response, Request } from "express";
import Deck, { DeckInterface } from "../model/deckModel";
import jwt from "jwt-simple";
import Game, { GameSchema } from "../model/gameModel";
const secret = process.env.JWT_SECRET;

export const getAllDecks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const decks = await Deck.find({});
    res.status(200).json({ decks });
  } catch (error) {
    console.error(error);
  }
};

export const createDeck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { deck, _id } = req.body;

    const newDeck = await Deck.create({ deck, _id });

    res.send({ ok: true, newDeck });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: "error.message" });
  }
};

export const updateDeck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { deckId, deck } = req.body;

    await Deck.findByIdAndUpdate(deckId, { deck });

    const findDeck = await Deck.findById(deckId);

    res.status(200).json({ findDeck });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteAllDecks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedDecks = await Deck.deleteMany({});

    res.status(200).send({ deletedDecks });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getDeckInGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { gamdId } = req.cookies;

    if (!secret) throw new Error("No secret");

    if (!gamdId) throw new Error("No player found");

    const decodedGamdId = jwt.decode(gamdId, secret);

    const game = await Game.findById(decodedGamdId).populate("deck");

    if (!game) return;
    const deck = game.deck;

    res.send({ deck });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
