import mongoose, { Schema } from "mongoose";

interface Project {
  _id: string;
  name: string;
  src1: string;
  src2: string;
  src3: string;
  src4: string;
}

const projects: Project[] = [];

export const ProjectSchema = new Schema<Project>({
  name: String,
  src1: String,
  src2: String,
  src3: String,
  src4: String,
});

const ProjectModel = mongoose.model("Projects", ProjectSchema);

export default ProjectModel;
