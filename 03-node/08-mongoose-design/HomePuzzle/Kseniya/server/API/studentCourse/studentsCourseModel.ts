import mongoose, { Schema } from "mongoose";
import { ICourse, CourseSchema } from "../../../../../../mongoose-joins/example/API/courses/coursesModel";
import { IStudent, StudentSchema } from "../students/studentsModel";

export interface IStudentCourse {
    student: IStudent;
    course: ICourse;
  }

  export const StudentCourseSchema = new Schema({
    student: StudentSchema,
    course: CourseSchema
  });

  const StudentCourseModel = mongoose.model("studentCourse", StudentCourseSchema);

export default StudentCourseModel;