// import { Student, StudentTemplate } from "../models/Student";
import { readFileSync, writeFileSync } from "fs";

export const getAllStudents = async (req: any, res: any) => {
  const readFile = readFileSync("studentList.json", "utf-8");
  const students = JSON.parse(readFile);
  res.status(200).json({ students });
};

export const createStudent = async (req: any, res: any) => {
  try {
    const studentList = req.body;
    console.log(studentList);
    writeFileSync("studentList.json", JSON.stringify(studentList));
    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
