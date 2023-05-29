import express from "express";
const adminRouter = express.Router();

import isAdminLogin from "../../middlewares/isAdminLogin";
import isAdmin from "../../middlewares/isAdmin";

import { registerAdmin, loginAdmin, getAdminProfile } from "./adminCtrl"


adminRouter
    .post("/register", registerAdmin)
    .get("/login", loginAdmin)
    .get("/get-admin-profile", isAdminLogin, isAdmin, getAdminProfile)

export default adminRouter;