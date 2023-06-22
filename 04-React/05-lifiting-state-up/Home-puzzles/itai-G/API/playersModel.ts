import {Schema, model} from "mongoose";

interface Player {
    _id: string;
    name: string;
    image1: string;
    image2: string;
    score: number;
  }
  
export const playerSchema = new Schema({
    name: String,
    image1 : String,
    image2 : String,
});

const playerModel = model("player", playerSchema);

export default playerModel;