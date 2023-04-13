import mongoose, { Schema } from "mongoose";

export interface Teachers {
  name: string;
}

export const TeachersSchema = new Schema({
  name: String,
});

const TeachersModel = mongoose.model("teachers" , TeachersSchema)

export default TeachersModel;
