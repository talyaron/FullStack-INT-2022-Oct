import CourseModel from "./coursesModel";
import StudentModel from "../students/studentsModel";


export const addCourse = async (req:any, res:any) => {
    try {

      const { course , studentId } = req.body;
      console.log("course", course);
      console.log("studentId", studentId);
      
      const student = await StudentModel.findById(studentId);
      if(!student) throw new Error("no student found")
      console.log("student", student);
      
      const courseDB = await CourseModel.create({name: course});
      console.log("courseDB.name", courseDB.name);
      
      student.courses.push(courseDB);
      console.log("student", student);

      await student.save()

      const students = await StudentModel.find({})
      console.log("students", students);
      

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