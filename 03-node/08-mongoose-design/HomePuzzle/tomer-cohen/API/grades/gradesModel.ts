import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "../courses/coursesModel";
import { StudentSchema } from "../student/studentModel";
import { v4 as uuidv4 } from "uuid";


export interface Grade{
    _id: string,
    grade: number,
    gradCourse: typeof CourseSchema;
}

export const GradeSchema= new Schema({
    grade: Number,
    gradeCourse: CourseSchema,
});

const GradeModel= mongoose.model("grades", GradeSchema);

export default GradeModel;

