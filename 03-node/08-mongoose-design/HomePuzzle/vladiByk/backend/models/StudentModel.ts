import mongoose, { Schema } from "mongoose";

interface Student {
  name: string;
  grades: [number];
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

export default mongoose.model<Student>("Student", StudentSchema);
