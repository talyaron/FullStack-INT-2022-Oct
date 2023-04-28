import CourseModel from "./coursesModel";
import StudentModel,{Student} from "../students/studentModel";
import ExamModel from "../exams/examsModel";

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
    const { name , examId} = req.body;
    const examDB = await ExamModel.findById(examId);
    if(!examDB) throw new Error("examDB doesnt found");

    const courseDB = await CourseModel.create({name,exam:examDB})
    res.status(201).send({ Course:courseDB });
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

