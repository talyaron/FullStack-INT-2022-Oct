import StudentModel from "../students/studentsModel";
import GradeModel from "./gradesModel";
import { v4 as uuidv4 } from "uuid";

// export const getStudentGradesInCourse = async (req: any, res: any) => {
//   try {
//     //got from the client
//     const { courseId, studentId } = req.query;

//     const grades = await GradeModel.find({
//       course: { _id: courseId },
//       user: { _id: studentId },
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
    name: uuidv4().slice(0, 7),
    grade: [100],
  });
  console.log(newGrades);
  res.status(200).send({ ok: true, newGrades });
};