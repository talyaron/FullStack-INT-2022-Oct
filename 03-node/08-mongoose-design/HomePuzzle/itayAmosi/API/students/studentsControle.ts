import GradeModel, { GradeSchema } from "../grades/gradesModel";
import StudentModel from "./studentsModel";
import { v4 as uuidv4 } from "uuid";

export const getStudents = async (req: any, res: any) => {
  try {
    const filterQuery = req.query ?? {};
    const students = await StudentModel.find(filterQuery);
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
    name: "student_" + uuidv4().slice(0, 7),
    lastName: uuidv4().slice(0, 7),
    courses: [
      "64383c4308c863c15e9fb645",
      "64383c4608c863c15e9fb647",
      "64383c4608c863c15e9fb649",
      "64383c4608c863c15e9fb64b",
    ],
  });
  await GradeModel.create({
    grade: Math.floor(Math.random() * 100) + 1,
    studentId: newStudent._id.toString(),
    courseId: "64383c4308c863c15e9fb645", //English class
  });
  await GradeModel.create({
    grade: Math.floor(Math.random() * 100) + 1,
    studentId: newStudent._id.toString(),
    courseId: "64383c4608c863c15e9fb647", //History class
  });
  await GradeModel.create({
    grade: Math.floor(Math.random() * 100) + 1,
    studentId: newStudent._id.toString(),
    courseId: "64383c4608c863c15e9fb649", //gym class
  });
  await GradeModel.create({
    grade: Math.floor(Math.random() * 100) + 1,
    studentId: newStudent._id.toString(),
    courseId: "64383c4608c863c15e9fb64b", //science class
  });
  res.status(200).send({ ok: true, newStudent });
};
