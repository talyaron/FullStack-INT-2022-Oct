import express from "express";
const categoryRouter = express.Router();

import isAdminLogin from "../../middlewares/isAdminLogin";
import isAdmin from "../../middlewares/isAdmin";

import { createCategory, getAllCategories, getSingleCategory, updateCategory, deleteCategory } from "./categoryCtrl"

categoryRouter
    .post("/create-category", isAdminLogin, isAdmin, createCategory)
    .get("/get-all-categories", isAdminLogin, isAdmin, getAllCategories)
    .get("/get-single-category/:categoryID", isAdminLogin, isAdmin, getSingleCategory)
    .put("/update-category/:categoryID", isAdminLogin, isAdmin, updateCategory)
    .delete("/delete-category/:categoryID", isAdminLogin, isAdmin, deleteCategory)

export default categoryRouter