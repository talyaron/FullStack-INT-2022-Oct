
import TeacherModel from "../teachers/teachersModel";
import CourseModel from "./coursesModel";


export const getCourse = async (req:any, res:any) => {
    try {
      const courses = await CourseModel.find({});
      res.send({ courses });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }


export const addCourse = async (req:any, res:any) => {
  try {
    const { courseName, teacherCourse } = req.body;
    console.log(req.body)

    //add users to DB;
    const teacherDB = await TeacherModel.create({ name:teacherCourse });
    console.log(teacherDB);
    const courseDB = await CourseModel.create({ name:courseName, teacher:teacherDB });

    console.log(courseDB);

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

  export const updateCourse = (req:any, res:any) => {
    try {
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }


  export const deleteCourse = async (req:any, res:any) => {
    try {
      const { _id } = req.body;
  
      const deleteCourse = await CourseModel.deleteOne({ _id });
      const courses = await CourseModel.find({});
  
      res.send({ success: true, courses });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const updateCourseName = async (req:any , res:any)=>{
    try{
        
    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
  }
