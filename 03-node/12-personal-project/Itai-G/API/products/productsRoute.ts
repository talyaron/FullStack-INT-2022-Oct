import express from "express";
const router = express.Router();
import {
    createProduct,
    getProducts,
    updateProduct,
    getProductById,
    deleteProduct,
}
from"./productsControl";

router
    .post("/create-product",createProduct)
    .get("/get-products",getProducts)
    .get("/get-product-by-id",getProductById)
    .delete("/delete-product",deleteProduct)
    .patch("/update-product",updateProduct);
    
    export default router