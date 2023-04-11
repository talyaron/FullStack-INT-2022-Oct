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
      
      const student = await StudentModel.findById(studentId);
      if(!student) throw new Error("no student found");

      const course = await CourseModel.findById(courseId);
      if(!course) throw new Error("no course found");

      const courseIndex = student.courses.findIndex((course) => course._id?.toString() === courseId.toString())
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










  // export const getStudentGradesInCourse = async (req: any, res: any) => {
//     try {
//       //got from the client
//       const { courseId, studentId } = req.query;
//       //https://docs.oracle.com/en/cloud/saas/cx-commerce/21b/ccdev/rest-api-query-parameters.html
  
//       const grades = await GradeModel.find({
//         course: { _id: courseId },
//         user: { _id: studentId },
//       });
//       res.send({ grades });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   };