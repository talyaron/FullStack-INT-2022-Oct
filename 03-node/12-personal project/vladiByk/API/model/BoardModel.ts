import mongoose, { Schema } from "mongoose";
import { UserSchema } from "./UserModel";
import { ListSchema } from "./ListModel";

interface Board {
  name: string;
  _id: string;
}

export const BoardSchema: Schema = new Schema(
  {
    boardName: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    userArray: {
      type: [UserSchema],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<Board>("Board", BoardSchema);
