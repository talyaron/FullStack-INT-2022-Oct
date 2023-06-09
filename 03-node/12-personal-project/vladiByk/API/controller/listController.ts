import { NextFunction, Response, Request } from "express";
import List from "../model/ListModel";
import Board from "../model/BoardModel";

export const getAllLists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const list = await List.find({});
    res.status(200).json({ list });
  } catch (error) {
    console.error(error);
  }
};

export const createList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { listName, boardId } = req.body;
    const board = await Board.findById(boardId);
    const list = await List.create({ listName, board });

    res.status(200).json({ list });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getBoardLists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: boardId } = req.params;
    const board = await Board.findById(boardId);
    const lists = await List.find({ board });
    res.status(200).json({ lists });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: listId } = req.params;
    const list = await List.deleteOne({ _id: listId });
    const lists = await List.find({});

    res.status(200).send({ lists });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: listId } = req.params;
    const { listName, cardsArray, boardId } = req.body;
    const board = await Board.findById(boardId);
    const list = await List.findByIdAndUpdate(listId, {
      listName,
      cardsArray,
      board,
    });
    res.status(201).json({ list });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
