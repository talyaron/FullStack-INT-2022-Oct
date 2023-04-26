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

export const getGradesByStudentId = async (req: any, res: any) => {
  try {
    const studentId = req.query.studentId;
    const grades = await GradeModel.find({ studentId });
    res.send({ grades });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const createGrade = async (req: any, res: any) => {
  const { grade } = req.body;
  const GradeDB = await GradeModel.create({grade});
  
  res.status(200).send({ Grade: GradeDB });
};


export const getStudentGradesInCourse = async (req: any, res: any) => {
  const { student, course } = req.query;
  // console.log(student, course);
  const gradesDB = await GradeModel.find({});

  res.status(200).send({ Grades: gradesDB });
};


