import express from "express";
const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const uri: string | undefined = process.env.MONGODB_URI;

if (uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}


import studentsRouter from './API/students/studentsRoute';
app.use('/api/students', studentsRouter);

import coursesRouter from './API/courses/coursesRoute';
app.use('/api/courses', coursesRouter);

import gradesRouter from './API/grades/gradesRoute';
app.use('/api/grades', gradesRouter);


////getting data from public
app.use(express.json());


//static file
app.use(express.static("./public"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
