import express from "express";
const router = express.Router();

import { 
    addCrat,
    getCartByFilter,
    removeProductFromCart,
    successfulPurchase,
 } from "./CartControls";


router
.post("/add-cart", addCrat)
.post("/add-purchase", successfulPurchase)
.get("/get-cart", getCartByFilter)
.patch("/remove-item-from-cart", removeProductFromCart)
export default router;
