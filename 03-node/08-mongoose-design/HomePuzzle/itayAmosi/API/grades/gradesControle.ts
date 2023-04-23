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
  const { grade, studentId, courseId, examId } = req.body;
  const [courseDB, studentDB, examDB] = await Promise.all([ CourseModel.findById(courseId),StudentModel.findById(studentId),ExamModel.findById(examId)] );
  if (!courseDB) throw new Error(`cant find CourseDB`);
  if (!studentDB) throw new Error(`cant find studentDB`);
  if (!examDB) throw new Error(`cant find examDB`);

  const GradeDB = await GradeModel.create({
    student: studentDB,
    exam: examDB,
    course: courseDB,
    grade,
  });

  res.status(200).send({ Grade: GradeDB });
};