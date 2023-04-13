import { resolveSoa } from "dns";
import CourseModel, { CourseSchema } from "../courses/coursesModel";
import { GradeSchema } from "../grades/gradesModel";
import StudentModel from "./studentModel";
import { v4 as uuidv4 } from "uuid";
import TeacherModel from "../teachers/teachersModel";

export const getStudents = async (req: any, res: any) => {
  try {
    const student = await StudentModel.find({});
    res.send({ student });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteStudent = async (req: any, res: any) => {
  try {
    const _id = req.query._id;
    if (!_id) throw new Error("cant find _id");
    await StudentModel.deleteOne({ _id });
    console.log(_id);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateStudentName = async (req: any, res: any) => {
  try {
    const { name, _id } = req.query;
    console.log(name, _id);
    if (!name) throw new Error("no name in date");
    if (!_id) throw new Error("no id in date");
    const student = await StudentModel.findOneAndUpdate({ _id }, { name });
    if (!student) throw new Error("no student in date");
    res.send({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const addMockStudent = async (req: any, res: any) => {
  try {
    const newStudent = await StudentModel.create({
      uid: uuidv4(),
      name: "student_" + uuidv4().slice(0, 7),
      lestName: uuidv4().slice(0, 7),
      courses: CourseSchema,
    });
    console.log(newStudent);
    res.status(200).send({ ok: true, newStudent });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
