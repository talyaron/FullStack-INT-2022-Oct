import express from "express";
const app = express();

import * as dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";

//to use req. body
app.use(express.json());

dotenv.config();
const uri = process.env.MONGODB_URI;

if (uri) {mongoose.connect(uri).then(() => {
      console.log("DB connected!");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}

import playerRouter from "./API/playerRouter"
app.use("/API",playerRouter)  

//static file
app.use(express.static("./shlomi.samai/src"));


app.listen(3000, () => {
    console.log("server listen on port 3000");
  });
  