import StudentModel from "../students/studentsModel";
import GradeModel from "./gradesModel";
import { v4 as uuidv4 } from "uuid";

// export const getStudentGradesInCourse = async (req: any, res: any) => {
//   try {
//     //got from the client
//     const { courses, student } = req.query;

//     const grades = await GradeModel.find({
//       courses: { name: courses },
//       student: { name: student },
//     });
//     res.send({ grades });
//     console.log(grades);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// };

export const addMockGrades = async (req: any, res: any) => {
  const newGrades = await GradeModel.create({
    uid: uuidv4(),
    grade: 100,
  });
  console.log(newGrades);
  res.status(200).send({ ok: true, newGrades });
};

export const getGrade = async (req: any, res: any) => {
  try {
    const grades = await GradeModel.find({});

    res.send({ grades });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};