import express from "express";
const adminRouter = express.Router();

import isLogin from "../../middlewares/isLogin";
import isAdmin from "../../middlewares/isAdmin";

import 
    { 
        register,
        login,
        getAllAdmins,
        getAdminProfile,
        updateAdmin,
        deleteAdmin,
        publishExamResults,
        unpublishExamResults
    } from "./adminControl"

adminRouter
    .post("/register", register)
    .post("/login", login)
    .get("/get-all-admins", getAllAdmins)
    .get("/profile", isLogin, isAdmin, getAdminProfile)
    .put("/", isLogin, isAdmin, updateAdmin)
    .delete("/:id", deleteAdmin)
    .put("/publish/exam/:id", publishExamResults)
    .put("/unpublish/exam/:id", unpublishExamResults)

export default adminRouter;