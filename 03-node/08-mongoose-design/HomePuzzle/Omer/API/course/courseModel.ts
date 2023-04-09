import mongoose, {Schema} from "mongoose";

export interface course {
    _id:string,
    name:string,
}

export const courseSchema = new Schema({
    name:String,
});

const courseModel = mongoose.model("course", courseSchema);

export default courseModel;