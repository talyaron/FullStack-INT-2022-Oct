import express from "express";
import { Response, Request } from 'express'
import userRoutes from './Routes/userRoute'

const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const uri: string | undefined = process.env.MONGO_DB;

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


//to be able to get data from client add this line
app.use(express.json());

//data route

app.use('/api/users', userRoutes)

//static file
app.use(express.static("./client"));

app.listen(5000, () => {
  console.log("server listen on port 3000");
});
