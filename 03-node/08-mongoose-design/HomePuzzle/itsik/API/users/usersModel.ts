import mongoose, {Schema} from "mongoose";
import { CourseSchema } from "../courses/coursesModel";
//schema

interface User {
  // public uid: string = uuid();
  name: string;
  src: string;
}

export const UserSchema = new Schema({
    name: String,
    src: String,
    // courses:[String] //[courseId] slow but accurate
    courses:[CourseSchema] //fast, but not accurate -> cron jobs
  });
  
  const UserModel = mongoose.model("users", UserSchema);

  export default UserModel;