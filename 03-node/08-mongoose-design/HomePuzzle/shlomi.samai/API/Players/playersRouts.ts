import express from "express";
const router = express.Router();
import {
  addPlayer,
  deletPlayer,
  getPlayer,
  updatePlayer,
  hendleGetTeamsOfPlayer,
} from "./playerControls";

router
  .post("/add-players", addPlayer)
  .post("/API/Teams/hendle-Get-Teams-Of-Player", hendleGetTeamsOfPlayer)
  .delete("/delete-player", deletPlayer)
  .get("/get-players", getPlayer)
  .patch("/update-player-name", updatePlayer);

export default router;
