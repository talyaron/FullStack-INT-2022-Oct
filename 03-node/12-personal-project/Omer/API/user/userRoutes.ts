import express from "express";
const LogInrouter = express.Router();

import { addUser, getUserFromCokkie, logIn } from "./userControls";

LogInrouter.post("/add-user", addUser).post("/log-in", logIn).get("/user-from-cookie", getUserFromCokkie)

export default LogInrouter;