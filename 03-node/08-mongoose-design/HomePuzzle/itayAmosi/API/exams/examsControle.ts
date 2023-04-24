import CourseModel from "../courses/coursesModel";
import GradeModel from "../grades/gradesModel";
import ExamModel from "./examsModel";

export const createExam = async (req: any, res: any) => {
  const { name, topic, gradesId } = req.body;
  const gradesDB = await GradeModel.findById(gradesId);
  if (!gradesDB) throw new Error(`cant find gradeDB`);
  const examDB = await ExamModel.create({ name, topic, grades:gradesDB });

  res.status(200).send({ Exam: examDB });
};
