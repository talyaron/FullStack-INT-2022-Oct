import mongoose from 'mongoose'
import { UserSchema } from '../students/studentsModel';
import { CourseSchema } from '../courses/coursesModel';
const { Schema } = mongoose;

//Data type
export interface Messages {
    text: string;
}

//Scheme
export const MessagesSchema = new Schema({
    text:String,
    time:Date,
    sender:UserSchema,
    reciver:UserSchema,
    course:CourseSchema,
    seenBy:[UserSchema]
})

const MessagesModel = mongoose.model('courses',MessagesSchema)

export default MessagesModel