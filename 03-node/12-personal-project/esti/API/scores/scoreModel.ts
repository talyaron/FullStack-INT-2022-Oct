

import mongoose, { Schema } from "mongoose";
import { UserSnakSchema } from "../users/userModel";


export interface Scores {
  userName: string,
  score: number,
  winner: boolean,
  competitionPlace: number,
};

export const ScoreSchema = new Schema({
  user: UserSnakSchema,
  score: Number,
  winner: Boolean,
  competitionPlace: Number,
});


export const ScoreModel = mongoose.model("score", ScoreSchema);

export default ScoreModel;
