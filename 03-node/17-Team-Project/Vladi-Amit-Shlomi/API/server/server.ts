import express, { NextFunction, Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import { config } from "../config/config";

//routers
import { userRouter } from "../routes/userRoutes";
import { boardRouter } from "../routes/boardRoutes";
import { deckRouter } from "../routes/deckRouter";
import { gameRouter } from "../routes/gameRoutes";
import { playerRouter } from "../routes/playerRoutes";

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:8080",
  },
});

StartServer();

async function StartServer() {
  await mongoose
    .connect(config.mongo.url, { retryWrites: true, w: "majority" })
    .then(() => {
      console.log("Connected to DB...");
    })
    .catch((err) => {
      console.error(err);
    });

  //middleware
  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  //routes
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/games", gameRouter);
  app.use("/api/v1/players", playerRouter);
  app.use("/api/v1/boards", boardRouter);
  app.use("/api/v1/decks", deckRouter);

  app.get("/signIn", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, "../../public", "login.html"));
  });

  app.get("/signUp", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, "../../public", "register.html"));
  });

  app.get("/profile", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, "../../public", "profile.html"));
  });

  app.get("/game", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, "../../public", "game.html"));
  });

  server.listen(config.server.port, () => {
    console.log(`Server is listening on port ${config.server.port}...`);
  });

  io.on("connection", (socket) => {
    console.log("new web socket connection: ", socket.id);
    socket.on("buttonClicked", (id: string) => {
      socket.broadcast.emit("broadcast", id)
    });
  });
}
