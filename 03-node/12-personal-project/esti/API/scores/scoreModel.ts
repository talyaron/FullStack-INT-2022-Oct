

import mongoose, { Schema } from "mongoose";
import { UserSchema } from "../users/userModel";


export interface Scores {
  userName: string,
  score: number,
  competitionPlace: number,
};

export const ScoreSchema = new Schema({
  user: UserSchema,
  score: Number,
  competitionPlace: Number,
});


export const ScoreModel = mongoose.model("score", ScoreSchema);

export default ScoreModel;
