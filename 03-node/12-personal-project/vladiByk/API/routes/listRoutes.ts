import express from "express";
const listRouter = express.Router();
import {
  getAllLists,
  createList,
  getBoardLists,
  deleteList,
  updateList,
} from "../controller/listController";

listRouter.route("/").get(getAllLists).post(createList);

listRouter
  .route("/:id")
  .get(getBoardLists)
  .patch(updateList)
  .delete(deleteList);

export { listRouter };
