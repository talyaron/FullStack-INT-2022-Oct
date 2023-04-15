import mongoose, { Schema } from "mongoose";

interface Teacher {
  name: string;
  courses: [string];
}

export const TeacherSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<Teacher>("Teacher", TeacherSchema);
