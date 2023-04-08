import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";


export const TeacherSchema = new Schema ({
    uid: String,
    name: String,
    englishClass: Number,
    mathClass: Number,
    sportsClass: Number,
    historyClass: Number,
    avg: Number,
});

const TeacherModel = mongoose.model("teachers", TeacherSchema);

export default TeacherModel;