import express from "express";
const userRouter = express.Router();

import { registerUser, loginUser, getUserProfile, updateShippingAdress } from "./userCtrl"
import isUserLogin from "../../middlewares/isUserLogin";

userRouter
    .post("/register",  registerUser)
    .get("/login",  loginUser)
    .get("/profile", isUserLogin,  getUserProfile)
    .put("/update-shippingAddress", isUserLogin, updateShippingAdress)

export default userRouter