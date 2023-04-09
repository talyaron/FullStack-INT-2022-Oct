import mongoose, {Schema} from "mongoose";
//import { CourseSchema } from "../courses/coursesModel";
//schema

interface Student {
  // public uid: string = uuid();
  name: string;
  familyName:string;
  phone:string;
}

export const StudentSchema = new Schema({
    name: String,
    familyName:String,
    phone:String
    // courses:[String] //[courseId] slow but accurate
    //courses:[CourseSchema] //fast, but not accurate -> cron jobs
  });
  
  const StudetModel = mongoose.model("students", StudentSchema);

  export default StudetModel;