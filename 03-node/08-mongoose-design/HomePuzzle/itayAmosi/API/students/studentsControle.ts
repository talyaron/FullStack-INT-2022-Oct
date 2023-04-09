import CourseModel, { CourseSchema } from "../courses/coursesModel";
import { GradeSchema } from "../grades/gradesModel";
import StudentModel from "./studentsModel";
import { v4 as uuidv4 } from "uuid";

export const addStudentGrades = async (req: any, res: any) => {
  const { name, lastname, englishClass, mathClass, sportsClass, historyClass } =
    req.body;
  if (
    !name ||
    !lastname ||
    !englishClass ||
    !mathClass ||
    !sportsClass ||
    !historyClass
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const newStudent = await StudentModel.create({
    name,
    lastname,
    englishClass,
    mathClass,
    sportsClass,
    historyClass,
    uid: uuidv4(),
  });
  res.status(200).send({ ok: true, newStudent });
};

export const addMockStudent = async (req: any, res: any) => {
  const newStudent = await StudentModel.create({
    name: uuidv4().slice(0, 7),
    lastname: "moshe",
    englishClass: 70,
    mathClass: 80,
    sportsClass: 90,
    historyClass: 89,
    uid: uuidv4(),
    avg: 564,
  });
  console.log(newStudent);
  res.status(200).send({ ok: true, newStudent });
};

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
    const uid = req.query.uid;
    if (!uid) throw new Error("Invalid to find uid");
    await StudentModel.deleteOne({ uid });
    res.sendStatus(200);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateStudentName = async (req: any, res: any) => {
  try {
    const { name, uid } = req.query;
    console.log(name, uid);
    if (!name) throw new Error("No name in data");
    if (!uid) throw new Error("No uid in data");
    const student = await StudentModel.findOneAndUpdate({ uid }, { name });
    if (!student) throw new Error("No student in array");
    // console.log(req.query)
    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const addMockStudents = async (req: any, res: any) => {
  const newStudent = await StudentModel.create({
    uid: uuidv4(),
    name: uuidv4().slice(0, 7),
    lastname: uuidv4().slice(0, 7),
    courses: CourseSchema,
    grades: GradeSchema,
  });
  console.log(newStudent);
  res.status(200).send({ ok: true, newStudent });
};
