import { Schema, model } from "mongoose";


export const projectSchema = new Schema({
    name: String,
    work: String,  
});

const projectModel = model("project",projectSchema);

export default projectModel;