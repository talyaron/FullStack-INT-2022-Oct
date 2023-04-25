import Grademodel from "./gradesModel";

export const createGrade = async (req: any , res:any)=>{
const { grade } = req.body;
const gradeDB = await Grademodel.create({grade});
res.status(200).send({Grade:gradeDB})
}