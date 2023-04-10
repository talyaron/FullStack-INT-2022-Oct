import CourseModel from "./coursesModel";
import StudentModel from "../students/studentsModel";


export const addCourse = async (req:any, res:any) => {
    try {

      const { course , studentId } = req.body;
      
      const student = await StudentModel.findById(studentId);
      if(!student) throw new Error("no student found")
   
      const courseDB = await CourseModel.create({name: course});
      
      student.courses.push(courseDB);

      await student.save();

      const students = await StudentModel.find({})
      
      res.status(201).send({ ok: true, students });
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