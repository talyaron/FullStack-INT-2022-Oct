import mongoose, { Schema } from "mongoose";

export interface Teachers {
  name: string;
  password: string;
}

export const TeachersSchema = new Schema<Teachers>({
  name: String,
  password: String,
});

const TeachersModel = mongoose.model("teachers" , TeachersSchema)

export default TeachersModel;
