import express from "express";
const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; 
dotenv.config();

const uri: string | undefined = process.env.MONGOOSE_URI;

app.use(express.static('./public'));

//to be able to get data from client add this line
app.use(express.json());

try {
    if (!uri) throw new Error("uri not defined");
    mongoose.connect((uri as string)).then(() => {
        console.log('Data base connected');
    }).catch((error) => {
        console.error(error);
    })
} catch (error) {
    console.error(error);
}

import studentRouter from "./API/students/studentRoutes";
import courseRouter from "./API/course/courseRoutes";
import gradeRouter from "./API/grade/gradeRoutes";
app.use("/api/student", studentRouter);
app.use("/api/course", courseRouter);
app.use("/api/grade", gradeRouter);

app.listen(3000, () => console.log("server is listening on port 3000"))