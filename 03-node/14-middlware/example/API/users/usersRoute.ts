import express from "express";
const router = express.Router();
import {
  addUser,
  updateUser,
  getUsers,
  updateUserName,
  deleteUser,
} from "./usersControls";
import { isAdmin } from "../../../../10-cookies/example/API/users/userMiddlwares";

router
  .post("/add-user",isAdmin, addUser)
  .put("/update-user", updateUser)
  .get("/get-users", getUsers)
  .patch("/update-user-name", updateUserName)
  .delete("/delete-user", deleteUser);

export default router;
