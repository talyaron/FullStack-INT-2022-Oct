import Student from "../models/StudentModel";
import Course from "../models/CourseModel";
import { NextFunction, Response, Request } from "express";

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

export const getStudentsInCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: courseId } = req.params;
    const course = await Course.findById(courseId);
    const students = await Student.find({ courses: course });
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
    const { name, courseId } = req.body;
    const course = await Course.findById(courseId);
    const student = await Student.create({ name, courses: [course] });
    console.log(student);
    const students = await Student.find({});
    res.status(200).json({ students });
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
    const students = await Student.find({});
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
