import StudentModel from "../students/studentModel";
import ExamModel from "./examsModel";


export const addExam = async (req:any, res:any) => {
    try {
      const { name , studentId } = req.body;
      const studentDB = await StudentModel.findById(studentId)
      if (!studentDB) {
        throw new Error("studentDB is missing from request body");
      }
      const examDB = await ExamModel.create({name,student:studentDB});
      
      res.status(200).send({exam:examDB});
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };
  
  
//   export const getStudents = async (req:any, res:any) => {
//     try {
//       const students = await StudentModel.find({});
//       res.send({ students });
//     } catch (error: any) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   }
  
