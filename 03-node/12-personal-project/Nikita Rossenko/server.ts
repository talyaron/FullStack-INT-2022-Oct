import express from "express";
const app = express();
const serverPort = 5000;
import * as dotenv from "dotenv";
dotenv.config();

import cookieParser from 'cookie-parser';

// DB
import moongose, { Schema } from "mongoose";
const uri:string | undefined = process.env.MONGODB_URI;
if (uri) {
    moongose
        .connect(uri)
        .then(() => {
            console.log("DB Connected!");
        })
        .catch((err) => {
            console.log(err);
        });
} else {
    console.log("Invlaid DB URI!");
}

// Routes Import
import loginRouter from "./API/routes/loginRoutes/loginRoute";
import registerRouter from "./API/routes/registerRoutes/registerRoute";
import itemsRouter from "./API/routes/itemsRoutes/itemsRouter";
import cartRouter from "./API/routes/cartRoutes/cartRouter";

app.use(express.static("public"));
app.use(express.static("public/index"));
app.use(express.static("public/login"));
app.use(express.static("public/register"));
app.use(express.static("public/ship-store"));
app.use(express.static("public/style"));
app.use(express.json());
app.use(cookieParser())

// Routes Use
app.use("/api/v1.0/users", loginRouter);
app.use("/api/v1.0/users", registerRouter);
app.use("/api/v1.0/items", itemsRouter);
app.use("/api/v1.0/cart", cartRouter);

app.listen(serverPort, () => {
    console.log(`Server started at port ${serverPort}`);
});
