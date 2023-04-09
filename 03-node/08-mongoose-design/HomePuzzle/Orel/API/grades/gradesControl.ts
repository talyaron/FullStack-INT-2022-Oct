
import GradeModel from "./gradesModel";



export const getGrades = async (req:any, res:any) => {
    try {
      const grades = await GradeModel.find({});
      res.send({ grades });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }


export const addGrade = async (req:any, res:any) => {
  try {
    const {courseName ,  studentName, teacherName , assignmentName , score , date } = req.body;

    const gradeDB = await GradeModel.create({courseName , teacherName , assignmentName , score  , date});
    console.log(gradeDB);

    res.status(201).send({ ok: true , gradeDB});
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

  export const updateGrade = (req:any, res:any) => {
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


  export const deleteGrade = async (req:any, res:any) => {
    try {
      const { _id } = req.body;
  
      const deleteCourse = await GradeModel.deleteOne({ _id });
      const courses = await GradeModel.find({});
  
      res.send({ success: true, courses });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const updateGradeName = async (req:any , res:any)=>{
    try{
        
    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
  }
