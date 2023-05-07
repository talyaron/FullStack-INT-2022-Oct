import express from "express";
const router = express.Router()

import { register } from "../../controller/registerController/registerController";

router.post("/register", register);

export default router