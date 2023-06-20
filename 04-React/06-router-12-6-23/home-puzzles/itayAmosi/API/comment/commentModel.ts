import mongoose, { Schema, Document } from "mongoose";

interface Comment extends Document {
  comment: string;
  projectId: string;
}

const CommentSchema = new Schema<Comment>({
  comment: String,
  projectId: String,
});

const CommentModel = mongoose.model<Comment>("Comment", CommentSchema);

export default CommentModel;
