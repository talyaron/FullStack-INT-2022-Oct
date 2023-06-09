import express from "express";
const balloonsRouter = express.Router();

import {
  addBalloons,
  getBalloons,
  getPoppedBalloons,
  updateBalloonStatus,
  deleteBalloon,
  deleteAllBalloons,

} from "./balloonsControl";

balloonsRouter
  .post("/add-balloons", addBalloons)
  .get("/get-balloons", getBalloons )
  .get("/get-popped-balloons", getPoppedBalloons )
  .patch("/update-balloon-status", updateBalloonStatus)
  .delete("/delete-balloon/:balloonId", deleteBalloon)
  .delete("/delete-all-balloons", deleteAllBalloons)

export default balloonsRouter;
