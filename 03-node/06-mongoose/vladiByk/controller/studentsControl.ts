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
    console.log(req.params);
    const { id: studentId } = req.params;
    const student = await Student.findOneAndDelete({ _id: studentId });
    if (!student)
      res.status(404).json({ msg: `no task with the id: ${studentId}` });
    res.status(200).redirect("/");
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateStudent = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const studentList = req.body;
    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
