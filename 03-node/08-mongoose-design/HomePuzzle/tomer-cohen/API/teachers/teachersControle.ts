import { CourseSchema } from "../courses/coursesModel";
import TeacherModel from "./teachersModel";
import { v4 as uuidv4 } from "uuid";

export const addMockTeacher = async (req: any, res: any) => {
  try {
    const newTeacher = await TeacherModel.create({
      uid: uuidv4(),
      name: " teacher_" + uuidv4().slice(0, 7),
      lastName: uuidv4().slice(0, 7),
    });
    console.log(newTeacher);
    res.status(200).send({ ok: true, newTeacher });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getTeacher = async (req: any, res: any) => {
  try {
    const teachers = await TeacherModel.find({});
    res.send({ teachers });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteTeacher = async (req: any, res: any) => {
  try {
    const _id = req.query._id;
    if (!_id) throw new Error("now id find");
    await TeacherModel.deleteOne({ _id });
    console.log(_id);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateTeacherName = async (req: any, res: any) => {
    try {
      const { name, _id } = req.query;
      console.log(name, _id);
      if (!name) throw new Error("No name in data");
      if (!_id) throw new Error("No uid in data");
      const teacher = await TeacherModel.findOneAndUpdate({ _id }, { name });
      if (!teacher) throw new Error("No teacher in array");
      res.send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };