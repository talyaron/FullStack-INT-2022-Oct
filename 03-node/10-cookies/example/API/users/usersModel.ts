import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "../courses/coursesModel";
//schema

interface User {
  // public uid: string = uuid();
  name: string;
  src?: string;
  password:string;
}
//typescript
export enum UserType {
  STUDENT = "student",
  TEACHER = "teacher",
  ADMIN = "admin",
}

export const UserSchema = new Schema({
  name: {require:true, type:String},
  src: String,
  password:{require:true, type:String},
  // courses:[String] //[courseId] slow but accurate
  userType: {
    type: String,
    enum: UserType,
    default: UserType.STUDENT,
  },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
