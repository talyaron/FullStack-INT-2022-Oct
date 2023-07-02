import express from "express";
const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import cookieParser from 'cookie-parser';
const uri: string | undefined = process.env.MONGODB_URI;

//to be able to get data from client add this line
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

//static file
app.use(express.json());
app.use(express.static("./public"));


import LogInrouter from "./API/user/userRoutes";
app.use("/api/user", LogInrouter);

import Productrouter from "./API/product/productRoutes";
app.use("/api/product", Productrouter);

import UserProducttrouter from "./API/user-product/user-productRoutes";
app.use("/api/user-product", UserProducttrouter)

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
