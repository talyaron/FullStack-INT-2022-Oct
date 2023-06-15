import mongoose, { Schema } from "mongoose";

interface Project {
  _id: string;
  name: string;
  src1: string;
  src2: string;
  score: number;
}

const projects: Project[] = [];

export const ProjectSchema = new Schema({
  name: String,
  src1: String,
  src2: String,
  score: Number,
});

const ProjectModel = mongoose.model("Projects", ProjectSchema);

export default ProjectModel;
