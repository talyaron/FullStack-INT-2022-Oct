import express from "express";
const notificationRouter = express.Router();

import {
  getAllNotifications,
  createNotification,
} from "../controller/notificationController";

notificationRouter.route("/").get(getAllNotifications).post(createNotification);

notificationRouter.route("/:id");

export { notificationRouter };
