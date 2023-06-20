import mongoose, { Schema, Document } from "mongoose";

interface Comment extends Document {
  user: {
    type: Schema.Types.ObjectId;
    ref: "user";
    required: false;
  };
  project: {
    type: Schema.Types.ObjectId;
    ref: "project";
    required: false;
  };
  comment: string;
}

const CommentSchema = new Schema<Comment>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: false,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "project",
    required: false,
  },
  comment: String,

});

const CommentModel = mongoose.model<Comment>("Comment", CommentSchema);

export default CommentModel;
