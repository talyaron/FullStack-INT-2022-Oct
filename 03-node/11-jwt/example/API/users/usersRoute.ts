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

router
  .post("/add-user", addUser)
  .put("/update-user", updateUser)
  .get("/get-users", getUsers)
  .patch("/update-user-name", updateUserName)
  .delete("/delete-user", deleteUser)
  .patch('/update-user-type',updateUserType)
  .post('/login',login)
  .get('/get-user',getUser);

export default router;
