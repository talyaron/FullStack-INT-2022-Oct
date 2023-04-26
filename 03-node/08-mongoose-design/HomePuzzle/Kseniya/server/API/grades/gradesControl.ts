import GradeModel from "./gradesModel";


export const getGrades = async (req: any, res: any) => {
  try {
    const grades = await GradeModel.find({}).populate('courses').exec();
    res.send(grades);
    return grades;

  } catch (error: any) {
     console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export const addGrade = async (req:any, res:any) => {
    try {
      const { grade, student, course } = req.body;
      
      const gradeDB = await GradeModel.create({grade, student, course});
      
      res.status(201).send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };


  export const deleteGrade = async (req:any , res:any) => {
    try {
      const { _id } = req.body;
  
      const deletedGrade = await GradeModel.deleteOne({_id})
      const grades = await GradeModel.find({})
     
      res.send({ ok: true, grades });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }