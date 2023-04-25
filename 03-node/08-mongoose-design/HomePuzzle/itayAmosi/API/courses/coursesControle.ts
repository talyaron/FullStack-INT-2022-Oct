import ExamModel from "../exams/examsModel";
import GradeModel, { GradeSchema } from "../grades/gradesModel";
import StudentModel from "../students/studentsModel";
import { TeacherSchema } from "../teachers/teachersModel";
import CourseModel from "./coursesModel";
import { v4 as uuidv4 } from "uuid";

export const createCourse = async (req:any, res:any) => {
  const {name, examsId} = req.body;
  const examDB = await ExamModel.findById(examsId);
  if(!examDB) throw new Error(`cant find exam`)
    const courseDB = await CourseModel.create({ name, exam: examDB });
      res.status(200).send({ Course: courseDB });
    };

    export const getCourses = async (req: any, res: any) => {
      try {
        const courses = await CourseModel.find({});
    
        res.send({ courses });
      } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    };

    