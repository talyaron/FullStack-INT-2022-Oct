

import express from "express";

import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; 
dotenv.config();

const app = express();

const uri: string | undefined = process.env.MONGODB_URI;

console.log(uri);
app.use(express.json());

// req.header = 'dsjfkhsdkjfhskjdfh' -> req.body

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


import footballPlayerRouter from './API/footballPlayers/footballPlayersRouter';
app.use('/api/footballPlayers', footballPlayerRouter);


//static file
app.use(express.static("./client"));

const PORT = 3000
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
