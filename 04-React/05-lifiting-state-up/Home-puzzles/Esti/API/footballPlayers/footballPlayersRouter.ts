import { Router } from "express";

import { addfootballPlayer, getFootballPlayers } from "./footballPlayersControl";

const router = Router();

router.post("/add-footballPlayer", addfootballPlayer).get("/get-footballPlayers", getFootballPlayers);

export default router;
