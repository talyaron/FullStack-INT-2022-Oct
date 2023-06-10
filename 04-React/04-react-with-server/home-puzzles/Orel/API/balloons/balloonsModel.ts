import mongoose , {Schema} from "mongoose";

export interface Balloon{
    name:string ,
    src:string,
    score?:number
}

export const BalloonSchema = new Schema({
    name:String, 
    src:String,
    score:Number
})


const BalloonModel = mongoose.model("balloons" , BalloonSchema)

export default BalloonModel