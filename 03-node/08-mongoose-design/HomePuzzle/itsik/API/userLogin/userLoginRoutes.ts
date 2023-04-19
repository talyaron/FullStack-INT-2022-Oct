import express from "express";
const router = express.Router();
import { addUser } from "./userLoginControlls"

router.post("/signUp", addUser)



export default router;
