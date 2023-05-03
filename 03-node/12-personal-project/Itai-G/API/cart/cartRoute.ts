import express from "express";
const router = express.Router();

import { addItem } from "./cartControl";


router

.post("/add-item", addItem)



export default router;
