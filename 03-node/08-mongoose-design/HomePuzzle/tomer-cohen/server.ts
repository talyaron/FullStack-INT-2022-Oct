import express from "express";
const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const uri: string | undefined = process.env.MONGODB_URI;

app.use(express.json());

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

app.use(express.json());

import studentsRouter from './API/students/studentsRoute';
app.use('/api/students', studentsRouter)

import courseRouter from './API/courses/coursesRoute';
app.use('/api/courses', courseRouter)


app.use(express.static("./public"));






app.listen(3000, () => {
  console.log("server listen on port 3000");
});
