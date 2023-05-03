import mongoose, { Schema } from "mongoose";

export interface User {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}
export enum UserType {
  PUBLIC = "public",
  ADMIN = "admin",
}

export const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: String,
  userType: {
    type: String,
    enum: UserType,
    default: UserType.PUBLIC,
  },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
