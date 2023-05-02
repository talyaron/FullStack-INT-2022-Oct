import express from "express";
const router = express.Router();

import { addCrat } from "./CartControls";


router
.post("/add-cart", addCrat)
export default router;
