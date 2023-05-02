import express from "express";
const router = express.Router();

import { 
    addCrat,
    getCartByFilter,
 } from "./CartControls";


router
.post("/add-cart", addCrat)
.get("/get-cart", getCartByFilter)
export default router;
