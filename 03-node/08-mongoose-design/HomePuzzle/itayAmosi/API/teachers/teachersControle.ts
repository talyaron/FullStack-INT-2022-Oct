import { CourseSchema } from "../courses/coursesModel";
import TeacherModel from "./teachersModel";
import { v4 as uuidv4 } from "uuid";

export const addMockTeacher = async (req:any, res:any) => {
    const newTeacher = await TeacherModel.create({
        uid: uuidv4(),
        name: uuidv4().slice(0, 7),
        courses: [CourseSchema],
      });
      console.log(newTeacher);
      res.status(200).send({ ok: true, newTeacher });
    };