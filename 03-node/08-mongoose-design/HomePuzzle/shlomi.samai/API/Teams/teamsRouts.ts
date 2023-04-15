import express from "express";
const router = express.Router();
import {
  addTeam,
  deletTeam,
  getTeam,
  updateTeam,
} from "./teamsControl";

router
  .post("/add-team", addTeam)
  .delete("/delete-team", deletTeam)
  .get("/get-teams", getTeam)
  .patch("/update-team-name", updateTeam);

export default router;