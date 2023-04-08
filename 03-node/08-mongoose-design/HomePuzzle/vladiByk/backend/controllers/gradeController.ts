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

export const getGrade = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: gradeId } = req.params;
    const grade = await Grade.findById({ _id: gradeId });
    res.status(200).send({ grade });
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
    const { grade, courseId, studentId } = req.body;
    const student = await Student.findById(studentId);
    const course = await Course.findById(courseId);
    if (student || course) {
      await Grade.create({
        grade,
        course: course,
        student: student,
      });
    }
    const grades = await Grade.find({});
    res.status(200).json({ grades });
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
    const { id: gradeId } = req.body;
    const grade = await Grade.deleteOne({ _id: gradeId });
    const grades = await Grade.find({});

    res.status(200).send({ grades });
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
    const data = req.body;
    const grades = await Grade.find({});
    const grade = await Grade.findById({ _id: gradeId });
    res.status(200).send("Grade updated...");
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
