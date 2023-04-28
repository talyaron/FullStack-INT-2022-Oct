import Grade from "../models/GradeModel";
import Student from "../models/StudentModel";
import Course from "../models/CourseModel";
import { NextFunction, Response, Request } from "express";

export const getAllGrades = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const grades = await Grade.find({});
    res.status(200).json({ grades });
  } catch (error) {
    console.error(error);
  }
};

export const getStudentGradesInCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { courseId } = req.query;
    const { id: studentId } = req.params;
    const course = await Course.findById(courseId);
    const student = await Student.findById(studentId);
    const grades = await Grade.find({ course, student });
    res.status(200).send({ grades });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteAllGradesInCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    const grades = await Grade.deleteMany({ course });
    res.status(200).send({ grades });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const createGrade = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { score, courseId, studentId } = req.body;
    const student = await Student.findById(studentId);
    const course = await Course.findById(courseId);
    if (student || course) {
      const grade = await Grade.create({
        score,
        course: course,
        student: student,
      });
      res.status(200).json({ grade });
    } else {
      const grades = await Grade.find({});
      res.status(200).json({ grades });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteGrade = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: gradeId } = req.params;
    const grade = await Grade.findByIdAndDelete(gradeId);
    const grades = await Grade.find({});

    res.status(200).send({ grade });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateGrade = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: gradeId } = req.params;
    const { newScore } = req.body;
    await Grade.findByIdAndUpdate(gradeId, { score: newScore });
    const grade = await Grade.findById(gradeId);
    res.status(200).json({ grade });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const emptyCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const grades = await Grade.deleteMany({});
    res.status(201).json({ grades });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
