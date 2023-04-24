import GradeModel, { GradeSchema } from "../grades/gradesModel";
import StudentModel from "../students/studentsModel";
import { TeacherSchema } from "../teachers/teachersModel";
import CourseModel from "./coursesModel";
import { v4 as uuidv4 } from "uuid";

export const addMockCourse = async (req:any, res:any) => {
  const {name, studentId, } = req.body;
  const studentDB = await StudentModel.findById(studentId);
  if (!studentDB) throw new Error(`cant find studentDB`)
    const courseDB = await CourseModel.create({ name , student:studentDB });
      res.status(200).send({ Course: courseDB });
    };

    export const getCoursesByIds = async (req: any, res: any) => {
      try {
        const ids = req.query;
        const courses = await CourseModel.find({});
    
        res.send({ courses });
      } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    };

    