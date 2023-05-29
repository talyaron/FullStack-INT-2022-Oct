import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "../courses/coursesModel";

interface User {
  name: string;
  password: string;
  userType: string;
}

export enum UserType {
  STUDENT = "student",
  TEACHER = "teacher",
  ADMIN = "admin",
}

export const UserSchema = new Schema({
  name: String,
  password: String,
  // courses:[String] //[courseId] slow but accurate
  userType: {
     type: String,
     enum: UserType,
     default: UserType.STUDENT,
  },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
