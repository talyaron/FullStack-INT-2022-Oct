import express from "express";
const router = express.Router();

import {
    addBallons,



}from "./ballonControl"



router
.post('/start-game', addBallons)

export default router