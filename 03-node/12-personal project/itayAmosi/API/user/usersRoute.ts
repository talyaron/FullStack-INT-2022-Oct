import express from "express";
const router = express.Router();
import { 
    addUser,
    login,
 } from "./usersControls";

router
.post("/register", addUser)
.post("/login", login)
export default router;
