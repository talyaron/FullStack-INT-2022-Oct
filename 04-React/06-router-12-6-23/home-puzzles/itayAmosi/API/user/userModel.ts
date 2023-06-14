import mongoose, { Schema } from "mongoose";

interface User {
  name: string;
  username: string;
  email: string;
  phone:number;
  password:string;
  gender:string;
  ROLE: ROLE;
}

export enum ROLE {
  PUBLIC = "public",
  ADMIN = "admin",
}

export const UserSchema = new Schema<User>({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  gender:{
      type:String,
      require:false,
  } ,
  ROLE: {
    type: String,
    enum: ROLE,
    default: ROLE.PUBLIC,
  },
});

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;