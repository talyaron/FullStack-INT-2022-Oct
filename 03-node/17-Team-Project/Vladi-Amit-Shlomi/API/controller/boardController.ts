import { NextFunction, Response, Request } from "express";
import Board, { BoardInterface } from "../model/boardModel";
import jwt from "jwt-simple";
import Game, { GameSchema } from "../model/gameModel";
const secret = process.env.JWT_SECRET;

export const getAllBoards = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const boards = await Board.find({});
    res.status(200).json({ boards });
  } catch (error) {
    console.error(error);
  }
};

export const createBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { tileArr, _id } = req.body;

    const board = await Board.create({ tileArr, _id });

    res.send({ ok: true, board });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: "error.message" });
  }
};

export const updateBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { boardId, tileArr } = req.body;

    await Board.findByIdAndUpdate(boardId, { tileArr });

    const board = await Board.findById(boardId);

    res.status(200).json({ board });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteAllBoards = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedBoards = await Board.deleteMany({});

    res.status(200).send({ deletedBoards });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getBoardInGame = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { gamdId } = req.cookies;

    if (!secret) throw new Error("No secret");

    if (!gamdId) throw new Error("No player found");

    const decodedGamdId = jwt.decode(gamdId, secret);

    const game = await Game.findById(decodedGamdId).populate("board");

    if (!game) return;
    const board = game.board;

    res.send({ board });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
