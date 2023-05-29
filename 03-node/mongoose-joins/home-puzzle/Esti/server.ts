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

app.use(express.json());
app.use(express.static("./public"));

import usersRouter from './API/users/usersRoute';
app.use('/api/users', usersRouter);

import courseRouter from './API/courses/courseRoutes';
app.use('/api/courses', courseRouter);


const PORT = 3000

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
