import express from "express";
const ballonRouter = express.Router();

import {
  getAllBallons,
  createBallon,
  deleteBallon,
} from "../controller/ballonController";

ballonRouter.route("/").get(getAllBallons).post(createBallon);

ballonRouter.route("/:id").delete(deleteBallon);

export { ballonRouter };
