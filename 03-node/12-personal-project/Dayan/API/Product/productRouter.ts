import express from "express";
const productRouter = express.Router();

import isAdminLogin from "../../middlewares/isAdminLogin";
import isAdmin from "../../middlewares/isAdmin";

import { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } from "./productCtrl"

productRouter
    .post("/create-product", isAdminLogin, isAdmin, createProduct)
    .get("/get-all-products", getAllProducts)
    .get("/get-single-product/:productID", getSingleProduct)
    .put("/update-product/:productID", isAdminLogin, isAdmin, updateProduct)
    .delete("/delete-product/:productID", isAdminLogin, isAdmin, deleteProduct)

export default productRouter