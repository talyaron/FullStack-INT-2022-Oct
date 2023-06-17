import express from "express";
const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; 
dotenv.config();
import cookieParser from 'cookie-parser';
const uri: string | undefined = process.env.MONGODB_URI;

app.use(cookieParser())

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

import usersRouter from './API/user/userRoute';
app.use('/api/user', usersRouter);

import playerRouter from './API/player/playerRoute';
app.use('/api/player', playerRouter);


import gameRouter from './API/game/gameRoute';
app.use('/api/game', gameRouter);


app.listen(4000, () => {
  console.log("server listen on port 4000");
});