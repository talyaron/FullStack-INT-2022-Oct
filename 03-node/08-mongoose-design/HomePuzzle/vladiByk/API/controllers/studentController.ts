import Student from "../models/StudentModel";
import Course from "../models/CourseModel";
import Grade from "../models/GradeModel";
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

export const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, courseId } = req.body;
    const course = await Course.findById(courseId);
    const student = await Student.create({ name, courses: [course] });
    // const students = await Student.find({});
    res.status(200).json({ student });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    res.status(200).json({ student });
  } catch (error) {
    console.error(error);
  }
};

export const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const { courseId } = req.body;
    const findCourse = await Course.findById(courseId);
    const findStudent = await Student.findById(studentId);
    const deleteGrades = await Grade.deleteOne({
      course: findCourse,
      student: findStudent,
    });
    await Student.deleteOne({ _id: studentId });
    const students = await Student.find({});

    res.status(200).json({ students });
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
    const { studentId } = req.params;
    const { newName } = req.body;
    await Student.findByIdAndUpdate(studentId, {
      name: newName,
      _id: studentId,
    });
    const student = await Student.findById(studentId);
    res.status(201).json({ student });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const emptyCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const students = await Student.deleteMany({});
    res.status(201).json({ students });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getStudentsInCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    const students = await Student.find({ courses: course });
    res.status(200).json({ students });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteAllStudentsInCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    const deletedStudents = await Student.deleteMany({ courses: course });
    const students = await Student.find({});

    res.status(200).json({ deletedStudents });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
