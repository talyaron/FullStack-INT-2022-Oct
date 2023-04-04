import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { config } from "./config/config";
import Logging from "./library/Logging";

const app = express();

const StartServer = async () => {
  //connect to db
  await mongoose
    .connect(config.mongo.url, { retryWrites: true, w: "majority" })
    .then(() => {
      Logging.info("Connected to DB..");
    })
    .catch((err) => {
      Logging.error("Unable to connect");
      Logging.error(err);
    });
  /** Log the request */
  app.use((req: Request, res: Response, next: NextFunction) => {
    /** Log the req */
    Logging.info(
      `Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      /** Log the res */
      Logging.info(
        `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
      );
    });

    next();
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  /** Rules of our API */
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method == "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }

    next();
  });

  //routes
  // app.use("/authors", autherRoutes);

  app.get("/ping", (req: Request, res: Response, next: NextFunction) =>
    res.status(200).json({ msg: "pong" })
  );

  app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error("Not found");

    Logging.error(error);

    res.status(404).json({
      message: error.message,
    });
  });

  app.listen(config.server.port, () =>
    Logging.info(`Server is running on port ${config.server.port}`)
  );
};

StartServer();
