import mongoose, { Schema } from "mongoose";

export enum UserUserRoleEnum {
  ADMIN = "admin",
  SIMPLE = "simple",
}

export interface UserInterface {
  firstName: string;
  lastName: string;
  gender: string;
  userName: string;
  password: string;
  email: string;
  userRole: string;
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
    userRole: {
      type: String,
      required: true,
      enum: UserUserRoleEnum,
      default: UserUserRoleEnum.SIMPLE,
    },
    // notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<UserInterface>("User", UserSchema);






