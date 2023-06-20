import express from "express";
const router = express.Router();
import { 
    addProducts,
    getProducts,
    getProductsByIds,
 } from "./collectionsControls";

router
.post("/add-products", addProducts)
.get("/get-products", getProducts)
.get("/get-products-by-id", getProductsByIds)
export default router;
