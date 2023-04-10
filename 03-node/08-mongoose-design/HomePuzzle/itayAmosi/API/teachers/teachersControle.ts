import { CourseSchema } from "../courses/coursesModel";
import TeacherModel from "./teachersModel";
import { v4 as uuidv4 } from "uuid";

export const addMockTeacher = async (req:any, res:any) => {
    const newTeacher = await TeacherModel.create({
        uid: uuidv4(),
        name: "teacher_" + uuidv4().slice(0, 7),
        lastName: uuidv4().slice(0, 7),
      });
      console.log(newTeacher);
      res.status(200).send({ ok: true, newTeacher });
    };

    export const getTeacher = async (req: any, res: any) => {
      try {
        const teachers = await TeacherModel.find({});
    
        res.send({ teachers });
      } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    };