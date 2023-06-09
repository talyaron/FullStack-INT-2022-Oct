import mongoose, { Schema } from "mongoose";
import { RecipeSchema } from "../Recipe/RecipeModel";

export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  img: string;
  email: string;
  password: string;
}

export const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  img: String,
  email: String,
  password: String,
  recipes: [RecipeSchema],
});

const UserModel = mongoose.model("profile", UserSchema);

export default UserModel;
