import TeacherModel from "./teachersModel";

export const getTeachers = async (req:any, res:any) => {
    try {
      const teachers = await TeacherModel.find({});
  
      res.send({ teachers });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

export const addTeacher = async (req:any, res:any) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    //add teachers to DB;
    const teacherDB = await TeacherModel.create({ name, email, password });

    console.log(teacherDB);

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateTeacher = (req:any, res:any) => {
    try {
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const updateTeacherName = (req:any, res:any) => {
    try {
      // const { name, uid } = req.body;
      // if (!name) throw new Error("No name in data");
      // if (!uid) throw new Error("No uid in data");
      // const teacher = teachers.find((teacher) => teacher.uid === uid);
      // if (!teacher) throw new Error("No teacher in array");
      // teacher.name = name;
      // res.send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const deleteTeacher = async (req:any, res:any) => {
    try {
      const { _id } = req.body;
  
      const deleteTeacher = await TeacherModel.deleteOne({ _id });
      const teachers = await TeacherModel.find({});
  
      res.send({ ok: true, teachers });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

