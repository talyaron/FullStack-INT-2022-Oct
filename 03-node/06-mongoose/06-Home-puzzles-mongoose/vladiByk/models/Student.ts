import mongoose, { Schema } from "mongoose";

interface Student {
  name: string;
  grade: number;
}

const StudentSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    grades: [Number],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Student", StudentSchema);
