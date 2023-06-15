import express from "express";
const router = express.Router();

import { addUser, login } from "./userControl";

router
    .post("/add-user", addUser)
    .get("/get-user", login)

export default router;
