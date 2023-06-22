

import mongoose, { Schema } from "mongoose";
// import { UserSchema } from "../users/userModel";


export interface Scores {
  userId: string,
  playerName: string,
  score: number,
  competitionPlace: number,
};

export const ScoreSchema = new Schema({
  userId: String,
  playerName:String,
  score: Number,
  competitionPlace: Number,
});


export const ScoreModel = mongoose.model("score", ScoreSchema);

export default ScoreModel;
