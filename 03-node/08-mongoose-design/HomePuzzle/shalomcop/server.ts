import express from "express";
const app = express ();

import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv";
import { link } from "fs";
dotenv.config();
const uri :string | undefined = process.env.MONGODB_URI;

//to be able ger data from cliesnt, add this line:
if (uri) {
    mongoose
        .connect(uri)
        .then(() => {
            console.log('DB connected!');
        }) 
        .catch((err) => console.log(err));
} else {
    console.log('No URI to DB');
}

app.use(express.json());
app.use(express.static("./public"));


app.listen(3000, () => {
  console.log("server listen on port 3000");
});



