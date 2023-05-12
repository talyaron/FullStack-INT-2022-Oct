import express from "express";
const colorRouter = express.Router();

import isAdminLogin from "../../middlewares/isAdminLogin";
import isAdmin from "../../middlewares/isAdmin";

import { creatColor, getAllColors, getSingleColor, updateColor, deleteColor } from "./colorCtrl"

colorRouter
    .post("/create-color", isAdminLogin, isAdmin, creatColor)
    .get("/get-all-colors", isAdminLogin, isAdmin, getAllColors)
    .get("/get-single-color/:colorID", isAdminLogin, isAdmin, getSingleColor)
    .put("/update-color/:colorID", isAdminLogin, isAdmin, updateColor)
    .delete("/delete-color/:colorID", isAdminLogin, isAdmin, deleteColor)

export default colorRouter