import mongoose, { Schema } from "mongoose";


export interface Balloon {
  color: string;
  status: string;
}

export const BalloonSchema = new Schema({
  color: String,
  status: String,
});

const BalloonModel = mongoose.model<Balloon>("balloons", BalloonSchema);

export default BalloonModel;
