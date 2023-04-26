import mongoose, { Schema } from "mongoose";

export const enrollmentSchema = new Schema({
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course'
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    }
  });

export const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
