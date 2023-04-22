import CourseModel from "../courses/coursesModel";
import ExamModel from "./examsModel";

export const addMockExam = async (req: any, res: any) => {
  const { name, topic, courseId } = req.body;
  const courseDB = await CourseModel.findById(courseId);
  if (!courseDB) throw new Error(`cant find CourseDB`);

  const newExam = await ExamModel.create({ name, topic, course:courseDB });

  res.status(200).send({ Exam: newExam });
};
