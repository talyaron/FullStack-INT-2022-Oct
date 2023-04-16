import mongoose, {Schema}  from "mongoose";

interface Player {
    // public uid: string = uuid();
    name: string;
    src: string;
  }

//schema
const PlayerSchema = new Schema({
    name: String,
    src: String,
  });
  
  const PlayerModel = mongoose.model("players", PlayerSchema);

  export default PlayerModel