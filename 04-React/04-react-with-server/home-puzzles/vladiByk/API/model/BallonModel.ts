import mongoose, { Schema } from "mongoose";
export interface BallonInterface {
  color: string;
  _id: string;
}

export const BallonSchema: Schema = new Schema({
  color: {
    type: String,
    required: true,
  },
  radius: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<BallonInterface>("Ballon", BallonSchema);
