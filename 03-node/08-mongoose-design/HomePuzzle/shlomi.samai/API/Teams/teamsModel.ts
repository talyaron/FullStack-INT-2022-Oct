import mongoose, {Schema}  from "mongoose";



//schema
export const TeamSchema = new Schema({
    name: String,
    src: String,
  });
  
  const TeamModel = mongoose.model("teams", TeamSchema);

  export default TeamModel