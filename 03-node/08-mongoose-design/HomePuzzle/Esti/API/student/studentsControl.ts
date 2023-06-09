import StudentModel from "./studnetsModel";

export const getStudents = async (req:any, res:any) => {
    try {
      const students = await StudentModel.find({});
  
      res.send({ students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

export const addStudent = async (req:any, res:any) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    //add students to DB;
    const studentDB = await StudentModel.create({ name, email, password });

    console.log(studentDB);

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateStudent = (req:any, res:any) => {
    try {
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const updateStudentName = (req:any, res:any) => {
    try {
      // const { name, uid } = req.body;
      // if (!name) throw new Error("No name in data");
      // if (!uid) throw new Error("No uid in data");
      // const student = students.find((student) => student.uid === uid);
      // if (!student) throw new Error("No student in array");
      // student.name = name;
      // res.send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const deleteStudent = async (req:any, res:any) => {
    try {
      const { _id } = req.body;
  
      const deleteStudent = await StudentModel.deleteOne({ _id });
      const students = await StudentModel.find({});
  
      res.send({ ok: true, students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }


