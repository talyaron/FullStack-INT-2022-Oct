import express from "express";
const boardRouter = express.Router();

import { createBoard, deleteAllBoards, updateBoard } from "../controller/boardController";

boardRouter.route("/").post(createBoard)
boardRouter.route("/updateBoard").patch(updateBoard);
boardRouter.route("/deleteBoards").delete(deleteAllBoards);

export { boardRouter };
