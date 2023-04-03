import StudentModel from "./studentsModel";

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
    const { name, src } = req.body;
    console.log(name, src);

    //add users to DB;
    const studentDB = await StudentModel.create({ name, src });

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

/*
  export const updateUserName = (req:any, res:any) => {
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

*/

  export const deleteStudent = async (req:any, res:any) => {
    try {
      const { _id } = req.body;
  
      const deltedStudent = await StudentModel.deleteOne({ _id });
      const students = await StudentModel.find({});
  
      res.send({ ok: true, students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }