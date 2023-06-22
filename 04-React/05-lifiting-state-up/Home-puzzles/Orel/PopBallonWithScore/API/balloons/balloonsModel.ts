import mongoose , {Schema} from "mongoose";

export interface Balloon{
    name:string ,
    src:string,
    score?:number
}

export const BalloonSchema = new Schema({
    name:String, 
    src:{
        type:String,
        require:true
    },
    score:{
        type:Number,
        default:0,
    }
})


const BalloonModel = mongoose.model("balloons" , BalloonSchema)

export default BalloonModel