import { NextFunction, Response, Request } from "express";
import Notification from "../model/notificationModel";
import User from "../model/UserModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const getAllNotifications = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const notifications = await Notification.find({});
    res.status(200).json({ notifications });
  } catch (error) {
    console.error(error);
  }
};

export const createNotification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { message, userId } = req.body;

    const notification = await Notification.create({ message });

    await User.findByIdAndUpdate(userId, {
      $push: { notifications: notification._id },
    });

    res.status(200).send({ success: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
