import express from "express";
const productRouter = express.Router();

import { addProductToStorage, getProducts, addProductToWish, getUserWish } from "./productControls";

productRouter.post("/add-product", addProductToStorage).get("/get-products", getProducts).post("/add-to-wish", addProductToWish).get("/get-user-wish", getUserWish)

export default productRouter;