import express from "express";
const orderRouter = express.Router();

import isUserLogin from "../../middlewares/isUserLogin";

import { createOrder } from "./orderCtrl"

orderRouter
    .post("/create-order", isUserLogin, createOrder)
    // .get("/get-all-categories", isAdminLogin, isAdmin, getAllCategories)
    // .get("/get-single-category/:categoryID", isAdminLogin, isAdmin, getSingleCategory)
    // .put("/update-category/:categoryID", isAdminLogin, isAdmin, updateCategory)
    // .delete("/delete-category/:categoryID", isAdminLogin, isAdmin, deleteCategory)

export default orderRouter