import express from "express";
const userRouter = express.Router();
import {
  getAllUsers,
  createUser,
  getUser,
  login,
  deleteUser,
  updateUser,
  passwordRecovery,
} from "../controller/userController";

import { userCookieAuthentication } from "../middleware/cookieJwtAuthintication";

import { removeUserCookie } from "../middleware/removeCookie";

userRouter.route("/").get(getAllUsers).post(createUser);

userRouter.route("/login").post(login);

userRouter.route("/userPassword").post(passwordRecovery);

userRouter.route("/removeCookie").delete(removeUserCookie);

userRouter.route("/getUser").get(userCookieAuthentication, getUser);

userRouter.route("/:id").patch(updateUser).delete(deleteUser);

export { userRouter };
