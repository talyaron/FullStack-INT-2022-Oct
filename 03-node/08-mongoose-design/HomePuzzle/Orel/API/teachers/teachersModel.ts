import mongoose, { Schema } from "mongoose";

export interface Teacher {

  name: string;
}

export const TeacherSchema = new Schema({
  name: String,
});

const TeacherModel = mongoose.model("teachers" , TeacherSchema)

export default TeacherModel;
