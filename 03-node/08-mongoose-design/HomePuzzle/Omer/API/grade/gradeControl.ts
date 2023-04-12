import studentModel from "../students/studentModel";
import { student } from "../students/studentModel";
import gradeModel, { grade } from "./gradeModel";

export const addGrade =async (req:any, res:any) => {
    try {
        const {grade, student_id, courseName} = req.body;        
        const student = await studentModel.findById(student_id)
        if(!student) throw new Error("student not found");
        const grades = student.grades;
        const index = (grades as grade[]).findIndex(grade => grade.courseName == courseName);
        if(index != -1) {
            res.status(200).send({message: "grade already addes"})
        } else {
            const newGrade  = await gradeModel.create({courseName,grade});
            newGrade.gradeNum = grade;
            await newGrade.save()            
            grades.push(newGrade);
            await student.save()
            res.status(201).send(true)
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const deleteGrade =async (req:any, res:any) => {
    try {
        const { studentId, courseName } = req.body;
        const student = await studentModel.findById(studentId);
        if(!student) throw new Error("student not found");
        const grades = student.grades;
        if(!grades) throw new Error("grades not found");
        const index = grades.findIndex(grade => grade.courseName == courseName);
        if(index == -1) throw new Error("course does not have grade");
        grades.splice(index,1);
        student.grades = grades;
        await student.save();
        res.status(200).send(true);
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}
