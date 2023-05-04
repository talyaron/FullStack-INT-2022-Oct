import express from "express";
const userRouter = express.Router();

import { addUser, logIn, userFromcookies } from "./userControls";

userRouter.post("/add-user", addUser).post("/logIn", logIn).get("/getUser-for-logIn", userFromcookies);

export default userRouter;
