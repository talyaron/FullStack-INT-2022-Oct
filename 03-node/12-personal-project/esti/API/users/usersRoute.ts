
import express from "express";

const router = express.Router();

import {
  addUser,
  updateUser,
  getUsers,
  // updateUserName,
  deleteUser,
  login,
  getUser,
  // getUserName,

} from "./userControl";

router
  .post("/add-user", addUser)
  .put("/update-user", updateUser)
  .get("/get-users", getUsers)
  // .get("/get-user-name", getUserName)
  .delete("/delete-user", deleteUser)
  .post('/login',login)
  .get('/get-user',getUser);

export default router;
