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