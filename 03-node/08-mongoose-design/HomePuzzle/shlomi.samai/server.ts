import express from "express";
import mongoose, { Schema } from "mongoose";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
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
  
const app = express();

//to be able to get data from client add this line
app.use(express.json());
 
//static file+ listen
app.use(express.static("./client"));

import playersRouts from './API/Players/playersRouts'
app.use('/API/Players',playersRouts)
import teamsRouts from './API/Teams/teamsRouts'
app.use('/API/Teams',teamsRouts)

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
