import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";


const teacherSchema = new Schema ({
    uid: String,
    name: String,
    englishClass: Number,
    mathClass: Number,
    sportsClass: Number,
    historyClass: Number,
    avg: Number,
});

const TeacherModel = mongoose.model("teachers", teacherSchema);

export default TeacherModel;