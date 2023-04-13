import CourseModel from "./coursesModel";
import StudentModel from "../students/studentsModel";

export const getCourses = async (req: any, res:any) => {

  try {
    const courses = await CourseModel.find({})
    res.send(courses);
    return courses;

  } catch (error: any) {
     console.error(error);
    res.status(500).send({ error: error.message });
  }
 
}

export const addCourse = async (req:any, res:any) => {
    try {
      console.log(req.body)
        const {course} = req.body
        const courses = await CourseModel.find({})

        let isExist = courses?.find((elememt) => elememt._id == course._id);
        if (isExist !== undefined) {
          throw new Error("student already exists");
        }

        const courseDB = await CourseModel.create({
          name: course.name,
        });
        res.status(201).send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };



  
export const updateCourse = async (req:any, res:any) => {
    try {
      // const { name, uid } = req.body;
      // if (!name) throw new Error("No name in data");
      // if (!uid) throw new Error("No uid in data");
      // const user = users.find((user) => user.uid === uid);
      // if (!user) throw new Error("No user in array");
      // user.name = name;
      // res.send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const deleteCourse = async (req:any , res:any) => {
    try {
      const { _id } = req.body;
  
      const deletedUser = await CourseModel.deleteOne({_id})
      const courses = await CourseModel.find({})
     
      res.send({ ok: true, courses });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }