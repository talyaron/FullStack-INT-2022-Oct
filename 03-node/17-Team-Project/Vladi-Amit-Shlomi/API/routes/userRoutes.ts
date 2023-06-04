import express from "express";
const userRouter = express.Router();

import {
  getAllUsers,
  createUser,
  getUser,
  userLogin,
  userLogout,
  deleteUser,
  deleteAllUsers,
  updateUser,
  getAllSimpleUsers,
  updateUserByAdmin,
  searchUser,
} from "../controller/userController";
import { isAdmin } from "../middlewares/userMiddleware";

userRouter.route("/").get(getAllUsers).post(createUser);

userRouter.route("/getAllSimpleUsers").get(getAllSimpleUsers);

userRouter.route("/searchUser").post(searchUser);

userRouter.route("/getAllUsers").get(getAllUsers);

userRouter.route("/getUser").get(getUser);

userRouter.route("/deleteUser").delete(isAdmin, deleteUser);

userRouter.route("/deleteAllUsers").delete(isAdmin, deleteAllUsers);

userRouter.route("/updateUser").patch(updateUser);

userRouter.route("/updateUserByAdmin").patch(isAdmin, updateUserByAdmin);

userRouter.route("/userLogin").post(userLogin);

userRouter.route("/userLogout").get(userLogout);

// userRouter.route("/userPassword").post(passwordRecovery);

export { userRouter };
