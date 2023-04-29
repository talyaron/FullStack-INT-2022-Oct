import mongoose, { Schema } from "mongoose";
import { CourseSchema } from "../courses/coursesModel";
import { UserSchema } from "../users/usersModel";
//schema

interface Messages {
  // public uid: string = uuid();
  name: string;
  src: string;
}

const MessagesSchema = new Schema({
  text: String,
  time: Date,
  sender: UserSchema,
  receiver:UserSchema,
  course: CourseSchema,
  seenBy:[UserSchema]
});

const MessagesModel = mongoose.model("users", MessagesSchema);

export default MessagesModel;
