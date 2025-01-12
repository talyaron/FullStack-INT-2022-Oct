import express from "express";
const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv";
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


import studentsRouter from './API/students/studentsRoute';
app.use('/api/students', studentsRouter);


//static file
app.use(express.static('./public'));

app.listen(5000, () => {
  console.log("server listen on port 5000");
});
