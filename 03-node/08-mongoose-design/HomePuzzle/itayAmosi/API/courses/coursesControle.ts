import GradeModel, { GradeSchema } from "../grades/gradesModel";
import { TeacherSchema } from "../teachers/teachersModel";
import CourseModel from "./coursesModel";
import { v4 as uuidv4 } from "uuid";

export const addMockCourse = async (req:any, res:any) => {
  const {name} = req.body;
    const newCourse = await CourseModel.create({name});
      res.status(200).send({ Course: newCourse });
    };

    export const getCoursesByIds = async (req: any, res: any) => {
      try {
        const ids = req.query.ids.split(',');
        const courses = await CourseModel.find({ _id: {$in:ids}});
    
        res.send({ courses });
      } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    };

    