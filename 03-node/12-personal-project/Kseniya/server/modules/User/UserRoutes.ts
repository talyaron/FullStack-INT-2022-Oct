import express from "express";
const router = express.Router();

import { login, getUser, addUser } from "./UserControl";

router
  .get("/get", getUser)
  .post("/add", addUser)
  .post("/login", login);

export default router;
