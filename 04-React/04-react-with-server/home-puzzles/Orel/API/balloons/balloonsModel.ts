import mongoose , {Schema} from "mongoose";

export interface Balloon{
    name:string ,
    src:string,
    hit:boolean
}

export const BalloonSchema = new Schema({
    name:String, 
    src:String,
    hit:Boolean
})


const BalloonModel = mongoose.model("balloons" , BalloonSchema)

export default BalloonModel