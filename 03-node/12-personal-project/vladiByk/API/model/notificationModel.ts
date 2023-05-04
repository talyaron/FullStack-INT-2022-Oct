import mongoose, { Schema } from "mongoose";

export interface NotificationInterface {
  message: string;
  _id: string;
}

export const NotificationSchema: Schema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<NotificationInterface>("Notification", NotificationSchema);
