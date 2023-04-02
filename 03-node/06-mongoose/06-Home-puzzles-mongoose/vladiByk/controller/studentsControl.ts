import Student from "../models/Student";
import { NextFunction, Response, Request } from "express";
import path from "path";

export const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const students = await Student.find({});
    res.status(200).json({ students });
  } catch (error) {
    console.error(error);
  }
};

export const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, grade } = req.body;
    const student = new Student({ name, grades: [grade] });
    await student.save();
    res.status(200).redirect("/");
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: studentId } = req.params;
    const student = await Student.deleteOne({ _id: studentId });
    const students = await Student.find({});
    console.log(students);

    res.status(200).send({ students });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: studentId } = req.params;
    const data = req.body;
    const students = await Student.find({})
    const student = await Student.findById({ _id: studentId });
    if (!student) return res.status(404).send({ ok: false });
    if (!data.delete) {
      student.grades.push(data.grade);
      await student.save();
      return res.status(201).json({ students });
    }
    student.grades.splice(data.gradeIndex, 1);
    await student.save();
    res.status(201).json({ students });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
