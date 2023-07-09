import express from "express";
import {
	getHistories,
} from "./historyControl";
import { isConnected } from "../auth/authMiddlware";

const router = express.Router();

router
	.get("/", isConnected, getHistories)

export default router;
