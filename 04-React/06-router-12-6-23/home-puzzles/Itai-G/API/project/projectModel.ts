import mongoose, { Schema } from "mongoose"

interface Project {
    name:string;
    img:string;
    description:string;
}

const projects:Project[] = [];


export const ProjectSchema = new Schema({
    name:String,
    img:String,
    description:String,
})


const ProjectModel = mongoose.model("Projects",ProjectSchema);

export default ProjectModel;
