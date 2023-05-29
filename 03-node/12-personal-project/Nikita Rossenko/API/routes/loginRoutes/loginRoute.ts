import express from "express";
const router = express.Router();

import {
    login,
    loggedIn,
    logout,
} from "../../controller/loginController/loginController";

router
    .post("/login", login)
    .get("/check-logged-in", loggedIn)
    .get("/logout", logout);

export default router;
