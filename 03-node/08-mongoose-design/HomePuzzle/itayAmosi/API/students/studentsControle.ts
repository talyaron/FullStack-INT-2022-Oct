import { resolveSoa } from "dns";
import CourseModel, { CourseSchema } from "../courses/coursesModel";
import { GradeSchema } from "../grades/gradesModel";
import StudentModel from "./studentsModel";
import { v4 as uuidv4 } from "uuid";
import TeacherModel from "../teachers/teachersModel";

// export const addStudentGrades = async (req: any, res: any) => {
//   const { name, lastname, englishClass, mathClass, sportsClass, historyClass } =
//     req.body;
//   if (
//     !name ||
//     !lastname ||
//     !englishClass ||
//     !mathClass ||
//     !sportsClass ||
//     !historyClass
//   ) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }
//   const newStudent = await StudentModel.create({
//     name,
//     lastname,
//     englishClass,
//     mathClass,
//     sportsClass,
//     historyClass,
//     uid: uuidv4(),
//   });
//   res.status(200).send({ ok: true, newStudent });
// };

// export const addMockStudent = async (req: any, res: any) => {
//   const newStudent = await StudentModel.create({
//     name: uuidv4().slice(0, 7),
//     lastname: "moshe",
//     englishClass: 70,
//     mathClass: 80,
//     sportsClass: 90,
//     historyClass: 89,
//     uid: uuidv4(),
//     avg: 564,
//   });
//   console.log(newStudent);
//   res.status(200).send({ ok: true, newStudent });
// };

export const getStudents = async (req: any, res: any) => {
  try {
    const students = await StudentModel.find({});

    res.send({ students });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteStudent = async (req: any, res: any) => {
  try {
    const _id = req.query._id;
    if (!_id) throw new Error("Invalid to find _id");
    await StudentModel.deleteOne({ _id });
    console.log(_id)
    res.sendStatus(200);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateStudentName = async (req: any, res: any) => {
  try {
    const { name, _id } = req.query;
    console.log(name, _id);
    if (!name) throw new Error("No name in data");
    if (!_id) throw new Error("No uid in data");
    const student = await StudentModel.findOneAndUpdate({ _id }, { name });
    if (!student) throw new Error("No student in array");
    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const addMockStudents = async (req: any, res: any) => {
  const newStudent = await StudentModel.create({
    uid: uuidv4(),
    name: "student_"+uuidv4().slice(0, 7),
    lastName: uuidv4().slice(0, 7),
    courses: CourseSchema,
  });
  console.log(newStudent);
  res.status(200).send({ ok: true, newStudent });
};


