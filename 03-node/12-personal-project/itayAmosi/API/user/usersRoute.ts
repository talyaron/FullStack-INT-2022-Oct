import express from "express";
const router = express.Router();
import { 
    addUser,
    getUsers,
    login,
 } from "./usersControls";

router
.post("/register", addUser)
.post("/login", login)
.get("/get-user", getUsers)
export default router;
