import { promises } from "dns";
import CourseModel from "../courses/coursesModel";
import ExamModel from "../exams/examsModel";
import StudentModel from "../students/studentsModel";
import GradeModel from "./gradesModel";
import { v4 as uuidv4 } from "uuid";

export const addMockGrades = async (req: any, res: any) => {
  const newGrades = await GradeModel.create({
    uid: uuidv4(),
    grade: 100,
  });
  res.status(200).send({ ok: true, newGrades });
};



export const createGrade = async (req: any, res: any) => {
  const { grade } = req.body;
  const GradeDB = await GradeModel.create({grade});
  
  res.status(200).send({ Grade: GradeDB });
};


