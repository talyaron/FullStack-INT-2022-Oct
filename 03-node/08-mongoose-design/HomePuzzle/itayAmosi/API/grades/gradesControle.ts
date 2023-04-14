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
    const grades = await GradeModel.find({studentId});
    res.send({ grades });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};