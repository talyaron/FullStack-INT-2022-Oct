import { Student, StudentTemplate } from "../models/Student";
import { readFileSync, writeFile } from "fs";

export const getAllStudents = async (req: any, res: any) => {
  const readFile = readFileSync("studentList.json", "utf-8");
  const students = JSON.parse(readFile) as StudentTemplate[];
  res.status(200).json({ students });
};

export const createStudent = async (req: any, res: any) => {};
