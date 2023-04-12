import GradeModel, { GradeSchema } from "../grades/gradesModel";
import StudentModel from "./studentsModel";
import { v4 as uuidv4 } from "uuid";



export const getStudents = async (req: any, res: any) => {
  try {
    const students = await StudentModel.find({});

    res.send({ students });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
// export const findStudents = async (req: any, res: any) => {
//   try {


//   res.send({ user });
// } catch (error: any) {
//   console.error(error);
//   res.status(500).send({ error: error.message });
// }
// };

export const deleteStudent = async (req: any, res: any) => {
  try {
    const _id = req.query._id;
    if (!_id) throw new Error("Invalid to find _id");
    await StudentModel.deleteOne({ _id });
    res.sendStatus(200);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateStudentName = async (req: any, res: any) => {
  try {
    const { name, _id } = req.query;
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

export const addMockStudent = async (req: any, res: any) => {
  const newStudent = await StudentModel.create({
    uid: uuidv4(),
    name: "student_"+uuidv4().slice(0, 7),
    lastName: uuidv4().slice(0, 7),
    courses: ["6435c4a5d371943c1cb39103","6435c4e5d371943c1cb39120", "6435c4e5d371943c1cb3911c", "6435c4e5d371943c1cb3911e"],
  });
  await GradeModel.create({
    grade: Math.floor(Math.random() * 100) + 1,
    studentId: newStudent._id.toString(), courseId: "6435c4a5d371943c1cb39103"
  });
  await GradeModel.create({
    grade: Math.floor(Math.random() * 100) + 1,
    studentId: newStudent._id.toString(), courseId: "6435c4e5d371943c1cb39120"
  });
  await GradeModel.create({
    grade: Math.floor(Math.random() * 100) + 1,
    studentId: newStudent._id.toString(), courseId: "6435c4e5d371943c1cb3911c"
  });
  await GradeModel.create({
    grade: Math.floor(Math.random() * 100) + 1,
    studentId: newStudent._id.toString(), courseId: "6435c4e5d371943c1cb3911e"
  });
  res.status(200).send({ ok: true, newStudent });
};
