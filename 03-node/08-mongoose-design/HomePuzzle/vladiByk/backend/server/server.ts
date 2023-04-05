import express, { NextFunction, Request, Response } from "express";
const app = express();
import mongoose from "mongoose";
import { config } from "../config/config";
import { studentRouter } from "../routes/studentRoutes";
import { teacherRouter } from "../routes/teacherRoutes";

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
  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  //routes
  app.use("/api/v1/students", studentRouter);
  app.use("/api/v1/teachers", teacherRouter);

  app.listen(config.server.port, () => {
    console.log(`Server is listening on port ${config.server.port}...`);
  });
}
