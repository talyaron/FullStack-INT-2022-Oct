import { Request, Response } from "express";
import CourseModel from "./coursesModel";
import StudentModel,{Student} from "../students/studentModel";

export const addCourse = async (req: Request, res: Response) => {
  try {
    const { course, studentId } = req.body;
    const courseDB = await CourseModel.create({ name: course });
    const courseObj = { _id: courseDB._id, name: course };
    await StudentModel.findByIdAndUpdate(
      studentId,
      { $push: { courses: courseObj } },
      { new: true }
    );
    const courses = await CourseModel.find({});
    res.status(201).send({ ok: true, courses });
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const { courseId, name } = req.body;
    const course = await CourseModel.findByIdAndUpdate(
      courseId,
      { name },
      { new: true }
    );
    res.send({ ok: true, course });
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.body;
    const deletedCourse = await CourseModel.deleteOne({ _id: courseId });
    const courses = await CourseModel.find({});
    res.send({ ok: true, courses });
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};