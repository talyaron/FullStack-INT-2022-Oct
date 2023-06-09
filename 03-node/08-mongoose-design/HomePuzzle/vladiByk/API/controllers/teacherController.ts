import Teacher from "../models/TeacherModel";
import Course from "../models/CourseModel";
import { NextFunction, Response, Request } from "express";

export const getAllTeachers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const teachers = await Teacher.find({});
    res.status(200).json({ teachers });
  } catch (error) {
    console.error(error);
  }
};

export const getTeacher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: teacherId } = req.params;
    const teacher = await Teacher.findById(teacherId);
    res.status(200).json({ teacher });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const createTeacher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;
    const teacher = await Teacher.create({ name });
    // await teacher.save();
    res.status(200).json({ msg: `Teacher ${teacher} is created...` });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteTeacher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: teacherId } = req.params;
    const teacher = await Teacher.deleteOne({ _id: teacherId });
    const teachers = await Teacher.find({});

    res.status(200).send({ teachers });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateTeacher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: teacherId } = req.params;
    const data = req.body;
    const teachers = await Teacher.find({});
    const teacher = await Teacher.findById({ _id: teacherId });

    res.status(201).json({ teachers });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
