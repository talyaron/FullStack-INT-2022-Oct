import mongoose, {Schema} from "mongoose";

export interface Enemy {
  name: string;
  image: string,
  health: number
}


export const EnemySchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  health: { type: Number, required: true },
  
});

const EnemyModel = mongoose.model("enemies" , EnemySchema)

export default EnemyModel