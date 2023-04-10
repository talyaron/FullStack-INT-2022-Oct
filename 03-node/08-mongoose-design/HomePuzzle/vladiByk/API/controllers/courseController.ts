import Course from "../models/CourseModel";
import Teacher from "../models/TeacherModel";
import { NextFunction, Response, Request } from "express";

export const getAllCourses = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const teacherId = req.query.teacherId;
    const teacher = await Teacher.findById(teacherId);
    const courses = await Course.find({ teachers: teacher });
    console.log(courses);
    res.status(200).json({ courses });
  } catch (error) {
    console.error(error);
  }
};

export const getCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: courseId } = req.params;
    const course = await Course.findById({ _id: courseId });
    res.status(200).send({ course });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, teacherId } = req.body;
    const teacher = await Teacher.findById(teacherId);
    const course = await Course.create({ name: name, teachers: [teacher] });
    res.status(200).json({ msg: `Teacher ${course} is created...` });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: courseId } = req.params;
    const course = await Course.deleteOne({ _id: courseId });
    const courses = await Course.find({});

    res.status(200).send({ courses, course });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: courseId } = req.params;
    const data = req.body;
    const courses = await Course.find({});
    const course = await Course.findById({ _id: courseId });
    res.status(201).json({ msg: "Updating course..." });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
