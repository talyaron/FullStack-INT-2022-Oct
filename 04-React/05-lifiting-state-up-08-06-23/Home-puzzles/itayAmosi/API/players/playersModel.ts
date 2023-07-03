import mongoose, { Schema } from "mongoose";

interface Player {
  _id: string;
  name: string;
  src1: string;
  src2: string;
  score: number;
}

const players: Player[] = [];

export const PlayerSchema = new Schema({
  name: String,
  src1: String,
  src2: String,
  score: Number,
});

const PlayerModel = mongoose.model("players", PlayerSchema);

export default PlayerModel;
