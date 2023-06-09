import express from "express";
const router = express.Router();
import {
  addUser,
  updateUser,
  getUsers,
  updateUserName,
  deleteUser,
  updateUserType,
  login,
  getUser
} from "./usersControls";

import {isAdmin,userDetails} from './userMiddlware'

router
  .post("/add-user", addUser)
  .put("/update-user", isAdmin, updateUser)
  .get("/get-users",isAdmin, getUsers)
  .patch("/update-user-name", updateUserName)
  .delete("/delete-user", deleteUser)
  .patch('/update-user-type',updateUserType)
  .post('/login',login)
  .get('/get-user',getUser);

export default router;
