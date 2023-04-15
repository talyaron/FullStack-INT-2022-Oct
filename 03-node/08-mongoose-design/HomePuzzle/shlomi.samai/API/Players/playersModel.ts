import mongoose, {Schema}  from "mongoose";
import { teamsSchema } from "../Teams/teamsModel";


interface Player {
    // public uid: string = uuid();
    name: string;
    src: string;
  }

//schema
const PlayerSchema = new Schema({
    name: String,
    src: String,
    pastTeams:[teamsSchema]
  });
  
  const PlayerModel = mongoose.model("players", PlayerSchema);

  export default PlayerModel