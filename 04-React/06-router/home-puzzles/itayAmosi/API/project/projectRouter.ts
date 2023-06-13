import express from "express";
const router = express.Router();

import { addProject } from "./projectControl";

router
    .post("/add-project", addProject)
    // .get("/get-players", getPlayers)

export default router;
