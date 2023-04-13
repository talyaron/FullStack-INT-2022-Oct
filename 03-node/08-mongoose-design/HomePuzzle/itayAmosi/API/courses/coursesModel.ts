import mongoose, { Schema } from "mongoose";

export interface Course {
  _id: any;
  name: string;
}

export const CourseSchema = new Schema({
  name: String,
});

const CourseModel = mongoose.model("courses", CourseSchema);

export default CourseModel;
