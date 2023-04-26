import mongoose, { Schema } from "mongoose";

export interface Teachers {
  name: string;
  email?: string;
  password: string;
}

export const TeachersSchema = new Schema<Teachers>({
  name: String,
  email: String,
  password: String,
});

const TeachersModel = mongoose.model("teachers" , TeachersSchema)

export default TeachersModel;
