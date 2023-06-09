import mongoose, { Schema } from "mongoose";
import {CartSchema}  from "../cart/CartModel";

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
    cart: CartSchema,
  },
});

export const getUserSchema = new Schema({
  cart: CartSchema,
})

const UserModel = mongoose.model("users", UserSchema);
export const getUser = mongoose.model("getUser", getUserSchema);

export default UserModel;
