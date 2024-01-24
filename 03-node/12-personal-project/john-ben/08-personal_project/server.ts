import express from "express";

const app = express();
import mongoose, { Schema } from "mongoose";
import cookieParser from "cookie-parser";

import * as dotenv from "dotenv";
dotenv.config();

import taskRoute from "./API/task/taskRoute";
import userRoute from "./API/user/userRoute";
import authRoute from "./API/auth/authRoute";
import historyRoute from "./API/history/historyRoute";

const uri: string | undefined = process.env.MONGODB_URI;

if (uri) {
	mongoose
		.connect(uri)
		.then(() => {
			console.log("DB connected!");
		})
		.catch((err) => console.log(err));
} else {
	console.log("No uri to DB");
}

app.use(express.json());
app.use(cookieParser());

app.use("/api/tasks", taskRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/histories", historyRoute);

app.use(express.static("./client"));

app.listen(3010, () => {
	console.log("server listen on port 3010");
});
