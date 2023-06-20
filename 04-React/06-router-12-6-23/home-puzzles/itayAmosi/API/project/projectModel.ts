import mongoose, { Schema, Document } from "mongoose";

interface Project extends Document {
  name: string;
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  description: string;
}

const ProjectSchema = new Schema<Project>({
  name: String,
  src1: String,
  src2: String,
  src3: String,
  src4: String,
  description: String,
});

const ProjectModel = mongoose.model<Project>("Project", ProjectSchema);

export default ProjectModel;