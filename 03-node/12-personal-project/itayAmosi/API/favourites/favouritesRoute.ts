import express from "express";
const router = express.Router();

import { addFavourite } from "./favouritesControls";


router
.post("/add-favourite", addFavourite)
export default router;
