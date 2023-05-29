import mongoose, { Schema } from "mongoose";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  highScore: number;
  ROLE: ROLE;
  gamesPlayed:number;
  src?:string
  resolution:number
}

export enum ROLE {
  PUBLIC = "public",
  ADMIN = "admin",
}

export const UserSchema = new Schema<User>({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  highScore:{
      type:Number,
      require:false,
      default: 0,
  } ,
  gamesPlayed:{
      type:Number,
      require:false,
      default: 0,
  } ,
  resolution:{
      type:Number,
      require:true,
      default: 1,
  } ,
  ROLE: {
    type: String,
    enum: ROLE,
    default: ROLE.PUBLIC,
  },
  src:String
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
