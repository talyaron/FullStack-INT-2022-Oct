import express from "express";
const adminRouter = express.Router();

import 
    { 
        register,
        login,
        getAllAdmins,
        getSingleAdmin,
        updateAdmin,
        deleteAdmin,
        publishExamResults,
        unpublishExamResults
    } from "./adminControl"

    adminRouter
    .post("/register", register)
    .post("/login", login)
    .get("/get-all-admins", getAllAdmins)
    .get("/:id", getSingleAdmin)
    .put("/:id", updateAdmin)
    .delete("/:id", deleteAdmin)
    .put("/publish/exam/:id", publishExamResults)
    .put("/unpublish/exam/:id", unpublishExamResults)

export default adminRouter;