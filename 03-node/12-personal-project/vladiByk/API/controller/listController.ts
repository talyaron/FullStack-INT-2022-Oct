import { NextFunction, Response, Request } from "express";
import List from "../model/ListModel";
import Board, { BoardInterface } from "../model/BoardModel";
import Notification from "../model/notificationModel";
import User from "../model/UserModel";

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

    const list = await List.create({ listName });

    const board: BoardInterface | null = await Board.findById(boardId);

    if (!board) return;

    await Board.findByIdAndUpdate(boardId, {
      $push: { listArray: list._id },
    });

    res.status(200).json({ list });
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

    await List.deleteOne({ _id: listId });

    res.status(200).json({ msg: "Delete successfully." });
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
    const { listName, cardsArray } = req.body;

    const list = await List.findByIdAndUpdate(listId, {
      listName,
      cardsArray,
    });

    res.status(201).json({ list });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
