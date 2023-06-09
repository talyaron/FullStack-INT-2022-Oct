import express from "express";
const router = express.Router();

import { addItem,  getCartByUserId, removeProductFromCart,successfulPurchase } from "./cartControl";


router

.post("/add-item", addItem)
.get("/get-cart",getCartByUserId)
.patch("/remove-item-from-cart", removeProductFromCart)
.post("/add-purchase", successfulPurchase)




export default router;
