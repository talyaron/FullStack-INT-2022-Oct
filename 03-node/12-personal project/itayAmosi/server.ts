import express from "express";
import { v4 as uuidv4 } from "uuid";

const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser())
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { isUndefined } from "util";
dotenv.config();


app.use(express.json());
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


import usersRouter from './API/user/usersRoute';
app.use('/api/users', usersRouter);


import collectionsRouter from './API/collection/collectionsRoute';
app.use('/api/collections', collectionsRouter);


import cartRouter from './API/cart/CartRoute';
app.use('/api/cart', cartRouter);


app.use(express.static(`./public`));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});