import GradeModel, { GradeSchema } from "../grades/gradesModel";
import { TeacherSchema } from "../teachers/teachersModel";
import CourseModel from "./coursesModel";
import { v4 as uuidv4 } from "uuid";

export const addMockCourse = async (req: any, res: any) => {
  try {
    const newCourse = await CourseModel.create({
      uid: uuidv4(),
      name: "English Class",
    });
    console.log(newCourse);
    res.status(200).send({ ok: true, newCourse });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getCourse = async (req: any, res: any) => {
  try {
    const courses = await CourseModel.find({});
    res.send({ courses });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
