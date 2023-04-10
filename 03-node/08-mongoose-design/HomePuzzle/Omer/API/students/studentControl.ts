import { triggerAsyncId } from "async_hooks";
import studentModel, { student } from "./studentModel";
import CourseModel from "../../../../example/API/courses/coursesModel";

export const addStudent = async (req:any, res:any) => {
    try {
        const {name,age} = req.body;
        await studentModel.create({name,age})
        res.status(201).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const getStudents = async (req:any, res:any) => {
    try {
        const students = await studentModel.find({})
        res.status(200).send(students)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const deleteStudent = async (req:any, res:any) => {
    try {
        const _id = req.body;
        await studentModel.findByIdAndDelete(_id)
        const students = await studentModel.find({})
        res.status(200).send(students)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const addCourse =async (req:any, res:any) => {
    try {
        const {course, student_id} = req.body;
        
        const student = await studentModel.findById(student_id)
        if(!student) throw new Error("student not found");
        const courses = student.courses;
        const index = courses.findIndex(course1 => course1._id == course._id)
        if(index != -1) {
            res.status(200).send({status: false, message: "course already added"})
        } else {
            courses.push(course);
            student.courses = courses;
            await student.save();
            console.log(student);
            res.status(200).send(true)
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const deleteCourseFromStudent =async (req:any, res:any) => {
    try {
        const {studentId, courseId} = req.body;
        const student = await studentModel.findById(studentId)
        if(!student) throw new Error("students not found");
        const courses = student.courses;
        const index = courses.findIndex(course => course._id == courseId);
        if(index == -1) throw new Error("course not found");
        courses.splice(index,1);
        student.courses = courses;
        await student.save();
        res.status(200).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}