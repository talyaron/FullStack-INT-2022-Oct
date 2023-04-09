import { triggerAsyncId } from "async_hooks";
import studentModel from "./studentModel";

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