import CourseModel from "./coursesModel";
import StudentModel,{Student} from "../students/studentModel";

export const createCourse = async (req:any, res:any) => {
  try {
    const {name} = req.body;
    const courseDB = await CourseModel.create({name});
    res.send({course:courseDB})
  } catch (error:any) {
    console.error(error);
      res.status(500).send({ error: error.message });
  }
};


export const addCourse = async (req: any, res: any) => {
  try {
    const { course, studentId } = req.body;
    const courseDB = await CourseModel.create({ name: course });
    const courseObj = { _id: courseDB._id, name: course };
    const student = await StudentModel.findByIdAndUpdate(
      studentId,
      { $push: { courses: courseObj } },
      { new: true }
    );
    res.status(201).send({ ok: true, student });
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};

export const updateCourse = async (req: any, res: any) => {
  try {
    const { courseId, name } = req.body;
    const course = await CourseModel.findByIdAndUpdate(
      courseId,
      { name },
      { new: true }
    );
    res.send({ ok: true, course });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};

export const deleteCourse = async (req: any, res: any) => {
  try {
    const { courseId } = req.body;
    const deletedCourse = await CourseModel.deleteOne({ _id: courseId });
    const courses = await CourseModel.find({});
    res.send({ ok: true, courses });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
  }
};

