import mongoose, { Schema } from "mongoose";

export interface LogIn {
  _id?:string
  name: string;
  password:string;
  role:string
}

export const logInSchema = new Schema({
  name:String,
  password:String,
  role:String
});

const logInModel = mongoose.model("log-in", logInSchema);

export default logInModel;
