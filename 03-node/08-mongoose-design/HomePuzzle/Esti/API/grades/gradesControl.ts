
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
    const { courseName , teacherName , couresName , score , date } = req.body;

    const gradeDB = await GradeModel.create({ courseName , teacherName , couresName , score  , date});
    console.log(gradeDB);

    res.status(201).send({ ok: true , gradeDB});
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};


  export const deleteGrade = async (req:any, res:any) => {
    try {
      const { _id } = req.body;
  console.log(_id);
      const deleteGrade = await GradeModel.deleteOne({ _id });
      const grades = await GradeModel.find({});
  
      res.send({ success: true, grades });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const updateGrade = async (req:any , res:any)=>{

      try {
        const { _id  , score} = req.body;
    console.log(_id , score);
    const findGrade = await GradeModel.updateOne({ _id } , {score:score});
        const grades = await GradeModel.find({});
    
        res.send({ success: true, grades });
      } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
  }
