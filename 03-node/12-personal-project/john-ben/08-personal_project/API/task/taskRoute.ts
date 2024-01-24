import express from "express";
import {
	addTask,
	deleteTask,
	getTask,
	getTasks,
	updateTask,
} from "./taskControl";
import { isConnected } from "../auth/authMiddlware";

const router = express.Router();

router
	.post("/", isConnected, addTask)
	.get("/:taskId", isConnected, getTask)
	.get("/", isConnected, getTasks)
	.patch("/:taskId", isConnected, updateTask)
	.delete("/:taskId", isConnected, deleteTask);

export default router;
