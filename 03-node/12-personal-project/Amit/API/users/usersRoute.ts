import express from "express"
const router = express.Router()

import {
  createUser,
  getUser,
  login,
} from "./usersControl"

router
  .post("/create-user", createUser)
  .get("/get-user", getUser)
  .post("/login", login)
  
  
export default router
