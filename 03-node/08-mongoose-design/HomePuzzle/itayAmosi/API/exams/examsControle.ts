import CourseModel from "../courses/coursesModel";
import GradeModel from "../grades/gradesModel";
import StudentModel from "../students/studentsModel";
import ExamModel from "./examsModel";

export const createExam = async (req: any, res: any) => {
  const { name, topic, studentsId } = req.body;
  const studentDB = await StudentModel.findById(studentsId);
  console.log(studentDB);
  if (!studentDB) throw new Error(`cant find studentDB`);
  const examDB = await ExamModel.create({ name, topic, student:studentDB });

  res.status(200).send({ Exam: examDB });
};

export const getExams = async (req: any, res: any) => {
  try {
    const filterQuery = req.query??{};
    const exams = await ExamModel.find({});

    res.send({ exams });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};