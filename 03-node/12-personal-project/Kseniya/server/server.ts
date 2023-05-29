import express from "express";
const app = express();
const cors = require("cors");
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

app.use(cookieParser());

//connecting DB//
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

//getting data from public
app.use(express.json(), cors());

import userRouter from "./modules/User/UserRoutes";
app.use("/user", userRouter);

import recipeRouter from "./modules/Recipe/RecipeRoutes";

app.use("/recipe", recipeRouter);

app.listen(4000, () => {
  console.log("server listen on port 4000");
});
