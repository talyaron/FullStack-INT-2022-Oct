import {Router} from "express";
import {  createUser, getUsers, login, restorePassword, UpdateUserDetails, getUser, deleteUser, adminCreateUser, logout, changeUserIcon, getUsersScoer, getUserResolution, setUserResolution } from "./userControl";
import { adminAccess } from "./userMiddlwares";

const userRouter = Router()

userRouter
.get("/get-users", getUsers)
.get("/get-users-score", getUsersScoer)
.post("/create-user" , createUser)
.post("/restore-password" , restorePassword)
.post("/admin-create-user" ,adminAccess, adminCreateUser)
.post("/login" , login)
.put("/update-user", UpdateUserDetails)
.get("/get-user" , getUser)
.get("/get-user-resolution" , getUserResolution)
.post("/set-user-resolution" , setUserResolution)
.delete("/delete-user" , deleteUser)
.get("/delete-cookie" , logout)
.patch('/change-icon' , changeUserIcon)

export default userRouter