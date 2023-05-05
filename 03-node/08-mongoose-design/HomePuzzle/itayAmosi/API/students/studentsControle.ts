import ExamModel from "../exams/examsModel";
import GradeModel from "../grades/gradesModel";
import StudentModel from "./studentsModel";
import {StudentGradesModel} from "./studentsModel";
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
  const { name, lastName, gradesId} = req.body;
  const gradeDB = await GradeModel.findById(gradesId);
  if (!gradeDB) throw new Error("cant find gradeDB")
  const studentDB = await StudentModel.create({name, lastName, grades:gradeDB});

  res.status(200).send({ studentDB });
};

export const getGradesByStudentId = async (req: any, res: any) => {
  try {
    const { name, studentId } = req.body;
    const studentDB = await StudentModel.findById(studentId);
    // const [gradesDB,studentDB ] = await Promise.all([GradeModel.findById(gradesId),StudentModel.findById(studentId)]);
    // if(!gradesDB && !studentDB) throw new Error(`cannot find gradesId in studentId`);
    console.log(studentDB);
    if(!studentDB) throw new Error(`cannot find studentId`);

    const StudentGradesDB = await StudentGradesModel.create({ name, student:studentDB });
    res.send({ StudentGrades: StudentGradesDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

