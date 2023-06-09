import express from "express";
const router = express.Router();

import {
 addUser,
 getUsers,

} from "./userControlls"








router
.get("/get-user", getUsers )
.post("/add-user", addUser)







export default router
