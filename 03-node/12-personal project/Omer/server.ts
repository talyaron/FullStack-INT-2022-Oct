import express from "express";
const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import cookieParser from 'cookie-parser';
const uri: string | undefined = process.env.MONGO_URI;

//to be able to get data from client add this line
app.use(cookieParser())
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

app.use(express.static("./public"));

import userRouter from "./API/user/userRoutes";
import productRouter from "./API/product/productRoutes";
app.use("/api/user", userRouter);
app.use("/api/product", productRouter)

app.listen(3000, () => {
    console.log("server listen on port 3000");
});