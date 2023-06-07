import express from "express";
const router = express.Router();

import { creatBalloon, deletBalloon, getBalloons } from "./balloonsControl";

router
    .post("/creatBalloon", creatBalloon)
    .get("/get-balloons", getBalloons)
    .delete("/delete-balloons", deletBalloon)

export default router;
