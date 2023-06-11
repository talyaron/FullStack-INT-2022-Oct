import mongoose, { Schema } from "mongoose";

interface PopUpBalloons {
  _id: string;
  name: string;
  src: string;
  score: number;
}

const popUpBalloons: PopUpBalloons[] = [];

export const BalloonSchema = new Schema({
  name: String,
  src: String,
  score: Number,
});

const BallonModel = mongoose.model("balloons", BalloonSchema);

export default BallonModel;
