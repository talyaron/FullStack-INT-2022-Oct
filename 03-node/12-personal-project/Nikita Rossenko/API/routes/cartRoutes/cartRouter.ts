import express from "express";
const router = express.Router();

import {
    addItemToCart,
    getCartItems,
    deleteItemFromCart
} from "../../controller/cartController/cartController";

router
    .post("/add-item-to-cart", addItemToCart)
    .post("/delete-item-from-cart", deleteItemFromCart)
    .get("/get-cart-items", getCartItems)


export default router;