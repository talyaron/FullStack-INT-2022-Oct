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
      
      const {courseId , studentId } = req.body;

      console.log("courseId" , courseId);
      
    
      const student = await StudentModel.findById(studentId);
      if(!student) throw new Error("no student found");
      console.log("student.name", student.name);

      const course = await CourseModel.findById(courseId);
      if(!course) throw new Error("no course found");
      console.log("course._id", course._id);
      

      const courseIndex = student.courses.findIndex(() => {
        console.log("course", course);
        course._id === courseId;
      })

      

      console.log("courseIndex", courseIndex);
      student.courses.splice(courseIndex, 1);

      const deletedCourse = await CourseModel.findOneAndDelete(courseId);
      
      await student.save();
      const students = await StudentModel.find({})
      
      res.send({ ok: true, students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }