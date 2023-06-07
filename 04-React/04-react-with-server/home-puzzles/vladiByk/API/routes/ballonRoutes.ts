import express from "express";
const ballonRouter = express.Router();

import {
  getAllBallons,
  createBallon,
  deleteBallon,
  deleteAll,
} from "../controller/ballonController";

ballonRouter.route("/").get(getAllBallons).post(createBallon);

ballonRouter.route("/deleteAll").delete(deleteAll);

ballonRouter.route("/:id").delete(deleteBallon);

export { ballonRouter };
