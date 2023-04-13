import mongoose, { Schema } from "mongoose";
//schema

export interface Course {
  // public uid: string = uuid();
  name: string;
}

export const TeacherSchema = new Schema({
  name: String,
});

const TeacherModel = mongoose.model("courses", TeacherSchema);

export default TeacherModel;