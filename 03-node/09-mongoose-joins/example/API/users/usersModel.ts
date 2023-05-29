import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "../courses/coursesModel";
//schema

interface User {
  // public uid: string = uuid();
  name: string;
  src: string;
}
//typescript
export 
 UserType {
  STUDENT = "student",
  TEACHER = "teacher",
  ADMIN = "admin",
}

export const UserSchema = new Schema({
  name: String,
  src: String,
  // courses:[String] //[courseId] slow but accurate
  userType: {
    type: String,
    enum: UserType,
    default: UserType.STUDENT,
  },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
