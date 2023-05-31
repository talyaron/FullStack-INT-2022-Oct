import { NextFunction, Response, Request } from "express";
import Player, { PlayerInterface } from "../model/playerModel";
import jwt from "jwt-simple";
import Game, { GameSchema } from "../model/gameModel";
const secret = process.env.JWT_SECRET;

export const getAllPlayers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const players = await Player.find({});
    res.status(200).json({ players });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "error.message" });
  }
};

export const createPlayer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, hand, _id, active } = req.body;

    const player = await Player.create({ name, hand, _id, active });

    res.status(200).json({ player });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getAllPlayersInGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { gamdId } = req.cookies;

    if (!secret) throw new Error("No secret");

    if (!gamdId) throw new Error("No player found");

    const decodedGamdId = jwt.decode(gamdId, secret);

    const game = await Game.findById(decodedGamdId).populate("players");

    if (!game) return;
    const players = [game.players];

    res.send({ players });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: "error.message" });
  }
};

export const deleteAllPlayers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedPlayers = await Player.deleteMany({});

    res.status(200).send({ deletedPlayers });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updatePlayer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { playerId, hand, active } = req.body;

    await Player.findByIdAndUpdate(playerId, { hand, active });

    const findPlayer = await Player.findById(playerId);

    res.status(200).send({ findPlayer });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
