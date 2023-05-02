import express from "express";
const router = express.Router();
import { 
    addProducts,
    getProducts
 } from "./collectionsControls";

router
.post("/add-products", addProducts)
.get("/get-products", getProducts)
export default router;
