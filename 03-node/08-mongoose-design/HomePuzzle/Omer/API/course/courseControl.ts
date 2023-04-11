import studentModel from "../students/studentModel";
import courseModel from "./courseModel";

export const addCourse =async (req:any, res:any) => {
    try {
        const name = req.body;
        const course = await courseModel.create(name)
        console.log(course);
        
        res.status(201).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const getCourses = async (req:any, res:any) => {
    try {
        const courses = await courseModel.find({});
        res.status(200).send(courses);
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const deleteCourse =async (req:any, res:any) => {
    try {
        const {courseId} = req.body;
        const students = await studentModel.find({});   
        students.forEach(async (student) => {
            const courses = student.courses;
            const index = courses.findIndex(course => course._id == courseId);
            if(index != -1) {
                courses.splice(index, 1);
                student.courses = courses;
                await student.save();
            }
        })
        await courseModel.findByIdAndDelete(courseId);
        res.status(200).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}