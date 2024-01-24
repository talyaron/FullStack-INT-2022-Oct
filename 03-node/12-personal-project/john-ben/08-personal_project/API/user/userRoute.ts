import express from "express";
import {getUser, getUsers, updateUser, deleteUser } from "./UserControl";

const router = express.Router();

router
.get("/user",getUser)
.get("/",getUsers)
.patch("/:userId",updateUser)
.delete("/:userId",deleteUser)



export default router;