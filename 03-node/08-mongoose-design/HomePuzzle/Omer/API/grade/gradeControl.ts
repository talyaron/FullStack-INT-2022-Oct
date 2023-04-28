import studentModel from "../students/studentModel";
import { student } from "../students/studentModel";
import gradeModel, { grade } from "./gradeModel";

export const addGrade =async (req:any, res:any) => {
    try {
        const {grade, student_id, courseName} = req.body;        
        const student = await studentModel.findById(student_id)
        if(!student) throw new Error("student not found");
        const grades = student.grades;
        const index = (grades as unknown as grade[]).findIndex(grade => grade.courseName == courseName);
        if(index != -1) {
            res.status(200).send({message: "grade already addes"})
        } else {
            const newGrade  = await gradeModel.create({courseName});
            newGrade.studentId = student_id;
            await newGrade.gradeNum.push(grade);
            await newGrade.save()            
            await grades.push(newGrade);
            await student.save()
            res.status(201).send(true)
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const deleteAllGrades =async (req:any, res:any) => {
    try {
        const {courseName} = req.body;
        const grades = await gradeModel.find({});
        grades.forEach(async (grade) => {
            if(grade.courseName == courseName) {
                const id = grade.id;
                await gradeModel.findByIdAndDelete(id);
            }
        })
        res.status(200).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const deleteGradeFromStudent =async (req:any, res:any) => {
    try {
        const {_id} = req.body;
        const grades = await gradeModel.find({});
        grades.forEach(async (grade) => {
            if(grade.studentId == _id) {
                const id = grade.id;
                await gradeModel.findByIdAndDelete(id);
            }
        })
        res.status(200).send(true)
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
        const id = grades[index]._id;
        if(index == -1) throw new Error("course does not have grade");
        grades.splice(index,1);
        student.grades = grades;
        await student.save();
        const allGrades = await gradeModel.find({});
        if(!allGrades) throw new Error("grades not found");
        await gradeModel.findByIdAndDelete(id)
        res.status(200).send(true);
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const addGradeToStudent = async (req:any, res:any) => {
    try {
        const {studentId, courseName, grade} = req.body;
        const student = await studentModel.findById(studentId);
        if(!student) throw new Error("student not found");
        const grades = student.grades;
        if(!grades) throw new Error("grades not found");
        const index = grades.findIndex(grade => grade.courseName == courseName);
        if(index == -1) throw new Error("course does not have grade");
        const id = grades[index]._id;        
        const curGrade = await gradeModel.findById(id);
        if(!curGrade) throw new Error("grade not found in model");
        curGrade.gradeNum.push(grade);
        student.grades.forEach((grade) => {
            if(grade.courseName == curGrade.courseName) {
                grade.gradeNum = curGrade.gradeNum;
            }
        })
        await curGrade.save();
        await student.save();
        res.status(200).send(true);
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}
