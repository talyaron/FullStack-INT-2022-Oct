import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { CourseSchema } from "../courses/coursesModel";

export class Teacher {
    public uid: string = uuidv4();
    constructor(
      public name: string,
      public lastname: string,
    ) {}
}

export const TeacherSchema = new Schema ({
    uid: String,
    name: String,
    courses: [CourseSchema],
});

const TeacherModel = mongoose.model("teachers", TeacherSchema);

export default TeacherModel;