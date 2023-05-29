import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import userRouter from "./API/users/userRouter";
import enemyRouter from "./API/enemy/enemyRouter";
import towerRouter from "./API/towers/towerRouter";
import gameRouter from "./API/game/gameRouter";



const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());

const uri: string | undefined = process.env.MONGO_DB;

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




app.use(express.static(`./public`));
app.use(express.static(`./public/pages`));

app.use('/api/users' ,userRouter)
app.use('/api/enemy' ,enemyRouter)
app.use('/api/tower' ,towerRouter)
app.use('/api/game' ,gameRouter)

app.listen(3000, () => {
  console.log("server listen on port 3000");
});