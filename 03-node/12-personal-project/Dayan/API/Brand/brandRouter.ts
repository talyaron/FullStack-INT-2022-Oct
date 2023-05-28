import express from "express";
const brandRouter = express.Router();

import isAdminLogin from "../../middlewares/isAdminLogin";
import isAdmin from "../../middlewares/isAdmin";

import { createBrand, getAllBrands, getSingleBrand, updateBrand, deleteBrand } from "./brandCtrl"

brandRouter
    .post("/create-brand", isAdminLogin, isAdmin, createBrand)
    .get("/get-all-brands", getAllBrands)
    .get("/get-single-brand/:brandID", getSingleBrand)
    .put("/update-brand/:brandID", isAdminLogin, isAdmin, updateBrand)
    .delete("/delete-brand/:brandID", isAdminLogin, isAdmin, deleteBrand)

export default brandRouter