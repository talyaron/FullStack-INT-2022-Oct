import { NextFunction, Response, Request } from "express";
import Game, { GameInterface } from "../model/gameModel";
import Player from "../model/playerModel";
import Board from "../model/boardModel";
import Deck from "../model/deckModel";
import User from "../model/userModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const getAllGames = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const games = await Game.find({});
    res.status(200).json({ games });
  } catch (error) {
    console.error(error);
  }
};

export const saveGameCookie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { gameId } = req.body;

    if (!gameId) throw new Error("gameId not found");

    if (!secret) throw new Error("Missing jwt secret");

    const token = jwt.encode(gameId, secret);

    res.cookie("gameId", token, {
      maxAge: 60 * 60 * 1000, //1 hour
      httpOnly: true,
    });
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
  }
};

export const removeGameCookie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.clearCookie("gameId");
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
  }
};

export const getGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { gameId } = req.cookies;

    if (!secret) throw new Error("No secret");
    if (!gameId) throw new Error("No user found");

    const decodedGameId = jwt.decode(gameId, secret);

    const game = await Game.findById(decodedGameId).populate(
      "user players board deck"
    );

    res.status(200).json({ game });
  } catch (error) {
    console.error(error);
  }
};

export const getUserGames = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.cookies;

    if (!secret) throw new Error("No secret");
    if (!userId) throw new Error("No user found");

    const decoded = jwt.decode(userId, secret);

    const user = await User.findById(decoded);

    const games = await Game.find({ user: decoded }).populate(
      "user players board deck"
    );

    res.status(200).json({ games });
  } catch (error) {
    console.error(error);
  }
};

export const createGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, players, boardId, deckId } = req.body;

    const user = await User.findById(userId);
    if (!user) return "User not found";

    const game = await Game.create({
      user: userId,
      players: [...players],
      board: boardId,
      deck: deckId,
    });

    res.send({ ok: true, gameId: game._id });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: "error.message" });
  }
};

export const deleteAllGames = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedGames = await Game.deleteMany({});

    res.status(200).send({ deletedGames });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { gameId, hand } = req.body;

    await Game.findByIdAndUpdate(gameId, { hand });

    const findGame = await Game.findById(gameId);

    res.status(200).send({ findGame });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteGameAndAllRelatedToIt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { gameId } = req.cookies;

    if (!secret) throw new Error("No secret");
    if (!gameId) throw new Error("No gameId found");

    const decoded = jwt.decode(gameId, secret);

    const game = await Game.findById(decoded);
    if (!game) return;

    game.players.forEach(
      async (player) => await Player.findByIdAndDelete(player)
    );

    await Board.findByIdAndDelete(game.board);

    await Deck.findByIdAndDelete(game.deck);

    const deleteGame = await Game.findByIdAndDelete(decoded);

    res.status(200).send({ deleteGame });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
