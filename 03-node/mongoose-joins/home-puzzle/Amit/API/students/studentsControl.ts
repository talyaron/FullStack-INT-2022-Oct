import StudentModel from "./studentsModel";

export const addStudent = async (req:any, res:any) => {
    try {
      const { name } = req.body;
      const studentDB = await StudentModel.create({name});

      const students = await StudentModel.find({})
      if (!students) throw new Error("No students found");
      
      res.status(201).send({ ok: true, students });
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
      const { _id, updatedName} = req.body;
      if (!_id) throw new Error("No _id in data");
      if (!updatedName) throw new Error("No updated Name in data");

      const student = await StudentModel.findById(_id);
      if(!student) throw new Error("no student found");
      
      const updatedNameDB = await StudentModel.updateOne({_id}, {name: updatedName});

      await student.save();
      const students = await StudentModel.find({})
      if (!students) throw new Error("No students found");
      
      res.send({ ok: true, students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const deleteStudent = async (req:any , res:any) => {
    try {
      const { _id } = req.body;
  
      const deletedStudent = await StudentModel.deleteOne({_id})
      const students = await StudentModel.find({})
     
      res.send({ ok: true, students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }





