import ExamModel from "../exams/examsModel";
import GradeModel, { GradeSchema } from "../grades/gradesModel";
import StudentModel from "./studentsModel";
import { v4 as uuidv4 } from "uuid";



export const getStudents = async (req: any, res: any) => {
  try {
    const filterQuery = req.query??{};
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

export const createStudent = async (req: any, res: any) => {
  const { name, lastName, examsId} = req.body;
  const examDB = await ExamModel.findById(examsId);
  if (!examDB) throw new Error("cant find exam")
  const studentDB = await StudentModel.create({name, lastName, exams:examDB});

  res.status(200).send({ studentDB });
};

