import mongoose, {Schema}  from "mongoose";
import { TeamSchema } from "../Teams/teamsModel";



//schema
export const PlayerSchema = new Schema({
    name: String,
    src: String,
  });
  
  const PlayerModel = mongoose.model("players", PlayerSchema);


  export default PlayerModel