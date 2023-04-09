import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "../courses/coursesModel";
import { UserSchema } from "../users/usersModel";
//schema

interface Grade {
  name: string;
  src: string;
}

const GradeSchema = new Schema({
  grade: Number,
  user:UserSchema,
  course:CourseSchema
});

const GradeModel = mongoose.model("users", GradeSchema);

export default GradeModel;