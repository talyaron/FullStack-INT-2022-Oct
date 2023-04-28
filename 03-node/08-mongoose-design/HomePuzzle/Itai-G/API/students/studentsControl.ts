import Grademodel from "../grades/gradesModel";
import StudentModel from "./studentModel";


export const addStudent = async (req:any, res:any) => {
    try {
      const { name , gradeId } = req.body;
      const gradeDB = await Grademodel.findById(gradeId)
      if (!gradeDB) {
        throw new Error("gradeDB is missing from request body");
      }
      const studentDB = await StudentModel.create({name,grade:gradeDB});
      
      res.status(200).send({Student: studentDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };
  
  
  export const getStudents = async (req:any, res:any) => {
    try {
      const students = await StudentModel.find({});
      res.send({ students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }
  
  export const updateStudentName = async (req:any, res:any) => {
    try {
      const { _id, updatedName } = req.body;
      if (!_id) {
        throw new Error("_id is missing from request body");
      }
      if (!updatedName) {
        throw new Error("updatedName is missing from request body");
      }
      const student = await StudentModel.findById(_id);
      if (!student) {
        throw new Error(`No student found with _id: ${_id}`);
      }
      const updatedNameDB = await StudentModel.updateOne({_id}, {name: updatedName});
      await student.save();
      const students = await StudentModel.find({})
      res.send({ ok: true, students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }
  
export const deleteStudent = async (req:any , res:any) => {
    try {
      const _id = req.body._id;
      if (!_id) {
        throw new Error("_id is missing from request body");
      }
      const deletedStudent = await StudentModel.deleteOne({_id})
      const students = await StudentModel.find({})
      res.send({ ok: true, students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }