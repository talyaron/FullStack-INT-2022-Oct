import mongoose, { Schema } from "mongoose";
import { BoardInterface } from "./BoardModel";
import { NotificationInterface } from "./notificationModel";
export interface UserInterface {
  firstName: string;
  lastName: string;
  gender: string;
  userName: string;
  password: string;
  email: string;
  boardList: [BoardInterface];
  notifications: [NotificationInterface];
  _id: string;
}

export const UserSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<UserInterface>("User", UserSchema);
