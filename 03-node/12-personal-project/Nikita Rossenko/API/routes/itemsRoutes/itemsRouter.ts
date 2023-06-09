import express from "express";
const router = express.Router();

import {
    addStarship,
    getStarships,
} from "../../controller/itemsController/itemsController";

router
    .post("/add-starship", addStarship)
    .get("/get-starship", getStarships)


export default router;