//express & mongoose//
import express from "express"
const app = express()
import mongoose, { Schema } from "mongoose"

//env//
import * as dotenv from "dotenv"
dotenv.config()

//cookies//
import cookieParser from 'cookie-parser'
app.use(cookieParser())



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
app.use(express.json());

//connecting to entities routes//
import usersRouter from './API/users/usersRoute';
app.use('/api/users', usersRouter);

import moviesRouter from './API/movies/moviesRoute';
app.use('/api/movies', moviesRouter);

import seatsRouter from './API/seats/seatsRoute';
app.use('/api/seats', seatsRouter);

import ordersRouter from './API/orders/ordersRoute';
app.use('/api/orders', ordersRouter);


//static file
app.use(express.static("./public"));

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
