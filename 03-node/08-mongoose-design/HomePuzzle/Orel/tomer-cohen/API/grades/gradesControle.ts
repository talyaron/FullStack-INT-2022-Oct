import StudentModel from "../student/studentModel";
import GradeModel from "./gradesModel";
import { v4 as uuidv4 } from "uuid";

export const addMockGrades = async (req: any, res: any) => {
  try {
    const newGrades = await GradeModel.create({
      uid: uuidv4(),
      grade: 100,
    });
    console.log(newGrades);
    res.status(200).send({ ok: true, newGrades });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getGrade = async (req: any, res: any) => {
  try {
    const grades = await GradeModel.find({});
    res.send({ grades });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
