import express from "express";
const router = express.Router();

import { creatBalloon, getBalloons } from "./balloonsControl";

router
    .post("/creatBalloon", creatBalloon)
    .get("/get-balloons", getBalloons)
    // .delete("/delete-balloon", deletBalloon)

export default router;
