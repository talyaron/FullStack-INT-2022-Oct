import mongoose, {Schema} from "mongoose";

export interface teams {
    name:string;
}


export const teamsSchema = new Schema({
    
  pastTeamsName: String,
  src: String,  
  });

const teamsModel= mongoose.model("teams", teamsSchema);

export default teamsModel

